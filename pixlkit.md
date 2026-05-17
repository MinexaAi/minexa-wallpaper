<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PixelKit — Image Tools Suite</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0f;
    --bg2: #111118;
    --bg3: #1a1a24;
    --bg4: #22222f;
    --card: #14141e;
    --border: rgba(255,255,255,0.07);
    --border2: rgba(255,255,255,0.12);
    --text: #f0f0f5;
    --muted: #7a7a90;
    --accent: #6c63ff;
    --accent2: #a78bfa;
    --teal: #2dd4bf;
    --coral: #f87171;
    --amber: #fbbf24;
    --green: #34d399;
    --pink: #f472b6;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2.5rem;
    height: 64px;
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    letter-spacing: -0.02em;
    display: flex; align-items: center; gap: 8px;
  }
  .logo-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
    animation: pulse 2.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }
  .nav-links { display: flex; gap: 2rem; }
  .nav-links a {
    font-size: 0.85rem; font-weight: 400; color: var(--muted);
    text-decoration: none; transition: color 0.2s;
    letter-spacing: 0.02em;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-cta {
    font-size: 0.82rem; font-weight: 500;
    background: var(--accent); color: #fff;
    border: none; padding: 8px 20px;
    border-radius: 100px; cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
  }
  .nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

  /* HERO */
  .hero {
    padding: 140px 2.5rem 80px;
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;
    align-items: center;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.78rem; font-weight: 500; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--accent2);
    background: rgba(108,99,255,0.1); border: 1px solid rgba(108,99,255,0.2);
    padding: 5px 14px; border-radius: 100px; margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: 3.8rem; font-weight: 800;
    line-height: 1.05; letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }
  .hero h1 span {
    background: linear-gradient(135deg, var(--accent), var(--teal));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero p {
    color: var(--muted); font-size: 1.05rem; line-height: 1.7;
    max-width: 420px; margin-bottom: 2rem;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    background: var(--accent); color: #fff;
    border: none; padding: 13px 28px;
    border-radius: 100px; font-size: 0.92rem; font-weight: 500;
    cursor: pointer; transition: all 0.2s; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(108,99,255,0.35); }
  .btn-secondary {
    background: transparent; color: var(--text);
    border: 1px solid var(--border2); padding: 13px 28px;
    border-radius: 100px; font-size: 0.92rem; font-weight: 400;
    cursor: pointer; transition: all 0.2s; text-decoration: none;
    display: inline-flex; align-items: center;
  }
  .btn-secondary:hover { background: var(--bg3); border-color: var(--border2); }

  /* HERO VISUAL */
  .hero-visual {
    position: relative; display: flex;
    align-items: center; justify-content: center;
  }
  .hero-canvas {
    width: 380px; height: 380px;
    border-radius: 24px;
    background: var(--card);
    border: 1px solid var(--border);
    display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
    gap: 1px; overflow: hidden;
    position: relative;
  }
  .hero-canvas::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(108,99,255,0.08), transparent 70%);
    pointer-events: none;
  }
  .hero-cell {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 8px; background: var(--bg2);
    padding: 1.5rem;
    transition: background 0.3s;
    cursor: pointer;
  }
  .hero-cell:hover { background: var(--bg3); }
  .hero-cell-icon {
    font-size: 1.8rem;
  }
  .hero-cell-label {
    font-size: 0.7rem; font-weight: 500;
    letter-spacing: 0.05em; text-transform: uppercase;
    color: var(--muted); text-align: center;
  }
  .hero-cell:nth-child(1) .hero-cell-icon { filter: hue-rotate(0deg); }

  /* STATS BAR */
  .stats-bar {
    background: var(--bg2);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 1.5rem 2.5rem;
  }
  .stats-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-around;
    gap: 2rem;
  }
  .stat-item { text-align: center; }
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem; font-weight: 700;
    letter-spacing: -0.02em;
  }
  .stat-label { font-size: 0.8rem; color: var(--muted); margin-top: 2px; }
  .stat-divider { width: 1px; height: 40px; background: var(--border); }

  /* SECTION */
  section {
    max-width: 1200px; margin: 0 auto;
    padding: 5rem 2.5rem;
  }
  .section-header { margin-bottom: 3rem; }
  .section-tag {
    font-size: 0.75rem; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.12em;
    color: var(--accent2); margin-bottom: 0.75rem;
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 2.2rem; font-weight: 700;
    letter-spacing: -0.02em; line-height: 1.15;
  }
  .section-subtitle {
    color: var(--muted); font-size: 1rem;
    margin-top: 0.75rem; line-height: 1.6;
  }

  /* TOOLS GRID */
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.25rem;
  }
  .tool-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 1.75rem;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
    display: flex; flex-direction: column; gap: 1rem;
    text-decoration: none; color: inherit;
  }
  .tool-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--card-accent, linear-gradient(90deg, var(--accent), var(--teal)));
    opacity: 0; transition: opacity 0.25s;
  }
  .tool-card:hover {
    border-color: var(--border2);
    transform: translateY(-3px);
    background: var(--bg3);
  }
  .tool-card:hover::before { opacity: 1; }

  .tool-icon-wrap {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    background: var(--icon-bg, rgba(108,99,255,0.12));
    border: 1px solid var(--icon-border, rgba(108,99,255,0.2));
    flex-shrink: 0;
  }
  .tool-meta { flex: 1; }
  .tool-name {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem; font-weight: 600;
    margin-bottom: 0.4rem; letter-spacing: -0.01em;
  }
  .tool-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.55; }
  .tool-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 0.25rem;
  }
  .tool-badge {
    font-size: 0.7rem; font-weight: 500;
    padding: 3px 10px; border-radius: 100px;
    letter-spacing: 0.03em;
  }
  .badge-free { background: rgba(52,211,153,0.12); color: var(--green); border: 1px solid rgba(52,211,153,0.2); }
  .badge-ai { background: rgba(108,99,255,0.12); color: var(--accent2); border: 1px solid rgba(108,99,255,0.2); }
  .badge-new { background: rgba(251,191,36,0.12); color: var(--amber); border: 1px solid rgba(251,191,36,0.2); }
  .badge-popular { background: rgba(248,113,113,0.12); color: var(--coral); border: 1px solid rgba(248,113,113,0.2); }
  .tool-arrow {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--bg4); border: 1px solid var(--border2);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; transition: all 0.2s;
    color: var(--muted);
  }
  .tool-card:hover .tool-arrow {
    background: var(--accent); border-color: var(--accent);
    color: white; transform: translateX(2px);
  }

  /* MODAL */
  .modal-overlay {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(0,0,0,0.75); backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none; transition: opacity 0.2s;
  }
  .modal-overlay.active { opacity: 1; pointer-events: all; }
  .modal {
    background: var(--card); border: 1px solid var(--border2);
    border-radius: 24px; width: 100%; max-width: 560px;
    margin: 1rem; transform: translateY(20px);
    transition: transform 0.2s; max-height: 90vh; overflow-y: auto;
  }
  .modal-overlay.active .modal { transform: translateY(0); }
  .modal-header {
    padding: 1.75rem 2rem 1.25rem;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 1rem;
  }
  .modal-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; }
  .modal-close {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--bg3); border: 1px solid var(--border);
    color: var(--muted); cursor: pointer; font-size: 1.1rem;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s; flex-shrink: 0;
  }
  .modal-close:hover { background: var(--bg4); color: var(--text); }
  .modal-body { padding: 1.75rem 2rem; }

  /* UPLOAD ZONE */
  .upload-zone {
    border: 2px dashed var(--border2);
    border-radius: 16px; padding: 3rem 2rem;
    text-align: center; cursor: pointer;
    transition: all 0.2s; background: var(--bg2);
    margin-bottom: 1.25rem;
  }
  .upload-zone:hover, .upload-zone.dragging {
    border-color: var(--accent); background: rgba(108,99,255,0.05);
  }
  .upload-icon { font-size: 2.5rem; margin-bottom: 1rem; }
  .upload-text { font-size: 0.95rem; color: var(--muted); }
  .upload-text strong { color: var(--text); }
  .upload-formats { font-size: 0.78rem; color: var(--muted); margin-top: 0.4rem; }

  /* CONTROLS */
  .control-row {
    display: flex; gap: 10px; margin-bottom: 1rem;
  }
  .control-row input, .control-row select {
    flex: 1; background: var(--bg2); border: 1px solid var(--border2);
    border-radius: 10px; padding: 10px 14px;
    color: var(--text); font-size: 0.9rem; font-family: inherit;
    transition: border-color 0.2s;
  }
  .control-row input:focus, .control-row select:focus {
    outline: none; border-color: var(--accent);
  }
  .control-row select option { background: var(--bg2); }
  .action-btn {
    width: 100%; padding: 13px;
    background: var(--accent); color: #fff;
    border: none; border-radius: 12px;
    font-size: 0.95rem; font-weight: 500;
    cursor: pointer; transition: all 0.2s;
    font-family: inherit;
  }
  .action-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .action-btn:disabled {
    opacity: 0.4; cursor: not-allowed; transform: none;
  }
  .result-box {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: 12px; padding: 1rem;
    margin-top: 1rem; font-size: 0.85rem;
    color: var(--muted); word-break: break-all;
    display: none;
  }
  .result-box.show { display: block; }
  .result-link {
    color: var(--accent2); text-decoration: underline; cursor: pointer;
  }
  .progress-bar {
    height: 4px; background: var(--bg3);
    border-radius: 100px; margin: 1rem 0; overflow: hidden; display: none;
  }
  .progress-bar.show { display: block; }
  .progress-fill {
    height: 100%; background: linear-gradient(90deg, var(--accent), var(--teal));
    border-radius: 100px; transition: width 0.3s;
  }

  .modern-select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 14px;
    margin-top: 8px;
  }

  /* IMAGE PREVIEW */
  .preview-wrap {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: 12px; overflow: hidden; margin-top: 1rem;
    display: none; min-height: 180px;
    align-items: center; justify-content: center;
  }
  .preview-wrap.show { display: flex; }
  .preview-wrap img, .preview-wrap canvas {
    max-width: 100%; max-height: 300px; display: block;
    border-radius: 8px;
  }

  /* RANGE SLIDER */
  .slider-row { margin-bottom: 1rem; }
  .slider-label {
    display: flex; justify-content: space-between;
    font-size: 0.82rem; color: var(--muted); margin-bottom: 6px;
  }
  .slider-label span:last-child { color: var(--text); font-weight: 500; }
  input[type=range] {
    width: 100%; accent-color: var(--accent);
    cursor: pointer;
  }

  /* COLOR PICKER */
  .color-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem; }
  .color-swatch {
    width: 32px; height: 32px; border-radius: 50%;
    cursor: pointer; border: 2px solid transparent;
    transition: border-color 0.2s, transform 0.2s;
  }
  .color-swatch:hover, .color-swatch.active {
    border-color: white; transform: scale(1.1);
  }

  /* FEATURE SECTION */
  .features-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;
  }
  .feature-item {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; padding: 1.5rem;
  }
  .feature-icon { font-size: 1.6rem; margin-bottom: 1rem; }
  .feature-title { font-weight: 500; margin-bottom: 0.4rem; }
  .feature-text { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

  /* FOOTER */
  footer {
    background: var(--bg2);
    border-top: 1px solid var(--border);
    padding: 2rem 2.5rem;
    text-align: center;
  }
  .footer-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; flex-direction: column; gap: 1rem; align-items: center;
  }
  .footer-logo {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: 1.1rem; display: flex; align-items: center; gap: 8px;
  }
  .footer-text { font-size: 0.82rem; color: var(--muted); }
  .footer-links { display: flex; gap: 1.5rem; }
  .footer-links a { color: var(--muted); font-size: 0.82rem; text-decoration: none; }
  .footer-links a:hover { color: var(--text); }

  /* Notification */
  .toast {
    position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
    background: var(--bg3); border: 1px solid var(--border2);
    border-radius: 12px; padding: 12px 20px;
    font-size: 0.88rem; color: var(--text);
    transform: translateY(20px); opacity: 0;
    transition: all 0.3s; pointer-events: none;
    max-width: 300px;
  }
  .toast.show { transform: translateY(0); opacity: 1; }
  .toast.success { border-color: rgba(52,211,153,0.3); }
  .toast.error { border-color: rgba(248,113,113,0.3); }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; gap: 3rem; padding-top: 100px; }
    .hero-visual { display: none; }
    .hero h1 { font-size: 2.6rem; }
    .stats-inner { flex-wrap: wrap; gap: 1.5rem; }
    .stat-divider { display: none; }
    .features-grid { grid-template-columns: 1fr; }
    nav { padding: 0 1.25rem; }
    .nav-links { display: none; }
  }
  @media (max-width: 600px) {
    section { padding: 3rem 1.25rem; }
    .hero { padding: 100px 1.25rem 3rem; }
    .tools-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">
    <div class="logo-dot"></div>
    Lumipixel pro
  </div>
  <div class="nav-links">
    <a href="#tools">Tools</a>
    <a href="#features">Features</a>
    <a href="#about">About</a>
    <a href="#about"  style="color:var(--amber) ">wallpapers →</a>
  </div>
  
    
 
  <button class="nav-cta" onclick="document.getElementById('tools').scrollIntoView({behavior:'smooth'})">Get Started →</button>
</nav>

<!-- HERO -->
<div class="hero">
  <div>
    <div class="hero-eyebrow">✦ All-in-One Image Suite</div>
    <h1>Every image tool<br>you'll ever <span>need.</span></h1>
    <p>Upload once, do everything. Convert, clean, crop, compress, enhance and transform your images with professional-grade tools — all free, no account needed.</p>
    <div class="hero-btns">
      <a href="#tools" class="btn-primary">Explore Tools →</a>
      <a href="#features" class="btn-secondary">See Features</a>
    </div>
  </div>
  <div class="hero-visual">
    <div class="hero-canvas">
      <div class="hero-cell"><div class="hero-cell-icon">🔗</div><div class="hero-cell-label">Image to Link</div></div>
      <div class="hero-cell"><div class="hero-cell-icon">✨</div><div class="hero-cell-label">AI Generate</div></div>
      <div class="hero-cell"><div class="hero-cell-icon">✂️</div><div class="hero-cell-label">Crop & Cut</div></div>
      <div class="hero-cell"><div class="hero-cell-icon">🧹</div><div class="hero-cell-label">Clean & Fix</div></div>
    </div>
  </div>
</div>

<!-- STATS BAR -->
<div class="stats-bar">
  <div class="stats-inner">
    <div class="stat-item">
      <div class="stat-num" style="color: var(--accent2);">9+</div>
      <div class="stat-label">Powerful Tools</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color: var(--teal);">100%</div>
      <div class="stat-label">Free to Use</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color: var(--green);">0</div>
      <div class="stat-label">Sign-ups Needed</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color: var(--amber);">Private</div>
      <div class="stat-label">Files Stay on Device</div>
    </div>
  </div>
</div>

<!-- TOOLS SECTION -->
<section id="tools">
  <div class="section-header">
    <div class="section-tag">✦ All Tools</div>
    <h2 class="section-title">Pick your tool, get it done.</h2>
    <p class="section-subtitle">Click any tool to start immediately — no upload limits, no watermarks.</p>
  </div>

  <div class="tools-grid">

    <!-- IMAGE TO LINK -->
    <div class="tool-card" onclick="openTool('imgToLink')" style="--card-accent: linear-gradient(90deg, #6c63ff, #a78bfa);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(108,99,255,0.12); --icon-border: rgba(108,99,255,0.2);">🔗</div>
        <div class="tool-meta">
          <div class="tool-name">Image to Link</div>
          <div class="tool-desc">Upload any image and get a shareable URL instantly. Base64 or hosted link.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- TEXT TO IMAGE -->


    <!-- CROP IMAGE -->
    <div class="tool-card" onclick="openTool('cropImage')" style="--card-accent: linear-gradient(90deg, #f87171, #fbbf24);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(248,113,113,0.12); --icon-border: rgba(248,113,113,0.2);">✂️</div>
        <div class="tool-meta">
          <div class="tool-name">Crop & Cut Image</div>
          <div class="tool-desc">Crop to custom dimensions, aspect ratios or freehand. Quick and precise.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- REMOVE BACKGROUND -->

    <!-- REMOVE WATERMARK -->


    <!-- CLEAN IMAGE -->
    <div class="tool-card" onclick="openTool('cleanImage')" style="--card-accent: linear-gradient(90deg, #fbbf24, #f87171);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(251,191,36,0.12); --icon-border: rgba(251,191,36,0.2);">🧹</div>
        <div class="tool-meta">
          <div class="tool-name">Clean & Enhance</div>
          <div class="tool-desc">Denoise, sharpen, and upscale your images. Remove blur and artifacts.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-popular">Popular</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- COMPRESS -->
    <div class="tool-card" onclick="openTool('compress')" style="--card-accent: linear-gradient(90deg, #6c63ff, #2dd4bf);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(108,99,255,0.12); --icon-border: rgba(108,99,255,0.2);">📦</div>
        <div class="tool-meta">
          <div class="tool-name">Compress Image</div>
          <div class="tool-desc">Reduce file size without losing quality. Control compression level.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- CONVERT FORMAT -->
    <div class="tool-card" onclick="openTool('convertFormat')" style="--card-accent: linear-gradient(90deg, #2dd4bf, #34d399);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(45,212,191,0.12); --icon-border: rgba(45,212,191,0.2);">🔄</div>
        <div class="tool-meta">
          <div class="tool-name">Convert Format</div>
          <div class="tool-desc">Convert between JPG, PNG, WebP, AVIF, GIF, SVG and more formats.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- RESIZE -->
    <div class="tool-card" onclick="openTool('resize')" style="--card-accent: linear-gradient(90deg, #fbbf24, #f472b6);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(251,191,36,0.12); --icon-border: rgba(251,191,36,0.2);">📐</div>
        <div class="tool-meta">
          <div class="tool-name">Resize Image</div>
          <div class="tool-desc">Resize to exact pixels, percentage, or preset dimensions. Maintain ratio.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-popular">Popular</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- COLOR PICKER -->
    <div class="tool-card" onclick="openTool('colorPicker')" style="--card-accent: linear-gradient(90deg, #f472b6, #fbbf24);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(244,114,182,0.12); --icon-border: rgba(244,114,182,0.2);">🎨</div>
        <div class="tool-meta">
          <div class="tool-name">Color Extractor</div>
          <div class="tool-desc">Extract the dominant color palette from any image. Get HEX codes instantly.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-new">New</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- ADD WATERMARK -->
    <div class="tool-card" onclick="openTool('addWatermark')" style="--card-accent: linear-gradient(90deg, #6c63ff, #f472b6);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(108,99,255,0.12); --icon-border: rgba(108,99,255,0.2);">🏷️</div>
        <div class="tool-meta">
          <div class="tool-name">Add Watermark</div>
          <div class="tool-desc">Add custom text or image watermarks with full control over position and opacity.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

    <!-- IMAGE INFO -->
    <div class="tool-card" onclick="openTool('imageInfo')" style="--card-accent: linear-gradient(90deg, #34d399, #6c63ff);">
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="tool-icon-wrap" style="--icon-bg: rgba(52,211,153,0.12); --icon-border: rgba(52,211,153,0.2);">🔍</div>
        <div class="tool-meta">
          <div class="tool-name">Image Metadata</div>
          <div class="tool-desc">View full EXIF metadata, camera settings, GPS, creation date and more.</div>
        </div>
      </div>
      <div class="tool-footer">
        <span class="tool-badge badge-free">Free</span>
        <div class="tool-arrow">→</div>
      </div>
    </div>

  </div>
</section>

<!-- FEATURES -->
<section id="features" style="background: var(--bg2); max-width: 100%; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="section-header">
      <div class="section-tag">✦ Why lumipixel pro</div>
      <h2 class="section-title">Built different.</h2>
    </div>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Lightning Fast</div>
        <div class="feature-text">All processing happens in your browser. No uploads to distant servers. Instant results with no waiting.</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔒</div>
        <div class="feature-title">100% Private</div>
        <div class="feature-text">Your images never leave your device. We don't store, analyze, or sell any of your data — ever.</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">No Limits</div>
        <div class="feature-text">No file size limits, no watermarks, no usage caps. Unlimited processing for free, always.</div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer id="about">
  <div class="footer-inner">
    <div class="footer-logo"><div class="logo-dot"></div>lumipexel pro</div>
    <div class="footer-links">
      <a href="#">Privacy</a><a href="#">Terms</a><a href="#">GitHub</a><a href="#">Contact</a><a href="code.html"  style="color:var(--amber) ">wallpixel pro →</a>
    </div>
    <div class="footer-text">© 2025 ImageTools Pro — Free image tools for everyone, forever.</div>
  </div>
</footer>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<!-- =================== MODAL =================== -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModal(event)">
  <div class="modal" id="modalContent">
    <div class="modal-header" id="modalHeader">
      <div>
        <div class="modal-title" id="modalTitle">Tool</div>
        <div style="font-size:0.82rem; color:var(--muted); margin-top:3px;" id="modalSubtitle"></div>
      </div>
      <button class="modal-close" onclick="closeModalDirect()">✕</button>
    </div>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>

<script>
// ================== TOOLS CONFIG ==================

const TOOLS = {
  imgToLink: {
    title: '🔗 Image to Link',
    subtitle: 'Convert image to Base64 data URL or shareable link',
    render: renderImgToLink
  },
  cropImage: {
    title: '✂️ Crop & Cut Image',
    subtitle: 'Crop to custom dimensions or aspect ratios',
    render: renderCropImage
  },
  cleanImage: {
    title: '🧹 Clean & Enhance',
    subtitle: 'Denoise, sharpen, and improve image quality',
    render: renderCleanImage
  },
  compress: {
    title: '📦 Compress Image',
    subtitle: 'Reduce file size while preserving quality',
    render: renderCompress
  },
  convertFormat: {
    title: '🔄 Convert Format',
    subtitle: 'Convert between popular image formats',
    render: renderConvertFormat
  },
  resize: {
    title: '📐 Resize Image',
    subtitle: 'Resize to exact pixels, percentage, or presets',
    render: renderResize
  },
  colorPicker: {
    title: '🎨 Color Extractor',
    subtitle: 'Extract dominant colors and HEX palette from any image',
    render: renderColorPicker
  },
  addWatermark: {
    title: '🏷️ Add Watermark',
    subtitle: 'Add custom text watermark to your image',
    render: renderAddWatermark
  },
  imageInfo: {
    title: '🔍 Image Metadata',
    subtitle: 'View detailed info and EXIF metadata',
    render: renderImageInfo
  }
};

function openTool(id) {
  const tool = TOOLS[id];
  document.getElementById('modalTitle').textContent = tool.title;
  document.getElementById('modalSubtitle').textContent = tool.subtitle;
  document.getElementById('modalBody').innerHTML = '';
  tool.render(document.getElementById('modalBody'));
  document.getElementById('modalOverlay').classList.add('active');
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// ========== TOAST ==========
function toast(msg, type='info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ========== UPLOAD HELPER ==========
function makeUploadZone(container, onLoad, accept='image/*') {
  const zone = document.createElement('div');
  zone.className = 'upload-zone';
  zone.innerHTML = `
    <div class="upload-icon">📁</div>
    <div class="upload-text"><strong>Click to upload</strong> or drag & drop</div>
    <div class="upload-formats">PNG, JPG, WebP, GIF, AVIF — Max 20MB</div>
  `;
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = accept; inp.style.display = 'none';
  zone.onclick = () => inp.click();
  zone.ondragover = e => { e.preventDefault(); zone.classList.add('dragging'); };
  zone.ondragleave = () => zone.classList.remove('dragging');
  zone.ondrop = e => {
    e.preventDefault(); zone.classList.remove('dragging');
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f, zone, onLoad);
  };
  inp.onchange = () => { if (inp.files[0]) handleFile(inp.files[0], zone, onLoad); };
  container.appendChild(zone);
  container.appendChild(inp);
  return zone;
}
function handleFile(file, zone, onLoad) {
  zone.innerHTML = `<div class="upload-icon">✅</div><div class="upload-text"><strong>${file.name}</strong></div><div class="upload-formats">${(file.size/1024).toFixed(1)} KB</div>`;
  const reader = new FileReader();
  reader.onload = e => onLoad(e.target.result, file);
  reader.readAsDataURL(file);
}

// ==============================
// TOOL RENDERS
// ==============================

function renderImgToLink(body) {
  let currentData = null;
  makeUploadZone(body, (data, file) => {
    currentData = data;
    preview.classList.add('show');
    preview.innerHTML = `<img src="${data}" alt="preview">`;
    result.style.display = 'none';
    progressBar.classList.remove('show');
  });

  const preview = document.createElement('div');
  preview.className = 'preview-wrap';
  body.appendChild(preview);

  const result = document.createElement('div');
  result.className = 'result-box show';
  result.style.display = 'none';
  body.appendChild(result);

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.innerHTML = '<div class="progress-fill" id="pf" style="width:0%"></div>';
  body.appendChild(progressBar);

  

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.textContent = 'Generate Link';
  const API_KEY = 'fb5f2fc37d992f010aaa4477592c00e2'; 

  btn.onclick = async () => {
      if (!currentData) {
          toast('Please upload an image first', 'error');
          return;
      }

      progressBar.classList.add('show');
      let w = 0;
      const iv = setInterval(() => {
          w = Math.min(w + 5, 90); // Progress bar goes to 90% while waiting for server
          document.getElementById('pf').style.width = w + '%';
      }, 200);

      try {
          // 1. Prepare the data (ImgBB needs the Base64 string without the 'data:image...' prefix)
          const base64Data = currentData.split(',')[1];
          const formData = new FormData();
          formData.append('image', base64Data);

          // 2. Send to ImgBB
          const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
              method: 'POST',
              body: formData
          });

          const resultData = await response.json();

          if (resultData.success) {
              // 3. Complete the progress bar
              clearInterval(iv);
              document.getElementById('pf').style.width = '100%';

              const finalUrl = resultData.data.url; // This is your REAL, shareable link!

              // 4. Update your UI with the new link
              result.style.display = 'block';
              result.innerHTML = `
                  <div style="margin-bottom:8px; color:var(--green); font-weight:500;">✅ Link Generated!</div>
                  <div style="font-family:monospace; font-size:0.78rem; word-break:break-all; color:var(--muted);">${finalUrl}</div>
                  <div style="margin-top:10px; display:flex; flex-direction:column; gap:8px;">
                      <button onclick="navigator.clipboard.writeText('${finalUrl}').then(()=>toast('Copied!','success'))" class="action-btn" style="width:100%;">Copy Link</button>
                      <a href="${finalUrl}" target="_blank" class="action-btn" style="width:100%; text-align:center;">View Image</a>
                  </div>
              `;
              toast('Link generated successfully!', 'success');
          } else {
              throw new Error('Upload failed');
          }

      } catch (error) {
          clearInterval(iv);
          toast('Upload failed. Try again.', 'error');
          console.error(error);
      }
  };
  body.appendChild(btn);
}

