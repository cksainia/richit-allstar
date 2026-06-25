/* ============================================================
   curriculum.js  (logical module: /src/data/curriculum)
   Original curriculum schema + skill graph for Richit's All-Star Field.
   Zero-build: plain script, shared global scope. JSDoc types so an
   editor / `tsc --checkJs` can type-check without a build step.

   No proprietary content — all skills/strands authored here.
   ============================================================ */

/**
 * @typedef {"math"|"reading"|"language"|"social-emotional"|"communication"} Domain
 * @typedef {"independent"|"replay"|"visual"|"modeled"} PromptLevel
 * @typedef {Object} MasteryCriteria
 * @property {number} days   distinct days practiced
 * @property {number} independentAccuracy  0..1 on independent attempts
 * @property {number} formats  distinct activity formats
 *
 * @typedef {Object} Skill
 * @property {string} skillId
 * @property {Domain} domain
 * @property {string} strand
 * @property {string} label
 * @property {string} gradeBand
 * @property {number} developmentalLevel   1=earliest
 * @property {string[]} prerequisiteSkillIds
 * @property {MasteryCriteria} masteryCriteria
 * @property {PromptLevel[]} promptLevels
 * @property {string[]} misconceptionTags
 * @property {Object[]} itemTemplates   how items are produced (generated|bank|board)
 * @property {number} visualSupportLevel  0..3
 * @property {number} speechDemandLevel   0..3  (AAC = low; speech never required)
 * @property {string} [topic]   data.js topic id this skill runs on
 * @property {number} [level]   math level (1|2) if applicable
 * @property {string[]} [formats]   runnable activity kinds
 * @property {boolean} [planned] true = defined but no runnable activity yet
 */

const MASTERY_DEFAULT = { days:3, independentAccuracy:0.8, formats:2 };
const PROMPT_LEVELS = ["independent","replay","visual","modeled"];

/** All misconception tags the engine can classify. */
const MISCONCEPTION_TAGS = [
  "choseSumOnSub",
  "choseDifferenceOnAdd",
  "offByOne",
  "countedOnlyFirstGroup",
  "ignoredSecondGroup",
  "guessedWithoutModel",
  "neededAudioReplay",
  "neededAnswerReveal",
  "operationConfusion",
  "wrongWordMeaning",
];

/** Human-readable labels for the dashboard. */
const MISCONCEPTION_LABEL = {
  choseSumOnSub:"chose the sum on a subtraction problem",
  choseDifferenceOnAdd:"subtracted on an addition problem",
  offByOne:"off by one (counting slip)",
  countedOnlyFirstGroup:"counted only the first group",
  ignoredSecondGroup:"ignored the second group",
  guessedWithoutModel:"answered without using the blocks/model",
  neededAudioReplay:"needed the instruction repeated",
  neededAnswerReveal:"needed the answer shown",
  operationConfusion:"mixed up the +/− sign",
  wrongWordMeaning:"misread a math word (e.g. 'altogether' vs 'left')",
};

