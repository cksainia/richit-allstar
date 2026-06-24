# Deploy & Use on Chromebook + iPad

This is the same setup you used for Hindi Garden. About 5 minutes.

## A. Put it on GitHub (one time)

1. Go to **https://github.com/new** (sign in as `cksainia`).
2. **Repository name:** `richit-allstar` → set to **Public** → click **Create repository**.
3. On the new repo page, click **uploading an existing file** (the link in "…or upload an existing file").
4. Drag in **all 7 files** from this folder:
   - `index.html`
   - `data.js`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-180.png`
5. Click **Commit changes**.

## B. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait ~1 minute. Your link will be:

   **https://cksainia.github.io/richit-allstar/**

(If it shows a 404 for the first minute, that's normal — refresh.)

## C. Add to his iPad (looks like a real app)

1. Open the link in **Safari**.
2. Tap the **Share** button (□↑) → **Add to Home Screen** → **Add**.
3. The ⚾ "All-Star" icon appears on the home screen. Tapping it opens full-screen, works offline, and **lets the microphone work** for "Say It!".

## D. Add to his Chromebook

1. Open the link in **Chrome**.
2. Click the **install icon** (a monitor with a ↓) in the address bar, **or** menu **⋮ → Cast, save and share → Install page as app**.
3. It opens in its own window and appears in the launcher.

## E. First-run notes

- **Pick a voice:** tap 👪 (top right), answer the simple math gate, then choose the voice Richit likes under **Voice**. Instructions are read aloud automatically.
- **Microphone:** the first time he taps "🎤 Record me", the browser asks permission — tap **Allow**. (If you skip it, everything else still works; he just won't hear his own playback.)
- **Updating later:** if I change the content, re-upload the changed files to the repo. The app auto-updates next time it's online.

## Privacy

No accounts and no data leaves the device — progress is stored locally in each browser. The repo is public code only (no personal info). Keep IEP PDFs and reports **out** of the repo.