function renderCropImage(body) {
  let img = null;
  let canvas = null;
  let ctx = null;

  let crop = {
    x: 50,
    y: 50,
    w: 200,
    h: 200
  };

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const preview = document.createElement('div');
  preview.className = 'preview-wrap';

  makeUploadZone(body, (data) => {
    const image = new Image();

    image.onload = () => {
      img = image;

      preview.classList.add('show');

      if (canvas) canvas.remove();

      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');

      preview.appendChild(canvas);

      fitCanvas();
      drawCrop();

      enableCropSelection();
    };

    image.src = data;
  });

  body.appendChild(preview);

  function fitCanvas() {
    const scale = Math.min(460 / img.width, 300 / img.height);

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;

    canvas.style.maxWidth = '100%';

    canvas.dataset.scale = scale;
  }

  function drawCrop() {
    if (!img || !canvas) return;

    const scale = Number(canvas.dataset.scale);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Dark overlay
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Clear crop area
    ctx.clearRect(
      crop.x * scale,
      crop.y * scale,
      crop.w * scale,
      crop.h * scale
    );

    // Redraw crop area
    ctx.drawImage(
      img,
      crop.x,
      crop.y,
      crop.w,
      crop.h,
      crop.x * scale,
      crop.y * scale,
      crop.w * scale,
      crop.h * scale
    );

    // Border
    ctx.strokeStyle = '#6c63ff';
    ctx.lineWidth = 2;

    ctx.strokeRect(
      crop.x * scale,
      crop.y * scale,
      crop.w * scale,
      crop.h * scale
    );
  }

  function enableCropSelection() {

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();

      const touch = e.touches ? e.touches[0] : e;

      const scale = Number(canvas.dataset.scale);

      return {
        x: (touch.clientX - rect.left) / scale,
        y: (touch.clientY - rect.top) / scale
      };
    };

    // START
    const start = (e) => {
      e.preventDefault();

      const pos = getPos(e);

      startX = pos.x;
      startY = pos.y;

      crop.x = startX;
      crop.y = startY;
      crop.w = 0;
      crop.h = 0;

      isDragging = true;

      drawCrop();
    };

    // MOVE
    const move = (e) => {
      if (!isDragging) return;

      e.preventDefault();

      const pos = getPos(e);

      crop.w = pos.x - startX;
      crop.h = pos.y - startY;

      drawCrop();
    };

    // END
    const end = () => {
      isDragging = false;

      // Fix negative drag
      if (crop.w < 0) {
        crop.x += crop.w;
        crop.w = Math.abs(crop.w);
      }

      if (crop.h < 0) {
        crop.y += crop.h;
        crop.h = Math.abs(crop.h);
      }

      drawCrop();
    };

    // Mouse
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);

    // Touch
    canvas.addEventListener('touchstart', start);
    canvas.addEventListener('touchmove', move);
    window.addEventListener('touchend', end);
  }

  // DOWNLOAD BUTTON
  const btn = document.createElement('button');

  btn.className = 'action-btn';
  btn.textContent = 'Crop & Download';

  btn.onclick = () => {

    if (!img) {
      toast('Upload an image first', 'error');
      return;
    }

    const c = document.createElement('canvas');

    c.width = crop.w;
    c.height = crop.h;

    c.getContext('2d').drawImage(
      img,
      crop.x,
      crop.y,
      crop.w,
      crop.h,
      0,
      0,
      crop.w,
      crop.h
    );

    const a = document.createElement('a');

    a.href = c.toDataURL('image/png');
    a.download = 'cropped.png';

    a.click();

    toast('Cropped image downloaded!', 'success');
  };

  body.appendChild(btn);
}

