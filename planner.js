/* ============================================================
   planner.js  (logical module: /src/engine/sessionPlanner)
   Builds the adaptive daily plan:
   2 review · 2 target · 1 comprehension/operation · 1 communication
   · 1 emotional-regulation · 1 easy success at the end.
   Returns steps: {skillId, topic, kind, level, len, slot, modeled?}
   ============================================================ */

function planStep(skillId, preferredFormat, slot, len, modeled){
  const a = activityForSkill(skillId, preferredFormat);
  if(!a) return null;
  return { skillId, topic:a.topic, kind:a.kind, level:a.level, len:len||2, slot, modeled:!!modeled };
}

function buildAdaptivePlan(){
  const used = new Set();
  const steps = [];
  const take = (s)=>{ if(s){ used.add(s.skillId); steps.push(s); } return s; };

  const mastered = masteredSkills();
  const targets = availableTargets();
  const isFlagged = (s)=> state.flags && state.flags["modeled:"+s.skillId];
  const targetSorted = [
    ...targets.filter(isFlagged),
    ...targets.filter(s=>!isFlagged(s)).sort((a,b)=> skillProgress(a.skillId)-skillProgress(b.skillId))
  ];

  // 2 review (mastered skills, rotate, length 2)
  let r=0; for(const s of mastered){ if(r>=2) break; if(used.has(s.skillId)) continue; if(take(planStep(s.skillId,null,"review",2))) r++; }

  // 2 target — prefer flagged-for-modeling; if flagged, lead with a teaching format
  let t=0; for(const s of targetSorted){ if(t>=2) break; if(used.has(s.skillId)) continue;
    const modeled = !!isFlagged(s);
    const pref = modeled ? (s.formats.includes("learn") ? "learn" : (s.formats.includes("sticks") ? "sticks" : null)) : null;
    if(take(planStep(s.skillId, pref, "target", 2, modeled))) t++;
  }

  // 1 comprehension / operation
  if(!steps.some(x=>x.slot==="comprehension"))
    take(planStep( SKILL_BY_ID["m.wordclue"] && !used.has("m.wordclue") ? "m.wordclue" : "c.directions", null, "comprehension", 2));

  // 1 communication
  { const c = skillsByDomain("communication").find(s=>!s.ungraded && s.formats.length && !used.has(s.skillId));
    if(c) take(planStep(c.skillId, "choose", "communication", 2)); }

  // 1 emotional regulation
  { const e = skillsByDomain("social-emotional").find(s=>s.formats.length && !used.has(s.skillId));
    if(e) take(planStep(e.skillId, null, "emotional", 1)); }

  // 1 easy success at the end (a mastered skill, else an earliest skill)
  { const easy = mastered.find(s=>!used.has(s.skillId)) || CURRICULUM.find(s=>!s.planned && s.formats.length);
    if(easy) steps.push(planStep(easy.skillId, null, "success", 1)); }

  const clean = steps.filter(Boolean);
  return clean.length>=5 ? clean : COLD_START_PLAN();
}

/** Sensible first-time sequence before there's enough data. */
function COLD_START_PLAN(){
  const seq = [
    ["r.cvc_a","find",2,"warmup"], ["m.add1","sticks",2,"target"], ["m.wordclue","sort",2,"comprehension"],
    ["c.request","choose",2,"communication"], ["m.sub1","tally",2,"target"], ["r.story","read",1,"core"], ["se.emotions","feel",1,"emotional"]
  ];
  return seq.map(([sid,kind,len,slot])=> planStep(sid,kind,slot,len)).filter(Boolean);
}