/** @type {Skill[]} */
const CURRICULUM = [
  /* ---------- READING · phonics ---------- */
  sk("r.letters","reading","phonics","Letter sounds","K",1,[], {topic:"letters",formats:["learn","find","say"],vis:3,spd:1,
     tags:[], dev:"Names a letter, says its sound, and finds its beginning sound."}),
  sk("r.cvc_a","reading","phonics","Short a words","K-1",2,["r.letters"], {topic:"cvc_a",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.cvc_e","reading","phonics","Short e words","K-1",2,["r.letters"], {topic:"cvc_e",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.cvc_i","reading","phonics","Short i words","K-1",2,["r.letters"], {topic:"cvc_i",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.cvc_o","reading","phonics","Short o words","K-1",2,["r.letters"], {topic:"cvc_o",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.cvc_u","reading","phonics","Short u words","K-1",2,["r.letters"], {topic:"cvc_u",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.digraphs","reading","phonics","Digraphs sh·ch·th","1",3,["r.cvc_a","r.cvc_i"], {topic:"digraphs",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.blends","reading","phonics","Blends","1",3,["r.cvc_a","r.cvc_o"], {topic:"blends",formats:["learn","find","say"],vis:3,spd:1}),
  sk("r.sight1","reading","sight-words","Sight words 1","K-1",2,[], {topic:"sight1",formats:["learn","find"],vis:1,spd:1}),
  sk("r.sight2","reading","sight-words","Sight words 2","1",3,["r.sight1"], {topic:"sight2",formats:["learn","find"],vis:1,spd:1}),
  sk("r.rhyme","reading","phonological-awareness","Rhyming","K",1,[], {topic:"rhyme",formats:["play"],vis:3,spd:1,
     dev:"Hears a word and picks the word that rhymes."}),
  sk("r.syllables","reading","phonological-awareness","Syllables","K-1",2,[], {topic:"syllables",formats:["play"],vis:3,spd:1,
     dev:"Claps and counts the syllables (beats) in a word."}),
  sk("r.minpairs","reading","phonics","Sound match (minimal pairs)","1",3,["r.cvc_a"], {topic:"minpairs",formats:["play"],vis:3,spd:1,
     dev:"Hears a word and picks the right one from a near pair (cat / cap)."}),
  sk("r.sequence","reading","comprehension","Sequencing (first/next/last)","1",4,["r.sight1"], {topic:"sequence",formats:["play"],vis:3,spd:1,
     dev:"Puts the events of a short story in order: first, next, last."}),
  sk("r.decodable","reading","fluency","Read a decodable sentence","1",4,["r.cvc_a","r.sight1"], {topic:"decodable",formats:["read"],vis:3,spd:1,
     dev:"Reads a short decodable sentence and answers a question about it."}),
  sk("r.story","reading","comprehension","Story comprehension","1",4,["r.sight1"], {topic:"stories",formats:["read"],vis:3,spd:1,
     tags:[], dev:"Answers who / what / where about a short read-aloud story with picture choices."}),

  /* ---------- MATH · number sense ---------- */
  sk("m.count","math","number-sense","Count objects","K",1,[], {topic:"ns_count",formats:["play"],vis:3,spd:1,
     dev:"Counts a set of objects one-to-one and chooses how many."}),
  sk("m.numeral","math","number-sense","Match numeral to quantity","K",1,["m.count"], {topic:"ns_numeral",formats:["play"],vis:3,spd:1,
     dev:"Matches a written number to the group with that many."}),
  sk("m.compare","math","number-sense","More / less / equal","K-1",2,["m.count"], {topic:"ns_compare",formats:["play"],vis:3,spd:1,
     dev:"Decides which group has more, fewer, or the same."}),
  sk("m.wordproblem","math","operation-comprehension","Word problems (5 steps)","1-2",4,["m.wordclue"], {topic:"wordprob",formats:["solve"],vis:3,spd:1,
     tags:["operationConfusion","choseSumOnSub","choseDifferenceOnAdd"],
     dev:"Reads a story problem and works through 5 gates: what's happening, add or take away, which numbers, show it, solve."}),

  /* ---------- MATH · operations ---------- */
  sk("m.wordclue","math","operation-comprehension","Add or take-away words","1",2,[], {topic:"wordclue",formats:["sort"],vis:2,spd:1,
     tags:["wrongWordMeaning","operationConfusion"],
     dev:"Decides whether a word (altogether, left, more, fewer) means put together or take away."}),
  sk("m.add1","math","operations","Addition to 18 (single digit)","1",3,["m.count"], {topic:"add",level:1,formats:["sticks","tally","numberline","quiz"],vis:3,spd:1,
     tags:["choseDifferenceOnAdd","offByOne","countedOnlyFirstGroup","ignoredSecondGroup","guessedWithoutModel","operationConfusion"],
     dev:"Adds two single-digit numbers using blocks, tally marks, a number line, then symbols."}),
  sk("m.sub1","math","operations","Subtraction within 10","1",3,["m.count"], {topic:"sub",level:1,formats:["sticks","tally","numberline","quiz"],vis:3,spd:1,
     tags:["choseSumOnSub","offByOne","guessedWithoutModel","operationConfusion"],
     dev:"Takes away within 10 using blocks, tally marks, a number line, then symbols."}),
  sk("m.add2","math","operations","Addition (double digit)","2",4,["m.add1"], {topic:"add",level:2,formats:["sticks","tally","numberline","quiz"],vis:3,spd:1,
     tags:["choseDifferenceOnAdd","offByOne","operationConfusion"]}),
  sk("m.sub2","math","operations","Subtraction (double digit, no borrow)","2",4,["m.sub1"], {topic:"sub",level:2,formats:["sticks","numberline","quiz"],vis:3,spd:1,
     tags:["choseSumOnSub","offByOne","operationConfusion"]}),

  /* ---------- LANGUAGE / COMMUNICATION ---------- */
  sk("c.request","communication","expressive","Asking for things","1",2,[], {topic:"comm_want",formats:["learn","choose","say"],vis:3,spd:2}),
  sk("c.comment","communication","expressive","Talking about things","1",2,[], {topic:"comm_comment",formats:["learn","choose","say"],vis:3,spd:2}),
  sk("c.problem","communication","expressive","When something is wrong","1",2,[], {topic:"comm_problem",formats:["learn","choose","say"],vis:3,spd:2}),
  sk("c.social","communication","social","Friends & manners","1",2,[], {topic:"comm_social",formats:["learn","choose","say"],vis:3,spd:2}),
  sk("c.directions","language","comprehension","Follow directions","1",3,[], {topic:"directions",formats:["do"],vis:3,spd:1,
     tags:[], dev:"Follows one- and two-step spoken directions."}),
  sk("c.aac","communication","AAC","My Words board","K",1,[], {topic:"__aac",formats:["board"],vis:3,spd:1, ungraded:true,
     dev:"Uses an AAC board to request, comment, and repair. Speech never required."}),

  /* ---------- SOCIAL-EMOTIONAL ---------- */
  sk("se.emotions","social-emotional","emotions","Name feelings & get calm","K-1",2,[], {topic:"feelings",formats:["feel"],vis:3,spd:1,
     dev:"Names a feeling from a situation and chooses a calming strategy."}),
];

/** Skill factory — keeps the array above readable. */
function sk(skillId, domain, strand, label, gradeBand, dev, prereqs, o){
  o=o||{};
  const fcount = (o.formats && o.formats.length) ? o.formats.length : 2;
  return {
    skillId, domain, strand, label, gradeBand, developmentalLevel:dev,
    prerequisiteSkillIds:prereqs||[],
    masteryCriteria: o.mastery || { days:3, independentAccuracy:0.8, formats: Math.min(2, Math.max(1, fcount)) },
    promptLevels: PROMPT_LEVELS.slice(),
    misconceptionTags: o.tags || [],
    itemTemplates: o.planned ? [{type:"planned"}] : (o.topic==="__aac" ? [{type:"board"}] : [{type:o.topic?"bank":"generated", topic:o.topic, level:o.level}]),
    visualSupportLevel: o.vis!=null?o.vis:3,
    speechDemandLevel: o.spd!=null?o.spd:1,
    topic:o.topic, level:o.level, formats:o.formats||[],
    planned:!!o.planned, ungraded:!!o.ungraded,
    developmentalDescription:o.dev||""
  };
}

const SKILL_BY_ID = {}; CURRICULUM.forEach(s=>SKILL_BY_ID[s.skillId]=s);

/** Map a running activity (topic id + math level) to its skill. */
function skillForActivity(topicId, level){
  return CURRICULUM.find(s=> s.topic===topicId && (s.level==null || s.level===(level||1))) || null;
}
/** Map a skill to a concrete runnable activity {topic, kind}. */
function activityForSkill(skillId, preferredFormat){
  const s=SKILL_BY_ID[skillId]; if(!s||!s.formats||!s.formats.length) return null;
  const kind = (preferredFormat && s.formats.includes(preferredFormat)) ? preferredFormat : s.formats[0];
  return { topic:s.topic, kind, level:s.level };
}
function skillsByDomain(domain){ return CURRICULUM.filter(s=>s.domain===domain); }
