# Portfolio — QA & DevOps Engineer
**Warm & Professional** personal portfolio, built for global remote opportunities.

🌐 Live: `https://[your-username].github.io/portfolio`

---

## Stack
- Pure HTML5 + CSS3 + Vanilla JS (no frameworks, no build step)
- Google Fonts: Fraunces + IBM Plex Sans + IBM Plex Mono
- GitHub Pages for hosting

---

## Deploy to GitHub Pages — 5 minutes

### 1. Create repo
- Go to https://github.com/new
- Name: `portfolio`
- Visibility: **Public**

### 2. Push files
```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Enable Pages
- Repo → **Settings** → **Pages**
- Source: **Deploy from a branch** → `main` → `/ (root)`
- Click **Save**

Site is live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## Customise — Checklist

### In `index.html`:
- [ ] `<title>` — your name
- [ ] `Your Name` / `YN` initials in nav logo
- [ ] Hero description paragraph
- [ ] `data-target` values on `.metric-n` elements
- [ ] `data-idx` values are already set — don't change
- [ ] Pipeline card tools (`.pf-tag`) — your actual stack
- [ ] All 6 service cards — your real tools
- [ ] Projects — replace with your real projects + GitHub links
- [ ] Experience — your real employers, dates, bullets
- [ ] Certifications strip
- [ ] Testimonials (or remove the section if you don't have them)
- [ ] Contact: email, LinkedIn, GitHub links
- [ ] Footer name

### In `script.js`:
- Counter targets match `data-target` in HTML

---

## Custom Domain (optional)
1. Buy a domain (e.g. `yourname.dev`)
2. Add a `CNAME` file to repo root with just: `yourname.dev`
3. Point domain DNS → GitHub Pages (see GitHub docs)

---

## File Structure
```
portfolio/
├── index.html   ← content
├── style.css    ← all styles
├── script.js    ← interactions
└── README.md
```

---

MIT License — adapt freely.
