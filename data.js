/* ============================================================
   Richit's All-Star Field — content pack
   Built around Richit's IEP (Autism, gestalt language processor):
   - phonics (decoding), comprehension, functional communication,
     following directions, feelings + social scripts
   - choice-based, picture-supported, flat/self-paced
   ============================================================ */

/* TOPIC schema:
   { id, name, emoji, type, color, items:[...] }
   types: "phonics" | "read" | "comm" | "directions" | "feelings"
   Activities the engine offers depend on type.
*/

const TOPICS = [

  /* =================== PHONICS / DECODING =================== */
  { id:"letters", name:"Letter Sounds", emoji:"🔤", type:"phonics", sub:"letter", color:"blue", items:[
    {word:"a", sounds:["a"], ic:"🍎", label:"apple"},
    {word:"b", sounds:["b"], ic:"⚾", label:"ball"},
    {word:"c", sounds:["c"], ic:"🐱", label:"cat"},
    {word:"d", sounds:["d"], ic:"🐶", label:"dog"},
    {word:"e", sounds:["e"], ic:"🥚", label:"egg"},
    {word:"f", sounds:["f"], ic:"🐟", label:"fish"},
    {word:"g", sounds:["g"], ic:"🐐", label:"goat"},
    {word:"h", sounds:["h"], ic:"🎩", label:"hat"},
    {word:"i", sounds:["i"], ic:"🍦", label:"ice cream"},
    {word:"j", sounds:["j"], ic:"🧃", label:"juice"},
    {word:"k", sounds:["k"], ic:"🪁", label:"kite"},
    {word:"l", sounds:["l"], ic:"🦁", label:"lion"},
    {word:"m", sounds:["m"], ic:"🌙", label:"moon"},
    {word:"n", sounds:["n"], ic:"👃", label:"nose"},
    {word:"o", sounds:["o"], ic:"🐙", label:"octopus"},
    {word:"p", sounds:["p"], ic:"🍕", label:"pizza"},
    {word:"q", sounds:["q"], ic:"👑", label:"queen"},
    {word:"r", sounds:["r"], ic:"🤖", label:"robot"},
    {word:"s", sounds:["s"], ic:"☀️", label:"sun"},
    {word:"t", sounds:["t"], ic:"🌳", label:"tree"},
    {word:"u", sounds:["u"], ic:"☂️", label:"umbrella"},
    {word:"v", sounds:["v"], ic:"🚐", label:"van"},
    {word:"w", sounds:["w"], ic:"⌚", label:"watch"},
    {word:"x", sounds:["x"], ic:"❌", label:"x"},
    {word:"y", sounds:["y"], ic:"🪀", label:"yo-yo"},
    {word:"z", sounds:["z"], ic:"🦓", label:"zebra"},
  ]},

  { id:"cvc_a", name:"Short a Words", emoji:"🐱", type:"phonics", sub:"cvc", color:"blue", items:[
    {word:"cat", sounds:["c","a","t"], ic:"🐱"},
    {word:"hat", sounds:["h","a","t"], ic:"🎩"},
    {word:"bat", sounds:["b","a","t"], ic:"🦇"},
    {word:"map", sounds:["m","a","p"], ic:"🗺️"},
    {word:"bag", sounds:["b","a","g"], ic:"🎒"},
    {word:"can", sounds:["c","a","n"], ic:"🥫"},
    {word:"fan", sounds:["f","a","n"], ic:"🪭"},
    {word:"van", sounds:["v","a","n"], ic:"🚐"},
    {word:"ham", sounds:["h","a","m"], ic:"🍖"},
    {word:"jam", sounds:["j","a","m"], ic:"🍓"},
    {word:"rat", sounds:["r","a","t"], ic:"🐀"},
    {word:"pan", sounds:["p","a","n"], ic:"🍳"},
  ]},

  { id:"cvc_e", name:"Short e Words", emoji:"🛏️", type:"phonics", sub:"cvc", color:"green", items:[
    {word:"bed", sounds:["b","e","d"], ic:"🛏️"},
    {word:"pen", sounds:["p","e","n"], ic:"🖊️"},
    {word:"hen", sounds:["h","e","n"], ic:"🐔"},
    {word:"net", sounds:["n","e","t"], ic:"🥅"},
    {word:"web", sounds:["w","e","b"], ic:"🕸️"},
    {word:"jet", sounds:["j","e","t"], ic:"✈️"},
    {word:"ten", sounds:["t","e","n"], ic:"🔟"},
    {word:"leg", sounds:["l","e","g"], ic:"🦵"},
    {word:"red", sounds:["r","e","d"], ic:"🟥"},
    {word:"wet", sounds:["w","e","t"], ic:"💧"},
  ]},

  { id:"cvc_i", name:"Short i Words", emoji:"🐷", type:"phonics", sub:"cvc", color:"purple", items:[
    {word:"pig", sounds:["p","i","g"], ic:"🐷"},
    {word:"six", sounds:["s","i","x"], ic:"6️⃣"},
    {word:"lip", sounds:["l","i","p"], ic:"👄"},
    {word:"fin", sounds:["f","i","n"], ic:"🐟"},
    {word:"pin", sounds:["p","i","n"], ic:"📌"},
    {word:"zip", sounds:["z","i","p"], ic:"🤐"},
    {word:"kid", sounds:["k","i","d"], ic:"🧒"},
    {word:"lid", sounds:["l","i","d"], ic:"🥫"},
    {word:"wig", sounds:["w","i","g"], ic:"👱"},
    {word:"hit", sounds:["h","i","t"], ic:"⚾"},
  ]},

  { id:"cvc_o", name:"Short o Words", emoji:"🐶", type:"phonics", sub:"cvc", color:"pink", items:[
    {word:"dog", sounds:["d","o","g"], ic:"🐶"},
    {word:"box", sounds:["b","o","x"], ic:"📦"},
    {word:"fox", sounds:["f","o","x"], ic:"🦊"},
    {word:"top", sounds:["t","o","p"], ic:"🔝"},
    {word:"pot", sounds:["p","o","t"], ic:"🍲"},
    {word:"mop", sounds:["m","o","p"], ic:"🧹"},
    {word:"log", sounds:["l","o","g"], ic:"🪵"},
    {word:"hot", sounds:["h","o","t"], ic:"🔥"},
    {word:"cob", sounds:["c","o","b"], ic:"🌽"},
    {word:"hop", sounds:["h","o","p"], ic:"🐰"},
  ]},

  { id:"cvc_u", name:"Short u Words", emoji:"☀️", type:"phonics", sub:"cvc", color:"sun", items:[
    {word:"sun", sounds:["s","u","n"], ic:"☀️"},
    {word:"bus", sounds:["b","u","s"], ic:"🚌"},
    {word:"cup", sounds:["c","u","p"], ic:"☕"},
    {word:"bug", sounds:["b","u","g"], ic:"🐛"},
    {word:"mug", sounds:["m","u","g"], ic:"🍵"},
    {word:"nut", sounds:["n","u","t"], ic:"🥜"},
    {word:"tub", sounds:["t","u","b"], ic:"🛁"},
    {word:"pup", sounds:["p","u","p"], ic:"🐶"},
    {word:"jug", sounds:["j","u","g"], ic:"🫙"},
    {word:"run", sounds:["r","u","n"], ic:"🏃"},
  ]},

  { id:"digraphs", name:"sh • ch • th", emoji:"🚢", type:"phonics", sub:"digraph", color:"teal", items:[
    {word:"ship", sounds:["sh","i","p"], ic:"🚢"},
    {word:"fish", sounds:["f","i","sh"], ic:"🐟"},
    {word:"shell", sounds:["sh","e","ll"], ic:"🐚"},
    {word:"shop", sounds:["sh","o","p"], ic:"🏪"},
    {word:"chip", sounds:["ch","i","p"], ic:"🍟"},
    {word:"chick", sounds:["ch","i","ck"], ic:"🐤"},
    {word:"cheese", sounds:["ch","ee","se"], ic:"🧀"},
    {word:"chair", sounds:["ch","air"], ic:"🪑"},
    {word:"thumb", sounds:["th","u","mb"], ic:"👍"},
    {word:"bath", sounds:["b","a","th"], ic:"🛁"},
    {word:"moth", sounds:["m","o","th"], ic:"🦋"},
    {word:"teeth", sounds:["t","ee","th"], ic:"🦷"},
  ]},

  { id:"blends", name:"Blend Words", emoji:"🐸", type:"phonics", sub:"blend", color:"green", items:[
    {word:"frog", sounds:["fr","o","g"], ic:"🐸"},
    {word:"flag", sounds:["fl","a","g"], ic:"🚩"},
    {word:"clap", sounds:["cl","a","p"], ic:"👏"},
    {word:"crab", sounds:["cr","a","b"], ic:"🦀"},
    {word:"drum", sounds:["dr","u","m"], ic:"🥁"},
    {word:"star", sounds:["st","ar"], ic:"⭐"},
    {word:"stop", sounds:["st","o","p"], ic:"🛑"},
    {word:"glass", sounds:["gl","a","ss"], ic:"🥛"},
    {word:"snail", sounds:["sn","ai","l"], ic:"🐌"},
    {word:"train", sounds:["tr","ai","n"], ic:"🚂"},
    {word:"swim", sounds:["sw","i","m"], ic:"🏊"},
    {word:"plum", sounds:["pl","u","m"], ic:"🟣"},
  ]},

  { id:"sight1", name:"Sight Words 1", emoji:"👀", type:"phonics", sub:"sight", color:"purple", items:[
    {word:"the", sight:true}, {word:"and", sight:true}, {word:"see", sight:true},
    {word:"you", sight:true}, {word:"is", sight:true}, {word:"to", sight:true},
    {word:"my", sight:true}, {word:"we", sight:true}, {word:"go", sight:true},
    {word:"like", sight:true}, {word:"can", sight:true}, {word:"here", sight:true},
    {word:"play", sight:true}, {word:"look", sight:true}, {word:"me", sight:true},
  ]},

  { id:"sight2", name:"Sight Words 2", emoji:"📖", type:"phonics", sub:"sight", color:"pink", items:[
    {word:"said", sight:true}, {word:"was", sight:true}, {word:"are", sight:true},
    {word:"they", sight:true}, {word:"have", sight:true}, {word:"with", sight:true},
    {word:"that", sight:true}, {word:"this", sight:true}, {word:"what", sight:true},
    {word:"want", sight:true}, {word:"come", sight:true}, {word:"good", sight:true},
    {word:"make", sight:true}, {word:"little", sight:true}, {word:"where", sight:true},
  ]},

  /* =================== READING COMPREHENSION =================== */
  { id:"stories", name:"Story Time", emoji:"📚", type:"read", color:"green", items:[
    {scene:"🐱🥛", text:"The cat is hungry. The cat drinks milk. Now the cat is happy.",
      q:"Who drinks the milk?", answer:{ic:"🐱",label:"The cat"},
      distractors:[{ic:"🐶",label:"The dog"},{ic:"👦",label:"The boy"}]},
    {scene:"👦⚾", text:"Sam has a ball. Sam hits the ball. The ball goes far!",
      q:"What does Sam hit?", answer:{ic:"⚾",label:"The ball"},
      distractors:[{ic:"🧸",label:"The teddy"},{ic:"🍎",label:"The apple"}]},
    {scene:"👧🐶", text:"Mia has a dog. The dog runs in the park. Mia laughs.",
      q:"Where does the dog run?", answer:{ic:"🌳",label:"The park"},
      distractors:[{ic:"🏠",label:"The house"},{ic:"🏫",label:"The school"}]},
    {scene:"🐦🌳", text:"A little bird sits in a tree. The bird sees a worm. The bird eats the worm.",
      q:"What does the bird eat?", answer:{ic:"🪱",label:"A worm"},
      distractors:[{ic:"🍞",label:"Bread"},{ic:"🍓",label:"A berry"}]},
    {scene:"👩🍪", text:"Mom bakes cookies. The cookies smell good. We eat them together.",
      q:"Who bakes the cookies?", answer:{ic:"👩",label:"Mom"},
      distractors:[{ic:"👦",label:"The boy"},{ic:"🐶",label:"The dog"}]},
    {scene:"🚌🏫", text:"The bus is yellow. The bus takes kids to school. The kids are happy.",
      q:"What is yellow?", answer:{ic:"🚌",label:"The bus"},
      distractors:[{ic:"🏫",label:"The school"},{ic:"🍎",label:"The apple"}]},
    {scene:"🐸🌊", text:"A green frog sits on a log. The frog jumps in the pond. Splash!",
      q:"Where does the frog jump?", answer:{ic:"🌊",label:"The pond"},
      distractors:[{ic:"🛏️",label:"The bed"},{ic:"📦",label:"The box"}]},
    {scene:"👦🍎", text:"Ben is hungry. Ben eats a red apple. The apple is sweet.",
      q:"What does Ben eat?", answer:{ic:"🍎",label:"An apple"},
      distractors:[{ic:"🍌",label:"A banana"},{ic:"🥕",label:"A carrot"}]},
    {scene:"☔🌧️", text:"It is raining. Lily opens her umbrella. Lily stays dry.",
      q:"Who opens the umbrella?", answer:{ic:"👧",label:"Lily"},
      distractors:[{ic:"👨",label:"Dad"},{ic:"🐱",label:"The cat"}]},
    {scene:"🐶🦴", text:"The dog wants a bone. Dad gives the dog a bone. The dog wags his tail.",
      q:"What does the dog want?", answer:{ic:"🦴",label:"A bone"},
      distractors:[{ic:"⚽",label:"A ball"},{ic:"🥛",label:"Milk"}]},
    {scene:"🚀🌙", text:"The rocket goes up. The rocket flies to the moon. The stars are bright.",
      q:"Where does the rocket fly?", answer:{ic:"🌙",label:"The moon"},
      distractors:[{ic:"🌳",label:"The tree"},{ic:"🌊",label:"The sea"}]},
    {scene:"👧🎂", text:"Today is Anna's birthday. Anna has a big cake. Everyone sings to Anna.",
      q:"What does Anna have?", answer:{ic:"🎂",label:"A cake"},
      distractors:[{ic:"🎈",label:"A balloon"},{ic:"🎁",label:"A box"}]},
  ]},

  /* =================== COMMUNICATION (gestalt phrases) =================== */
  { id:"comm_want", name:"Asking For Things", emoji:"🙋", type:"comm", color:"blue", items:[
    {scene:"🍪", say:"I want a cookie.", frame:"I want a ___", coach:"You see a cookie. What can you say?",
      choices:["I want a cookie.","It is raining.","Good night."]},
    {scene:"🥤", say:"Can I have a drink?", frame:"Can I have a ___?", coach:"You are thirsty. What can you say?",
      choices:["Can I have a drink?","It is broken.","Good morning."]},
    {scene:"🧩😣", say:"I need help.", frame:"I need ___", coach:"The puzzle is hard. What can you say?",
      choices:["I need help.","I am happy.","Let's go outside."]},
    {scene:"🍎➕", say:"More apple, please.", frame:"More ___, please", coach:"You want more apple. What can you say?",
      choices:["More apple, please.","Where is it?","No thank you."]},
    {scene:"🎮", say:"Can I have a turn?", frame:"Can I have a ___?", coach:"You want to play. What can you say?",
      choices:["Can I have a turn?","It is a cat.","I am done."]},
    {scene:"🚽", say:"I need the bathroom.", frame:"I need the ___", coach:"You need the bathroom. What can you say?",
      choices:["I need the bathroom.","Here it is.","It is yummy."]},
  ]},

  { id:"comm_comment", name:"Talking About Things", emoji:"💬", type:"comm", color:"teal", items:[
    {scene:"🐶", say:"It's a dog.", frame:"It's a ___", coach:"You see a dog. What can you say?",
      choices:["It's a dog.","I am sad.","Good night."]},
    {scene:"🎈", say:"Look, it's a balloon!", frame:"Look, it's a ___", coach:"You see a balloon. What can you say?",
      choices:["Look, it's a balloon!","I want to sleep.","No thank you."]},
    {scene:"🐘", say:"It's so big!", frame:"It's so ___", coach:"The elephant is big. What can you say?",
      choices:["It's so big!","Where is it?","I am done."]},
    {scene:"🧸", say:"Here it is!", frame:"Here it is", coach:"You found your teddy. What can you say?",
      choices:["Here it is!","It is broken.","Can I have more?"]},
    {scene:"🌈", say:"Wow, a rainbow!", frame:"Wow, a ___", coach:"You see a rainbow. What can you say?",
      choices:["Wow, a rainbow!","I am hungry.","Good morning."]},
    {scene:"🍦", say:"It's yummy!", frame:"It's so ___", coach:"The ice cream is yummy. What can you say?",
      choices:["It's yummy!","It is loud.","Where are you?"]},
  ]},

  { id:"comm_problem", name:"When Something Is Wrong", emoji:"🛠️", type:"comm", color:"pink", items:[
    {scene:"🧩💥", say:"Uh oh, it's broken.", frame:"Uh oh, it's ___", coach:"The toy broke. What can you say?",
      choices:["Uh oh, it's broken.","I want to play.","Hello friend."]},
    {scene:"🚪🔒", say:"It's stuck.", frame:"It's ___", coach:"The door won't open. What can you say?",
      choices:["It's stuck.","It is yummy.","Good night."]},
    {scene:"❓", say:"What's that?", frame:"What's ___?", coach:"You see something new. What can you say?",
      choices:["What's that?","I am all done.","More please."]},
    {scene:"🔁", say:"Let's do it again.", frame:"Let's do it ___", coach:"You want another turn. What can you say?",
      choices:["Let's do it again.","It is a cat.","No thank you."]},
    {scene:"🎉", say:"We did it!", frame:"We did ___!", coach:"You finished together! What can you say?",
      choices:["We did it!","Where is it?","I am sad."]},
    {scene:"🆘", say:"Can you help me?", frame:"Can you ___ me?", coach:"You need help. What can you say?",
      choices:["Can you help me?","It is so big.","Good morning."]},
  ]},

  { id:"comm_social", name:"Friends & Manners", emoji:"🤝", type:"comm", color:"sun", items:[
    {scene:"👋", say:"Hi, friend!", frame:"Hi, ___!", coach:"A friend comes over. What can you say?",
      choices:["Hi, friend!","No thank you.","It is broken."]},
    {scene:"🌅", say:"Good morning!", frame:"Good ___", coach:"It is morning. What can you say?",
      choices:["Good morning!","It is stuck.","I want more."]},
    {scene:"🙏", say:"Thank you!", frame:"Thank ___", coach:"Someone helped you. What can you say?",
      choices:["Thank you!","Where is it?","Uh oh."]},
    {scene:"🔄", say:"Your turn!", frame:"___ turn", coach:"It is your friend's turn. What can you say?",
      choices:["Your turn!","I am sad.","It is a dog."]},
    {scene:"👋😊", say:"Bye bye, see you!", frame:"Bye bye, ___", coach:"It is time to go. What can you say?",
      choices:["Bye bye, see you!","More please.","It is so big."]},
    {scene:"🤗", say:"Nice to meet you.", frame:"Nice to ___ you", coach:"You meet someone new. What can you say?",
      choices:["Nice to meet you.","It is broken.","I am all done."]},
  ]},

  /* =================== FOLLOWING DIRECTIONS =================== */
  { id:"directions", name:"Listen & Do", emoji:"👂", type:"directions", color:"blue", items:[
    {ask:"Tap the dog.", target:["🐶"], pool:["🐶","🐱","🐰","🐸"]},
    {ask:"Tap the red apple.", target:["🍎"], pool:["🍎","🍌","🍇","🍊"]},
    {ask:"Tap the ball.", target:["⚾"], pool:["⚾","🧸","🎈","📚"]},
    {ask:"Tap the sun.", target:["☀️"], pool:["☀️","🌙","⭐","☁️"]},
    {ask:"Tap the car.", target:["🚗"], pool:["🚗","🚂","✈️","🚲"]},
    {ask:"Tap the cup.", target:["☕"], pool:["☕","🍴","🍽️","🥄"]},
    {ask:"First tap the cat, then tap the sun.", target:["🐱","☀️"], pool:["🐱","☀️","🐶","🌙"]},
    {ask:"First tap the apple, then tap the ball.", target:["🍎","⚾"], pool:["🍎","⚾","🍌","🧸"]},
    {ask:"First tap the dog, then tap the car.", target:["🐶","🚗"], pool:["🐶","🚗","🐱","🚲"]},
    {ask:"First tap the fish, then tap the star.", target:["🐟","⭐"], pool:["🐟","⭐","🐸","🌙"]},
  ]},

  /* =================== FEELINGS & CALM =================== */
  { id:"feelings", name:"My Feelings", emoji:"😊", type:"feelings", color:"pink", items:[
    {scene:"🧩😣", text:"The puzzle is too hard.", feeling:{face:"😣",label:"Frustrated"},
      distract:[{face:"😀",label:"Happy"},{face:"😴",label:"Sleepy"}]},
    {scene:"🎂🎈", text:"It is your birthday!", feeling:{face:"😀",label:"Happy"},
      distract:[{face:"😢",label:"Sad"},{face:"😠",label:"Mad"}]},
    {scene:"🧸❌", text:"You can't find your teddy.", feeling:{face:"😢",label:"Sad"},
      distract:[{face:"😀",label:"Happy"},{face:"😲",label:"Surprised"}]},
    {scene:"🔊😖", text:"The room is very loud.", feeling:{face:"😖",label:"Overwhelmed"},
      distract:[{face:"😀",label:"Happy"},{face:"😴",label:"Sleepy"}]},
    {scene:"🍦😋", text:"You got your favorite ice cream.", feeling:{face:"😋",label:"Excited"},
      distract:[{face:"😠",label:"Mad"},{face:"😢",label:"Sad"}]},
    {scene:"😴🛏️", text:"It is late and you yawn.", feeling:{face:"😴",label:"Tired"},
      distract:[{face:"😀",label:"Happy"},{face:"😲",label:"Surprised"}]},
    {scene:"🚫🎮", text:"Game time is over now.", feeling:{face:"😠",label:"Mad"},
      distract:[{face:"😋",label:"Excited"},{face:"😴",label:"Sleepy"}]},
    {scene:"🎁❓", text:"There is a surprise box for you!", feeling:{face:"😲",label:"Surprised"},
      distract:[{face:"😢",label:"Sad"},{face:"😠",label:"Mad"}]},
  ]},

];

