/* ============================================================
   scoring.js  (logical module: /src/engine/scoring)
   Per-item scoring + mastery. Operates on the shared `state`.
   Mastery = N distinct days + independent-accuracy threshold +
   >= N distinct activity formats (per skill's masteryCriteria).
   ============================================================ */

/** @returns the per-skill record, creating it if needed. */
function skillRec(id){
  state.skills = state.skills || {};
  return state.skills[id] || (state.skills[id] = { att:0, indGood:0, supported:0, days:{}, formats:{}, mis:{}, recent:[] });
}

/**
 * Record one completed practice ITEM (not each tap).
 * @param {string} skillId
 * @param {{format:string, promptLevel:("independent"|"replay"|"visual"|"modeled"), misconceptions?:string[], when?:string}} a
 */
function recordItem(skillId, a){
  if(!skillId) return;
  const s = skillRec(skillId);
  s.att++;
  if(a.promptLevel==="independent") s.indGood++; else s.supported++;
  s.days[a.when||todayKey()] = true;
  if(a.format) s.formats[a.format] = true;
  (a.misconceptions||[]).forEach(t=>{ s.mis[t]=(s.mis[t]||0)+1; });
  s.recent.push({ ok:a.promptLevel==="independent"?1:0, pl:a.promptLevel, fmt:a.format||"", mis:(a.misconceptions||[])[0]||null, d:a.when||todayKey() });
  if(s.recent.length>40) s.recent.shift();
  saveState();
}

function indAccuracy(skillId){ const s=state.skills&&state.skills[skillId]; return (s&&s.att)? s.indGood/s.att : 0; }
function recentIndAccuracy(skillId,n){ const s=state.skills&&state.skills[skillId]; if(!s||!s.recent.length) return null; const r=s.recent.slice(-(n||6)); return r.reduce((x,y)=>x+y.ok,0)/r.length; }

/** @returns "not-started"|"needs-support"|"supported"|"emerging"|"mastered" */
function skillState(skillId){
  const s = state.skills && state.skills[skillId];
  const sk = SKILL_BY_ID[skillId];
  if(!s || !s.att) return "not-started";
  const crit = (sk && sk.masteryCriteria) || MASTERY_DEFAULT;
  const days = Object.keys(s.days).length;
  const formats = Object.keys(s.formats).length;
  const ratio = indAccuracy(skillId);
  if(days>=crit.days && formats>=crit.formats && ratio>=crit.independentAccuracy) return "mastered";
  if(s.att>=3 && ratio>=0.6) return "emerging";
  if(s.supported>=2 && ratio<0.6) return "supported";
  return "needs-support";
}
function isMastered(skillId){ return skillState(skillId)==="mastered"; }

/** 0..100 toward mastery (days, formats, independent accuracy averaged). */
function skillProgress(skillId){
  const s = state.skills && state.skills[skillId]; const sk = SKILL_BY_ID[skillId];
  if(!s || !s.att) return 0;
  const crit = (sk && sk.masteryCriteria) || MASTERY_DEFAULT;
  const d = Math.min(1, Object.keys(s.days).length / crit.days);
  const f = Math.min(1, Object.keys(s.formats).length / crit.formats);
  const a = Math.min(1, indAccuracy(skillId) / crit.independentAccuracy);
  return Math.round(100 * (d+f+a) / 3);
}
