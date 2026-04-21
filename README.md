# Academic Personal Website

A minimal, academic-style personal website built with plain HTML & CSS.
Designed to be hosted on **GitHub Pages** with zero build steps.

---

## Project structure

```
academic-site/
├── index.html          ← About (home)
├── projects.html
├── gallery.html
├── blog.html
├── blog/
│   ├── why-i-study-memory.html
│   └── ...             ← add more posts here
└── assets/
    ├── css/style.css
    ├── js/nav.js
    └── img/            ← drop your photos here
```

---

## Live preview in VS Code (real-time, no deploys needed)

Install the **Live Server** extension:

1. Open VS Code → Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search **"Live Server"** (by Ritwick Dey) → Install
3. Open `index.html`, then click **"Go Live"** in the bottom status bar
   — or right-click the file → *Open with Live Server*
4. A browser tab opens at `http://127.0.0.1:5500`.
   Every time you save a file the page reloads instantly. ✓

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo named **`<your-username>.github.io`**
   (for a root user site) or any repo name (for a project site).
2. In the repo → **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `master`, folder: `/ (root)`
3. Save. GitHub will build and publish within ~30–60 seconds.
4. Your site is live at `https://<your-username>.github.io`.

---

## Customising

### Change name / bio
Edit `index.html` — update the `<h1>`, tagline paragraph, and contact block.
Change `"Jane Doe"` in the `<nav>` of every page (or do a global find-and-replace).

### Add a project
Copy one `<div class="project">` block in `projects.html` and fill in your details.

### Add a blog post
1. Duplicate `blog/why-i-study-memory.html`, rename it, write your content.
2. Add a new `<li>` entry to the list in `blog.html`.

### Add gallery photos
1. Put your images in `assets/img/`.
2. In `gallery.html`, copy a `<figure class="gallery-item">` block and update
   `src`, `alt`, and the caption. The grid reflows automatically.

### Colours & fonts
All design tokens live at the top of `assets/css/style.css` inside `:root { … }`.
Tweak `--accent`, `--bg`, `--ink` etc. to make it your own.