/* Calm strategies (from IEP self-regulation goal) */
const CALM = [
  {emoji:"🌬️", label:"Take 3 deep breaths", breathe:true},
  {emoji:"🚶", label:"Take a walk"},
  {emoji:"🪑", label:"Take a break"},
  {emoji:"🤗", label:"Ask for a hug"},
];

/* Little social scripts — practice a back-and-forth, tap to hear, say it back */
const SCRIPTS = [
  { id:"sc_play", name:"Asking to Play", emoji:"🧒", lines:[
    {sp:"A", who:"You", t:"Hi! Can I play?", ic:"🙂"},
    {sp:"B", who:"Friend", t:"Yes! Let's play together.", ic:"😄"},
    {sp:"A", who:"You", t:"What do you want to play?", ic:"🤔"},
    {sp:"B", who:"Friend", t:"Let's play with the ball!", ic:"⚾"},
    {sp:"A", who:"You", t:"Okay! This is fun.", ic:"🥳"},
  ]},
  { id:"sc_snack", name:"Asking for a Snack", emoji:"🍎", lines:[
    {sp:"A", who:"You", t:"I am hungry.", ic:"🙂"},
    {sp:"B", who:"Mom", t:"What would you like?", ic:"👩"},
    {sp:"A", who:"You", t:"Can I have an apple, please?", ic:"🍎"},
    {sp:"B", who:"Mom", t:"Here you go!", ic:"🤲"},
    {sp:"A", who:"You", t:"Thank you!", ic:"😊"},
  ]},
  { id:"sc_help", name:"Asking for Help", emoji:"🆘", lines:[
    {sp:"A", who:"You", t:"This is hard. I need help.", ic:"😣"},
    {sp:"B", who:"Teacher", t:"I can help you.", ic:"🧑‍🏫"},
    {sp:"A", who:"You", t:"Thank you. Can you show me?", ic:"🙂"},
    {sp:"B", who:"Teacher", t:"Sure! Watch me.", ic:"👀"},
    {sp:"A", who:"You", t:"I did it! We did it!", ic:"🎉"},
  ]},
  { id:"sc_break", name:"Asking for a Break", emoji:"🛋️", lines:[
    {sp:"A", who:"You", t:"I feel frustrated.", ic:"😖"},
    {sp:"B", who:"Teacher", t:"It's okay. What do you need?", ic:"🧑‍🏫"},
    {sp:"A", who:"You", t:"I need a break, please.", ic:"🪑"},
    {sp:"B", who:"Teacher", t:"Good asking! Take a break.", ic:"👍"},
    {sp:"A", who:"You", t:"I feel calm now.", ic:"😌"},
  ]},
  { id:"sc_morning", name:"Good Morning at School", emoji:"🌅", lines:[
    {sp:"A", who:"Teacher", t:"Good morning, Richit!", ic:"🧑‍🏫"},
    {sp:"B", who:"You", t:"Good morning!", ic:"🙂"},
    {sp:"A", who:"Teacher", t:"How are you today?", ic:"❓"},
    {sp:"B", who:"You", t:"I am happy. I am ready to learn.", ic:"😄"},
  ]},
];

/* Encouragements (read aloud + shown) */
const CHEERS = ["Great job!","You did it!","Awesome, Richit!","You're a star!","Home run!","Way to go!","Nice work!","Keep it up!"];

/* Team players unlocked as you score runs */
const TEAM = ["🧢","⚾","🥎","🏆","🥇","🦅","🐯","🦁","🚀","🌟","🎯","💪"];

/* ===================== MATHEMATICS =====================
   Problems are generated on the fly so practice never runs out.
   max = largest sum / starting number. Aligned to IEP: add & take
   away with manipulatives, counting on, number line. */
const MATH = [
  { id:"add", name:"Addition", emoji:"➕", type:"math", op:"add", color:"green", count:10 },
  { id:"sub", name:"Subtraction", emoji:"➖", type:"math", op:"sub", color:"pink",  count:10 },
];
TOPICS.push(...MATH);
