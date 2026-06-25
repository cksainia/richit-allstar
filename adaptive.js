/* ============================================================
   adaptive.js  (logical module: /src/engine/adaptiveEngine)
   Misconception classification + skill-selection rules.
   ============================================================ */

/** Classify a wrong MATH answer into a misconception tag. */
function classifyMathError(it, chosen){
  const add = it.op==="add";
  if(!add && chosen===it.a+it.b) return "choseSumOnSub";
  if(add && chosen===Math.abs(it.a-it.b)) return "choseDifferenceOnAdd";
  if(add && chosen===it.a) return "countedOnlyFirstGroup";
  if(add && chosen===it.b) return "ignoredSecondGroup";
  if(Math.abs(chosen-it.ans)===1) return "offByOne";
  return null;
}

/** Selection rule: if recent independent accuracy < 70%, keep practicing the same skill. */
function shouldStayOnSkill(skillId){ const a = recentIndAccuracy(skillId,6); return a!=null && a < 0.70; }

/** If two of the last few misses share a misconception, flag a modeled lesson next. */
function flagModeledIfRepeated(skillId){
  const s = state.skills && state.skills[skillId]; if(!s) return;
  const last = s.recent.slice(-4).filter(r=> !r.ok && r.mis);
  const tally = {}; last.forEach(r=> tally[r.mis] = (tally[r.mis]||0)+1);
  const rep = Object.keys(tally).find(t=> tally[t] >= 2);
  if(rep){ state.flags = state.flags || {}; state.flags["modeled:"+skillId] = rep; saveState(); }
  return rep || null;
}
function clearModeledFlag(skillId){ if(state.flags) delete state.flags["modeled:"+skillId]; }

/** Skills available to target now: not mastered, prerequisites mastered, has a runnable activity. */
function availableTargets(){
  return CURRICULUM.filter(s =>
    !s.planned && !s.ungraded && s.formats.length &&
    skillState(s.skillId)!=="mastered" &&
    s.prerequisiteSkillIds.every(p => { const ps=SKILL_BY_ID[p]; return !ps || ps.planned || isMastered(p); })
  );
}
function masteredSkills(){ return CURRICULUM.filter(s => !s.planned && skillState(s.skillId)==="mastered"); }
function skillStateCounts(){
  const c = {"not-started":0,"needs-support":0,"supported":0,"emerging":0,"mastered":0};
  CURRICULUM.filter(s=>!s.planned&&!s.ungraded).forEach(s=> c[skillState(s.skillId)]++ );
  return c;
}