function renderCleanImage(body) {
  let img = null;

  const preview = document.createElement('div');
  preview.className = 'preview-wrap';

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // CURRENT FILTER
  let currentFilter = 'none';

  // UPDATE IMAGE PREVIEW
  function updatePreview() {
    if (!img) return;

    const b = +document.getElementById('brightSlider').value;
    const c = +document.getElementById('contSlider').value;
    const s = +document.getElementById('satSlider').value;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // FILTERS
    const filterMap = {
      none: '',
      grayscale: 'grayscale(100%)',
      sepia: 'sepia(100%)',
      vintage: 'sepia(40%) contrast(120%) brightness(110%)',
      cool: 'hue-rotate(180deg)',
      warm: 'sepia(30%) saturate(140%)',
      blur: 'blur(2px)',
      invert: 'invert(100%)'
    };

    ctx.filter = `
      brightness(${1 + b / 100})
      contrast(${1 + c / 100})
      saturate(${1 + s / 100})
      ${filterMap[currentFilter]}
    `;

    ctx.drawImage(img, 0, 0);

    preview.innerHTML = '';
    preview.appendChild(canvas);

    preview.classList.add('show');
  }

  // IMAGE UPLOAD
  makeUploadZone(body, (data) => {
    const image = new Image();

    image.onload = () => {
      img = image;
      updatePreview();
    };

    image.src = data;
  });

  body.appendChild(preview);

  // CONTROLS
  const controls = document.createElement('div');

  controls.innerHTML = `
    <div style="margin:1rem 0;">

      <!-- FILTER SELECT -->
      <div class="slider-row">
        <div class="slider-label">
          <span>Filter</span>
        </div>

        <select id="filterSelect" class="modern-select">
          <option value="none">None</option>
          <option value="grayscale">Grayscale</option>
          <option value="sepia">Sepia</option>
          <option value="vintage">Vintage</option>
          <option value="cool">Cool</option>
          <option value="warm">Warm</option>
          <option value="blur">Blur</option>
          <option value="invert">Invert</option>
        </select>
      </div>

      <!-- SHARPNESS -->
      <div class="slider-row">
        <div class="slider-label">
          <span>Sharpness</span>
          <span id="sharpVal">0</span>
        </div>

        <input type="range"
          min="-50"
          max="50"
          value="0"
          id="sharpSlider">
      </div>

      <!-- BRIGHTNESS -->
      <div class="slider-row">
        <div class="slider-label">
          <span>Brightness</span>
          <span id="brightVal">0</span>
        </div>

        <input type="range"
          min="-100"
          max="100"
          value="0"
          id="brightSlider">
      </div>

      <!-- CONTRAST -->
      <div class="slider-row">
        <div class="slider-label">
          <span>Contrast</span>
          <span id="contVal">0</span>
        </div>

        <input type="range"
          min="-100"
          max="100"
          value="0"
          id="contSlider">
      </div>

      <!-- SATURATION -->
      <div class="slider-row">
        <div class="slider-label">
          <span>Saturation</span>
          <span id="satVal">0</span>
        </div>

        <input type="range"
          min="-100"
          max="100"
          value="0"
          id="satSlider">
      </div>

    </div>
  `;

  body.appendChild(controls);

  // FILTER CHANGE
  document.getElementById('filterSelect')
    .addEventListener('change', (e) => {
      currentFilter = e.target.value;
      updatePreview();
    });

  // LIVE SLIDER EVENTS
  ['sharpSlider', 'brightSlider', 'contSlider', 'satSlider']
    .forEach(id => {

      const slider = document.getElementById(id);

      slider.addEventListener('input', () => {

        document.getElementById(
          id.replace('Slider', 'Val')
        ).textContent = slider.value;

        updatePreview();
      });
    });

  // DOWNLOAD BUTTON
  const btn = document.createElement('button');

  btn.className = 'action-btn';
  btn.textContent = 'Apply & Download';

  btn.onclick = () => {
    if (!img) {
      toast('Upload an image first', 'error');
      return;
    }

    const a = document.createElement('a');

    a.href = canvas.toDataURL('image/png');
    a.download = 'enhanced.png';

    a.click();

    toast('Enhanced image downloaded!', 'success');
  };

  body.appendChild(btn);
}

