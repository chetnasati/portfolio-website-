# Chetna Sati — Graphic & Web Designer Portfolio

A sleek, responsive, dark-mode portfolio website built with HTML5, CSS3, and modern JavaScript (ES6+).

## Features

- **Modern Midnight Aesthetic**: Tailored dark theme featuring HSL color tones, Google Fonts (`Syne` & `Plus Jakarta Sans`), glassmorphism cards, and smooth micro-animations.
- **Interactive Project Filtering**: Instant filtering by category (Branding, UI/UX, Motion & Video, AI Visuals).
- **Interactive Case Study Modals**: Rich popups displaying project scope, tools used, and creative descriptions.
- **One-Click Contact Copying**: Click on email or phone to copy directly to clipboard with floating toast notification feedback.
- **Fully Responsive**: Mobile-optimized layout with a top header and collapsible drawer menu.
- **Zero-Dependency & Fast**: Built without heavy frameworks, loading instantly with native browser support.

---

## File Structure

```text
Portfolio Website/
├── index.html       # Main HTML5 structure with semantic markup and meta tags
├── styles.css       # Complete CSS design system, typography, animations, responsive rules
├── script.js        # Category filtering, modal dialogs, copy-to-clipboard toast
└── README.md        # Documentation and deployment guide
```

---

## How to Test Locally

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in any modern browser (Chrome, Safari, Firefox, Edge).

### Option 2: Local HTTP Dev Server
If you prefer running a local server:

Using Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using Node `serve`:
```bash
npx serve .
```

---

## How to Deploy to GitHub Pages

Deploying this portfolio website to GitHub Pages takes less than 2 minutes:

### Step 1: Initialize Git Repository
In your terminal, navigate to this directory (`Portfolio Website`) and run:
```bash
git init
git add .
git commit -m "Initial commit of Chetna Sati Portfolio Website"
```

### Step 2: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and sign in.
2. Click **New Repository**.
3. Name your repository (e.g., `portfolio` or `chetnasati.github.io`).
4. Keep it **Public** and do NOT initialize with a README (since we already have one).
5. Click **Create repository**.

### Step 3: Link & Push to GitHub
Run the following commands in your terminal (replace `USERNAME` and `REPO-NAME` with your GitHub username and repository name):

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your GitHub repository settings: `https://github.com/USERNAME/REPO-NAME/settings`.
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** -> **Branch**, select `main` branch and `/ (root)` folder.
4. Click **Save**.
5. Within 1–2 minutes, your website will be live at `https://USERNAME.github.io/REPO-NAME/`!
