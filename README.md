# Richit's All-Star Field ⚾

A self-paced reading & communication app for Richit, built around his IEP (Autism, gestalt language processor). Same engine style as Aria's Hindi Garden — installable, offline, with a parent dashboard.

## What's inside

| Section | Topics | IEP goal |
|---|---|---|
| 📖 Reading | Letter Sounds, Short a/e/i/o/u, sh·ch·th, Blends, Sight Words 1 & 2, Story Time | Decoding (CVC, digraphs, blends, sight words) + "answer who/what about a familiar text" |
| 💬 Talking & Friends | Asking For Things, Talking About Things, When Something Is Wrong, Friends & Manners, Listen & Do | Functional/gestalt communication + "follow multi-step directions" |
| 😊 Feelings | My Feelings (+ calm strategies) | "Identify and express feelings; channel frustration" |
| 🎭 Little Conversations | 5 social scripts | Social interaction & turn-taking |

Each Reading/Talking topic has three activities: **Learn** (see + hear + sound it out), **Listen & Find** (hear it, tap the right one), and **Say It!** (hear it, then **record yourself** and play it back).

## Design principles (from his IEP)

- **Instruction first.** Every screen reads the instruction aloud with a 🔊 replay button — because his bottleneck is understanding the instruction, not doing the task.
- **Choices, never open-ended.** All answers are tap-to-choose.
- **Flat difficulty.** Nothing ramps up automatically (unlike iReady). He replays a level as long as he likes. After two misses, the app gently highlights the answer.
- **Gestalt phrases.** "My Words" models whole phrases ("It's broken," "I want a cookie") aloud.
- **Celebrate small wins.** Earn ⭐ stars → run the bases → score ⚾ runs and fill the team.

## Files

`index.html` · `data.js` (content) · `manifest.webmanifest` + `sw.js` + `icon-*.png` (installable/offline PWA).

All progress is saved privately in the browser on the device (localStorage) — no accounts, no data leaves the device.

## Run it

Just open `index.html` in Chrome/Safari, or deploy to GitHub Pages (see `DEPLOY_AND_DEVICE_GUIDE.md`) to use it on his Chromebook and iPad.