function renderCompress(body) {
  let img = null;
  const preview = document.createElement('div');
  preview.className = 'preview-wrap';

  makeUploadZone(body, (data, file) => {
    const image = new Image();
    image.onload = () => {
      img = image;
      preview.classList.add('show');
      preview.innerHTML = `<img src="${data}" style="max-width:100%;border-radius:8px;">`;
      sizeInfo.textContent = `Original: ${(file.size/1024).toFixed(1)} KB`;
    };
    image.src = data;
  });
  body.appendChild(preview);

  const sizeInfo = document.createElement('div');
  sizeInfo.style.cssText = 'font-size:0.82rem; color:var(--muted); margin:0.75rem 0 0.25rem;';
  body.appendChild(sizeInfo);

  const sliderDiv = document.createElement('div');
  sliderDiv.innerHTML = `
    <div class="slider-row" style="margin-top:1rem;">
      <div class="slider-label"><span>Quality</span><span id="qualVal">80%</span></div>
      <input type="range" min="1" max="100" value="80" id="qualSlider" oninput="document.getElementById('qualVal').textContent=this.value+'%'">
    </div>
    <div class="control-row">
      <select id="compFmt">
        <option value="image/jpeg">JPEG</option>
        <option value="image/webp">WebP</option>
        <option value="image/png">PNG</option>
      </select>
    </div>
  `;
  body.appendChild(sliderDiv);

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.textContent = 'Compress & Download';
  btn.onclick = () => {
    if (!img) { toast('Upload an image first', 'error'); return; }
    const q = document.getElementById('qualSlider').value / 100;
    const fmt = document.getElementById('compFmt').value;
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    c.getContext('2d').drawImage(img, 0, 0);
    const data = c.toDataURL(fmt, q);
    const bytes = Math.round((data.length * 3) / 4);
    sizeInfo.textContent = `Compressed: ~${(bytes/1024).toFixed(1)} KB`;
    const a = document.createElement('a');
    a.href = data; a.download = `compressed.${fmt.split('/')[1]}`; a.click();
    toast('Compressed & downloaded!', 'success');
  };
  body.appendChild(btn);
}

function renderConvertFormat(body) {
  let imgData = null;
  makeUploadZone(body, (data) => { imgData = data; });

  const controls = document.createElement('div');
  controls.innerHTML = `
    <div class="control-row" style="margin-top:1rem;">
      <select id="toFmt">
        <option value="image/png">PNG</option>
        <option value="image/jpeg">JPEG</option>
        <option value="image/webp">WebP</option>
        <option value="image/gif">GIF</option>
      </select>
    </div>
  `;
  body.appendChild(controls);

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.textContent = 'Convert & Download';
  btn.onclick = () => {
    if (!imgData) { toast('Upload an image first', 'error'); return; }
    const fmt = document.getElementById('toFmt').value;
    const ext = fmt.split('/')[1];
    const image = new Image();
    image.onload = () => {
      const c = document.createElement('canvas');
      c.width = image.width; c.height = image.height;
      c.getContext('2d').drawImage(image, 0, 0);
      const a = document.createElement('a');
      a.href = c.toDataURL(fmt, 0.92);
      a.download = `converted.${ext}`; a.click();
      toast(`Converted to ${ext.toUpperCase()}!`, 'success');
    };
    image.src = imgData;
  };
  body.appendChild(btn);
}

function renderResize(body) {
  let img = null;

  makeUploadZone(body, (data) => {
    const image = new Image();
    image.onload = () => {
      img = image;
      document.getElementById('rwInput').value = image.width;
      document.getElementById('rhInput').value = image.height;
      origDim.textContent = `Original: ${image.width} × ${image.height}px`;
    };
    image.src = data;
  });

  const origDim = document.createElement('div');
  origDim.style.cssText = 'font-size:0.82rem; color:var(--muted); margin:0.75rem 0 0.25rem;';
  body.appendChild(origDim);

  const controls = document.createElement('div');
  controls.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1rem 0;">
      <div><label style="font-size:0.78rem;color:var(--muted);display:block;margin-bottom:4px;">Width (px)</label><input type="number" id="rwInput" style="width:100%;background:var(--bg2);border:1px solid var(--border2);border-radius:8px;padding:8px;color:var(--text);font-family:inherit;"></div>
      <div><label style="font-size:0.78rem;color:var(--muted);display:block;margin-bottom:4px;">Height (px)</label><input type="number" id="rhInput" style="width:100%;background:var(--bg2);border:1px solid var(--border2);border-radius:8px;padding:8px;color:var(--text);font-family:inherit;"></div>
    </div>
    <div class="slider-row">
      <div class="slider-label"><span>Or scale by %</span><span id="scaleVal">100%</span></div>
      <input type="range" min="10" max="200" value="100" id="scaleSlider" oninput="applyScale(this.value)">
    </div>
  `;
  body.appendChild(controls);

  window.applyScale = function(val) {
    document.getElementById('scaleVal').textContent = val + '%';
    if (!img) return;
    document.getElementById('rwInput').value = Math.round(img.width * val / 100);
    document.getElementById('rhInput').value = Math.round(img.height * val / 100);
  };

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.textContent = 'Resize & Download';
  btn.onclick = () => {
    if (!img) { toast('Upload an image first', 'error'); return; }
    const w = +document.getElementById('rwInput').value || img.width;
    const h = +document.getElementById('rhInput').value || img.height;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    const a = document.createElement('a');
    a.href = c.toDataURL('image/png'); a.download = `resized_${w}x${h}.png`; a.click();
    toast(`Resized to ${w}×${h}!`, 'success');
  };
  body.appendChild(btn);
}

function renderColorPicker(body) {
  let img = null;
  const preview = document.createElement('div');
  preview.className = 'preview-wrap';
  const paletteDiv = document.createElement('div');

  makeUploadZone(body, (data) => {
    const image = new Image();
    image.onload = () => {
      img = image;
      preview.classList.add('show');
      preview.innerHTML = `<img src="${data}" style="max-width:100%;border-radius:8px;">`;
    };
    image.src = data;
  });
  body.appendChild(preview);
  body.appendChild(paletteDiv);

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.style.marginTop = '1rem';
  btn.textContent = 'Extract Colors';
  btn.onclick = () => {
    if (!img) { toast('Upload an image first', 'error'); return; }
    const c = document.createElement('canvas');
    const scale = Math.min(1, 100 / Math.max(img.width, img.height));
    c.width = img.width * scale; c.height = img.height * scale;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, c.width, c.height);
    const data = ctx.getImageData(0, 0, c.width, c.height).data;
    const colorMap = {};
    for (let i = 0; i < data.length; i += 16) {
      const r = Math.round(data[i]/32)*32;
      const g = Math.round(data[i+1]/32)*32;
      const b = Math.round(data[i+2]/32)*32;
      const key = `${r},${g},${b}`;
      colorMap[key] = (colorMap[key] || 0) + 1;
    }
    const sorted = Object.entries(colorMap).sort((a,b) => b[1]-a[1]).slice(0,10);
    paletteDiv.innerHTML = '<div style="font-size:0.82rem;color:var(--muted);margin:1rem 0 0.5rem;">Dominant Colors:</div>';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;';
    sorted.forEach(([key]) => {
      const [r,g,b] = key.split(',');
      const hex = '#' + [r,g,b].map(x => (+x).toString(16).padStart(2,'0')).join('');
      const swatch = document.createElement('div');
      swatch.style.cssText = `width:52px;text-align:center;cursor:pointer;`;
      swatch.innerHTML = `
        <div style="width:52px;height:52px;border-radius:10px;background:${hex};border:1px solid rgba(255,255,255,0.1);margin-bottom:5px;"></div>
        <div style="font-size:0.68rem;font-family:monospace;color:var(--muted);">${hex}</div>
      `;
      swatch.onclick = () => { navigator.clipboard.writeText(hex).then(() => toast(`Copied ${hex}`, 'success')); };
      grid.appendChild(swatch);
    });
    paletteDiv.appendChild(grid);
    paletteDiv.innerHTML += '<div style="font-size:0.72rem;color:var(--muted);margin-top:8px;">Click any swatch to copy HEX</div>';
    paletteDiv.appendChild(grid);
    toast('Colors extracted!', 'success');
  };
  body.appendChild(btn);
}

function renderAddWatermark(body) {
  let img = null;
  const preview = document.createElement('div');
  preview.className = 'preview-wrap';

  makeUploadZone(body, (data) => {
    const image = new Image();
    image.onload = () => {
      img = image;
      preview.classList.add('show');
      renderWatermarkPreview();
    };
    image.src = data;
  });
  body.appendChild(preview);

  const controls = document.createElement('div');
  controls.innerHTML = `
    <div class="control-row" style="margin-top:1rem;">
      <input type="text" id="wmText" placeholder="Your watermark text..." value="© PixelKit" oninput="renderWatermarkPreview()">
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75rem 0;">
      <div>
        <label style="font-size:0.78rem;color:var(--muted);display:block;margin-bottom:4px;">Position</label>
        <select id="wmPos" onchange="renderWatermarkPreview()" style="width:100%;background:var(--bg2);border:1px solid var(--border2);border-radius:8px;padding:8px;color:var(--text);">
          <option value="br">Bottom Right</option>
          <option value="bl">Bottom Left</option>
          <option value="tr">Top Right</option>
          <option value="tl">Top Left</option>
          <option value="c">Center</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.78rem;color:var(--muted);display:block;margin-bottom:4px;">Color</label>
        <input type="color" id="wmColor" value="#ffffff" onchange="renderWatermarkPreview()" style="width:100%;height:38px;border-radius:8px;border:1px solid var(--border2);cursor:pointer;">
      </div>
    </div>
    <div class="slider-row">
      <div class="slider-label"><span>Opacity</span><span id="wmOpVal">70%</span></div>
      <input type="range" min="10" max="100" value="70" id="wmOp" oninput="document.getElementById('wmOpVal').textContent=this.value+'%';renderWatermarkPreview()">
    </div>
    <div class="slider-row">
      <div class="slider-label"><span>Font Size</span><span id="wmFsVal">36px</span></div>
      <input type="range" min="12" max="120" value="36" id="wmFs" oninput="document.getElementById('wmFsVal').textContent=this.value+'px';renderWatermarkPreview()">
    </div>
  `;
  body.appendChild(controls);

  window.renderWatermarkPreview = function() {
    if (!img) return;
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const text = document.getElementById('wmText')?.value || '© PixelKit';
    const pos = document.getElementById('wmPos')?.value || 'br';
    const color = document.getElementById('wmColor')?.value || '#ffffff';
    const op = (document.getElementById('wmOp')?.value || 70) / 100;
    const fs = document.getElementById('wmFs')?.value || 36;
    ctx.globalAlpha = op;
    ctx.font = `bold ${fs}px Arial`;
    ctx.fillStyle = color;
    ctx.textBaseline = 'bottom';
    const tw = ctx.measureText(text).width;
    const pad = 20;
    let x, y;
    if (pos === 'br') { x = img.width - tw - pad; y = img.height - pad; }
    else if (pos === 'bl') { x = pad; y = img.height - pad; }
    else if (pos === 'tr') { x = img.width - tw - pad; y = +fs + pad; ctx.textBaseline = 'top'; y = pad; }
    else if (pos === 'tl') { x = pad; ctx.textBaseline = 'top'; y = pad; }
    else { x = (img.width - tw) / 2; y = img.height / 2; }
    ctx.fillText(text, x, y);
    const scale = Math.min(460 / img.width, 300 / img.height);
    const disp = document.createElement('canvas');
    disp.width = img.width * scale; disp.height = img.height * scale;
    disp.style.maxWidth = '100%'; disp.style.borderRadius = '8px';
    disp.getContext('2d').drawImage(c, 0, 0, disp.width, disp.height);
    preview.innerHTML = ''; preview.appendChild(disp);
    preview.dataset.fullCanvas = c.toDataURL();
  };

  const btn = document.createElement('button');
  btn.className = 'action-btn';
  btn.textContent = 'Apply Watermark & Download';
  btn.onclick = () => {
    if (!img) { toast('Upload an image first', 'error'); return; }
    renderWatermarkPreview();
    const a = document.createElement('a');
    a.href = preview.dataset.fullCanvas;
    a.download = 'watermarked.png'; a.click();
    toast('Downloaded!', 'success');
  };
  body.appendChild(btn);
}

function renderImageInfo(body) {
  let fileRef = null;
  makeUploadZone(body, (data, file) => {
    fileRef = file;
    const image = new Image();
    image.onload = () => {
      infoDiv.innerHTML = `
        <div style="font-size:0.82rem; color:var(--muted); margin-bottom:0.75rem;">📊 Image Details</div>
        <table style="width:100%;font-size:0.85rem;border-collapse:collapse;">
          ${row('Name', file.name)}
          ${row('Size', (file.size/1024).toFixed(1)+' KB')}
          ${row('Type', file.type || 'Unknown')}
          ${row('Dimensions', `${image.width} × ${image.height} px`)}
          ${row('Megapixels', ((image.width * image.height)/1e6).toFixed(2)+' MP')}
          ${row('Aspect Ratio', getAspectRatio(image.width, image.height))}
          ${row('Last Modified', new Date(file.lastModified).toLocaleDateString())}
        </table>
      `;
      infoDiv.style.display = 'block';
    };
    image.src = data;
  });

  function row(k, v) {
    return `<tr>
      <td style="padding:7px 0;color:var(--muted);border-bottom:1px solid var(--border);width:45%;">${k}</td>
      <td style="padding:7px 0;border-bottom:1px solid var(--border);font-weight:500;">${v}</td>
    </tr>`;
  }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function getAspectRatio(w, h) { const g = gcd(w, h); return `${w/g}:${h/g}`; }

  const infoDiv = document.createElement('div');
  infoDiv.style.cssText = 'background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:1rem;margin-top:1rem;display:none;';
  body.appendChild(infoDiv);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});
</script>
</body>
</html>