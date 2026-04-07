// ─── FIREBASE CONFIG ───
const firebaseConfig = {
  apiKey: "AIzaSyD_K3xM5jJisYM5xKFHx7Fp8Cu5C_psH2U",
  authDomain: "morin-thumblyst.firebaseapp.com",
  projectId: "morin-thumblyst",
  storageBucket: "morin-thumblyst.firebasestorage.app",
  messagingSenderId: "921107065041",
  appId: "1:921107065041:web:66a9dd91f7f6488d20bdf0"
};

const IMGBB_KEY = "405018efab5e2bd5e75f4dd0040a41c3";

// ─── SVG ICONS ───
const ICONS = {
  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  cart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  back: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  upload: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(0,240,255,0.4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  orders: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  explore: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  about: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  contact: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  gift: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>`,
  whatsapp: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  image: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  logout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  spin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
};

// ─── PREMIUM DARK CYBER SHARED CSS ───
const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

:root {
  --bg:        #090c10;
  --bg2:       #0d1117;
  --bg3:       #131924;
  --bg4:       #1a2332;
  --panel:     rgba(13,17,23,0.95);
  --cyan:      #00f0ff;
  --cyan2:     #00c8d4;
  --purple:    #c026d3;
  --purple2:   #9333ea;
  --green:     #00ff88;
  --red:       #ff3860;
  --yellow:    #ffd600;
  --text:      #e8f4f8;
  --text2:     #8ba4b8;
  --text3:     #4a6278;
  --border:    rgba(0,240,255,0.1);
  --border2:   rgba(0,240,255,0.2);
  --glow-cyan: 0 0 20px rgba(0,240,255,0.35), 0 0 60px rgba(0,240,255,0.12);
  --glow-purple: 0 0 20px rgba(192,38,211,0.35), 0 0 60px rgba(192,38,211,0.12);
  --glow-green: 0 0 20px rgba(0,255,136,0.35), 0 0 60px rgba(0,255,136,0.12);
  --radius:    14px;
  --radius-sm: 9px;
  --radius-xs: 5px;
  --transition: all 0.22s cubic-bezier(0.4,0,0.2,1);
  --spring:    all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  --font-display: 'Exo 2', system-ui, sans-serif;
  --font-body:    'Rajdhani', system-ui, sans-serif;
  --font-mono:    'Space Mono', monospace;
}

* { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
html { scroll-behavior:smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

/* scanline texture */
body::before {
  content:'';
  position:fixed;
  inset:0;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.012) 2px, rgba(0,240,255,0.012) 4px);
  pointer-events:none;
  z-index:0;
}

input, textarea { -webkit-user-select:text; user-select:text; font-family:var(--font-body); }
img { user-select:none; -webkit-user-drag:none; }
button, a { outline:none; cursor:pointer; -webkit-tap-highlight-color:transparent; font-family:var(--font-body); }
::-webkit-scrollbar { width:0; height:0; }

/* ─── ANIMATIONS ─── */
@keyframes pageIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
@keyframes scaleIn { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes pulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
@keyframes livePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.2;transform:scale(1.8)} }
@keyframes neonFlicker { 0%,19%,21%,23%,25%,54%,56%,100%{opacity:1} 20%,24%,55%{opacity:0.5} }
@keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
@keyframes glowPulse { 0%,100%{box-shadow:var(--glow-cyan)} 50%{box-shadow:0 0 40px rgba(0,240,255,0.6), 0 0 80px rgba(0,240,255,0.2)} }
@keyframes shimmerCyber {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes borderGlow {
  0%,100%{border-color:rgba(0,240,255,0.15)}
  50%{border-color:rgba(0,240,255,0.4)}
}
@keyframes slideUpModal { from{transform:translateY(100%)} to{transform:translateY(0)} }
@keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }

/* ─── SHIMMER ─── */
.shim, .cv-shim, .v-shim, .g-shim, .feat-slide-shim {
  position:absolute; inset:0; z-index:1;
  background: linear-gradient(90deg,#0d1117 0%,#0d1117 25%,#1a2332 40%,#1e2d40 50%,#1a2332 60%,#0d1117 75%,#0d1117 100%);
  background-size:400% 100%;
  animation:shimmerCyber 2s ease-in-out infinite;
  transition:opacity 0.4s ease;
  pointer-events:none;
}
.shim.off,.cv-shim.off,.v-shim.off,.g-shim.off,.feat-slide-shim.off{opacity:0;pointer-events:none}

/* ─── NAVBAR ─── */
.t-header {
  height:62px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 16px;
  background:rgba(9,12,16,0.96);
  border-bottom:1px solid var(--border);
  position:sticky;
  top:0;
  z-index:100;
  backdrop-filter:blur(20px) saturate(160%);
  -webkit-backdrop-filter:blur(20px) saturate(160%);
  animation:pageIn 0.4s ease both;
}
.t-header::after {
  content:'';
  position:absolute;
  bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--cyan),transparent);
  opacity:0.4;
}

.t-header-btn {
  width:40px; height:40px;
  display:flex; align-items:center; justify-content:center;
  border:none; background:none;
  color:var(--text2);
  border-radius:10px;
  transition:var(--transition);
  position:relative;
}
.t-header-btn:active { background:var(--bg3); color:var(--cyan); transform:scale(0.9); }

.t-logo {
  font-family:var(--font-display);
  font-size:19px; font-weight:900;
  letter-spacing:5px;
  text-transform:uppercase;
  color:var(--cyan);
  text-shadow:0 0 18px rgba(0,240,255,0.6), 0 0 40px rgba(0,240,255,0.2);
  animation:neonFlicker 6s ease-in-out infinite;
}
.t-logo span { color:var(--purple); }

.t-badge {
  position:absolute; top:4px; right:4px;
  background:var(--purple);
  color:#fff; font-size:9px; font-weight:700;
  min-width:16px; height:16px; border-radius:8px;
  display:flex; align-items:center; justify-content:center;
  padding:0 4px; font-family:var(--font-display);
  box-shadow:0 0 8px rgba(192,38,211,0.6);
}

/* search bar in header */
.t-search-bar {
  flex:1; max-width:200px; margin:0 8px;
  position:relative;
}
.t-search-bar input {
  width:100%; height:36px;
  background:var(--bg3); border:1px solid var(--border);
  border-radius:10px; padding:0 12px 0 34px;
  font-size:13px; color:var(--text); font-family:var(--font-body);
  transition:var(--transition);
  outline:none;
}
.t-search-bar input:focus { border-color:var(--cyan2); box-shadow:0 0 0 2px rgba(0,240,255,0.15); }
.t-search-bar input::placeholder { color:var(--text3); }
.t-search-bar .s-icon {
  position:absolute; left:10px; top:50%; transform:translateY(-50%);
  color:var(--text3); pointer-events:none;
}
.t-search-drop {
  position:absolute; top:calc(100%+6px); left:0; right:0;
  background:var(--bg3); border:1px solid var(--border2);
  border-radius:var(--radius); overflow:hidden;
  box-shadow:0 16px 40px rgba(0,0,0,0.6), var(--glow-cyan);
  z-index:200; display:none;
}
.t-search-drop.open { display:block; animation:scaleIn 0.18s ease both; }
.search-result-item {
  display:flex; align-items:center; gap:10px;
  padding:10px 14px; cursor:pointer;
  border-bottom:1px solid var(--border);
  transition:var(--transition);
  text-decoration:none;
}
.search-result-item:last-child { border-bottom:none; }
.search-result-item:hover { background:var(--bg4); }
.search-result-item img { width:42px; height:30px; object-fit:cover; border-radius:6px; flex-shrink:0; }
.search-result-item .sri-name { font-weight:700; font-size:13px; color:var(--text); }
.search-result-item .sri-price { font-size:11px; color:var(--cyan); font-family:var(--font-mono); }
.search-no-result { padding:16px; text-align:center; color:var(--text3); font-size:12px; letter-spacing:1px; }

/* ─── SIDEBAR ─── */
.t-overlay {
  position:fixed; inset:0;
  background:rgba(0,0,0,0.7); backdrop-filter:blur(6px);
  z-index:999; opacity:0; visibility:hidden;
  transition:opacity 0.3s, visibility 0.3s;
}
.t-overlay.active { opacity:1; visibility:visible; }

.t-sidebar {
  position:fixed; top:0; left:0; bottom:0; width:280px;
  background:var(--bg2); z-index:1000;
  transform:translateX(-100%);
  transition:transform 0.32s cubic-bezier(0.4,0,0.2,1);
  display:flex; flex-direction:column;
  border-right:1px solid var(--border2);
  box-shadow:4px 0 40px rgba(0,0,0,0.6), 4px 0 20px rgba(0,240,255,0.05);
}
.t-sidebar.active { transform:translateX(0); }

.t-sidebar-header {
  height:60px; display:flex; align-items:center; justify-content:space-between;
  padding:0 20px;
  border-bottom:1px solid var(--border);
  font-family:var(--font-display); font-size:10px; font-weight:700;
  letter-spacing:4px; text-transform:uppercase; color:var(--cyan);
}
.t-sidebar-header::after {
  content:''; position:absolute; bottom:0; left:0; right:0;
  height:1px; background:linear-gradient(90deg,transparent,var(--cyan),transparent); opacity:0.3;
}

.t-sidebar-close {
  width:34px; height:34px; border:1px solid var(--border);
  background:var(--bg3); color:var(--text2); border-radius:8px;
  display:flex; align-items:center; justify-content:center; cursor:pointer; transition:var(--transition);
}
.t-sidebar-close:active { transform:scale(0.9); border-color:var(--cyan); color:var(--cyan); }

.t-sidebar-nav { flex:1; padding:8px 0; overflow-y:auto; }
.t-sidebar-nav a {
  display:flex; align-items:center; gap:14px;
  padding:14px 20px;
  text-decoration:none; color:var(--text2); font-size:15px; font-weight:600;
  border-bottom:1px solid var(--border);
  transition:var(--transition); letter-spacing:0.5px;
}
.t-sidebar-nav a:last-child { border-bottom:none; }
.t-sidebar-nav a:active { background:var(--bg3); color:var(--cyan); }

.t-sidebar-footer {
  padding:18px 20px;
  border-top:1px solid var(--border);
  display:flex; align-items:center; justify-content:space-between; gap:12px;
}
.t-sidebar-footer button {
  flex:1; padding:10px;
  background:linear-gradient(135deg,var(--cyan),var(--purple));
  color:#000; border:none; border-radius:var(--radius-sm);
  font-size:11px; font-weight:800; font-family:var(--font-display);
  letter-spacing:2px; cursor:pointer; transition:var(--transition);
}

/* ─── CONTAINER ─── */
.t-container {
  padding:16px 16px 100px;
  position:relative; z-index:1;
  animation:pageIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
}

/* ─── BACK HEADER ─── */
.back-header {
  height:60px; display:flex; align-items:center; gap:12px;
  padding:0 16px;
  background:rgba(9,12,16,0.96); border-bottom:1px solid var(--border);
  position:sticky; top:0; z-index:100;
  backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
  animation:pageIn 0.35s ease both;
}
.back-header::after {
  content:''; position:absolute; bottom:0; left:0; right:0; height:1px;
  background:linear-gradient(90deg,transparent,var(--cyan),transparent); opacity:0.3;
}
.back-header h2, .back-header h3 {
  font-family:var(--font-display); font-size:15px; font-weight:800;
  letter-spacing:3px; color:var(--text); text-transform:uppercase;
}
.back-btn {
  width:38px; height:38px; display:flex; align-items:center; justify-content:center;
  border:1px solid var(--border); background:var(--bg3); color:var(--text2);
  border-radius:9px; transition:var(--transition); flex-shrink:0;
}
.back-btn:active { transform:scale(0.88); border-color:var(--cyan); color:var(--cyan); }

/* ─── BUTTONS ─── */
.t-btn {
  width:100%; padding:15px 20px; border:none; border-radius:var(--radius);
  font-size:12px; font-weight:800; font-family:var(--font-display);
  letter-spacing:3px; text-transform:uppercase; cursor:pointer;
  transition:var(--spring);
  display:flex; align-items:center; justify-content:center; gap:8px;
}
.t-btn:active { transform:scale(0.96); }

.t-btn-primary {
  background:linear-gradient(135deg,var(--cyan),var(--cyan2));
  color:#000;
  box-shadow:0 4px 20px rgba(0,240,255,0.35), 0 1px 4px rgba(0,0,0,0.4);
}
.t-btn-primary:active { box-shadow:0 1px 6px rgba(0,240,255,0.2); }
.t-btn-primary:disabled { opacity:0.35; cursor:not-allowed; filter:grayscale(0.5); }

.t-btn-purple {
  background:linear-gradient(135deg,var(--purple),var(--purple2));
  color:#fff;
  box-shadow:0 4px 20px rgba(192,38,211,0.35);
}
.t-btn-outline {
  background:transparent; color:var(--text);
  border:1.5px solid var(--border2);
}
.t-btn-outline:active { background:var(--bg3); border-color:var(--cyan); color:var(--cyan); }
.t-btn-danger { background:var(--red); color:#fff; box-shadow:0 4px 16px rgba(255,56,96,0.3); }

/* ─── INPUTS ─── */
.t-input {
  width:100%; padding:13px 16px;
  border:1.5px solid var(--border);
  border-radius:var(--radius-sm);
  font-size:14px; font-family:var(--font-body);
  background:var(--bg3); color:var(--text);
  transition:var(--transition); outline:none;
  letter-spacing:0.5px;
}
.t-input:focus { border-color:var(--cyan); box-shadow:0 0 0 3px rgba(0,240,255,0.1), 0 0 12px rgba(0,240,255,0.15); }
.t-input::placeholder { color:var(--text3); }

.t-label {
  display:block; font-family:var(--font-display); font-size:10px; font-weight:700;
  letter-spacing:2px; text-transform:uppercase; color:var(--text3);
  margin-bottom:7px; margin-top:18px;
}

/* ─── SECTION TITLE ─── */
.t-section-title {
  font-family:var(--font-display); color:var(--text2);
  font-size:10px; letter-spacing:4px; font-weight:700;
  text-transform:uppercase; margin:28px 0 14px;
  display:flex; align-items:center; gap:10px;
}
.t-section-title::after {
  content:''; flex:1; height:1px;
  background:linear-gradient(to right,var(--border2),transparent);
}

/* ─── CARDS ─── */
.t-card {
  background:var(--bg2); border:1px solid var(--border);
  border-radius:var(--radius);
}

/* ─── STATUS BADGES ─── */
.t-status {
  display:inline-flex; align-items:center;
  padding:4px 12px; border-radius:20px;
  font-size:9px; font-weight:800; font-family:var(--font-display);
  letter-spacing:2px; text-transform:uppercase;
}
.t-status-verifying { background:rgba(0,240,255,0.1); color:var(--cyan); border:1px solid rgba(0,240,255,0.2); }
.t-status-creating  { background:rgba(255,214,0,0.1); color:var(--yellow); border:1px solid rgba(255,214,0,0.2); }
.t-status-processing{ background:rgba(192,38,211,0.1); color:var(--purple); border:1px solid rgba(192,38,211,0.2); }
.t-status-processed { background:rgba(0,255,136,0.1); color:var(--green); border:1px solid rgba(0,255,136,0.2); }

/* ─── LOADER ─── */
.t-loader { display:flex; justify-content:center; padding:48px 20px; }
.t-spinner {
  width:28px; height:28px;
  border:2.5px solid rgba(0,240,255,0.1);
  border-top-color:var(--cyan); border-radius:50%;
  animation:spin 0.65s linear infinite;
  box-shadow:0 0 10px rgba(0,240,255,0.3);
}

/* ─── PAGE LOADER ─── */
.t-page-loader {
  position:fixed; inset:0; background:var(--bg);
  z-index:9999; display:flex; flex-direction:column;
  align-items:center; justify-content:center; gap:20px;
  transition:opacity 0.4s ease;
}
.t-page-loader.hidden { opacity:0; pointer-events:none; }
.t-page-loader-logo {
  font-family:var(--font-display); font-size:22px; font-weight:900;
  letter-spacing:8px; color:var(--cyan);
  text-shadow:0 0 20px rgba(0,240,255,0.6);
  animation:pulse 1.4s ease infinite;
}

/* ─── EMPTY STATE ─── */
.t-empty {
  text-align:center; padding:60px 20px;
  color:var(--text3); font-size:12px; font-weight:600;
  font-family:var(--font-display); letter-spacing:2px;
}

/* ─── MODAL ─── */
.t-modal {
  position:fixed; inset:0;
  background:rgba(0,0,0,0.8); backdrop-filter:blur(8px);
  display:none; align-items:flex-end; justify-content:center;
  z-index:2000; padding:0;
}
.t-modal.active { display:flex; }
.t-modal-box {
  background:var(--bg2); width:100%; max-width:480px;
  border-radius:22px 22px 0 0; padding:28px 24px 40px;
  text-align:center;
  border:1px solid var(--border2); border-bottom:none;
  box-shadow:0 -8px 40px rgba(0,240,255,0.08);
  animation:slideUpModal 0.36s cubic-bezier(0.34,1.2,0.64,1) both;
}
.t-modal-box h3 {
  font-family:var(--font-display); font-size:18px; font-weight:800;
  margin-bottom:16px; color:var(--text); letter-spacing:2px; text-transform:uppercase;
}

/* ─── FADE ANIMATION ─── */
.t-fade {
  opacity:0; transform:translateY(18px);
  transition:opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1);
}
.t-fade.visible { opacity:1; transform:translateY(0); }

/* ─── FOOTER ─── */
.t-footer {
  border-top:1px solid var(--border); margin-top:48px;
  padding:32px 20px 40px;
  background:var(--bg2); text-align:center; position:relative;
}
.t-footer::before {
  content:''; position:absolute; top:0; left:0; right:0; height:1px;
  background:linear-gradient(90deg,transparent,var(--cyan),transparent); opacity:0.3;
}
.t-footer p {
  font-family:var(--font-display); font-size:9px;
  letter-spacing:3px; color:var(--text3);
  margin-bottom:14px; text-transform:uppercase;
}
.t-footer-links { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; }
.t-footer-links a {
  font-family:var(--font-display); font-size:9px; letter-spacing:2px;
  color:var(--text3); text-decoration:none; text-transform:uppercase; transition:color 0.2s;
}
.t-footer-links a:active { color:var(--cyan); }

/* ─── PRODUCT CARD (cyber style) ─── */
.pc-card {
  display:block; text-decoration:none; color:var(--text);
  border-radius:var(--radius); overflow:hidden;
  background:var(--bg2); border:1px solid var(--border);
  transition:transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s;
  position:relative;
}
.pc-card:active { transform:scale(0.97); }
.pc-card:hover { border-color:var(--border2); box-shadow:0 8px 32px rgba(0,0,0,0.4), var(--glow-cyan); }

.pc-img-wrap {
  position:relative; width:100%; overflow:hidden;
  background:var(--bg3); aspect-ratio:16/9;
}
.pc-img-wrap img {
  position:absolute; inset:0; width:100%; height:100%;
  object-fit:cover; opacity:0; transition:opacity 0.5s ease; z-index:2;
}
.pc-img-wrap img.on { opacity:1; }

/* LIVE badge */
.pc-live-badge {
  position:absolute; top:10px; left:10px; z-index:6;
  background:#ff3860; color:#fff;
  font-family:var(--font-display); font-size:8px; font-weight:800;
  letter-spacing:2px; padding:3px 8px; border-radius:4px;
  text-transform:uppercase;
  box-shadow:0 0 10px rgba(255,56,96,0.6);
  display:flex; align-items:center; gap:4px;
}
.pc-live-badge::before {
  content:''; width:5px; height:5px; border-radius:50%;
  background:#fff; animation:livePulse 1.2s ease-in-out infinite;
}

/* card overlay gradient */
.pc-overlay {
  position:absolute; inset:0; z-index:4;
  background:linear-gradient(160deg,transparent 30%,rgba(0,0,0,0.8) 90%);
}
.pc-overlay-title {
  position:absolute; bottom:0; left:0; right:0; z-index:5;
  padding:12px 14px;
  font-family:var(--font-display); font-size:13px; font-weight:800;
  color:#fff; letter-spacing:1px; text-transform:uppercase;
  text-shadow:0 2px 12px rgba(0,0,0,0.8);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

.pc-info {
  padding:12px 14px;
  display:flex; justify-content:space-between; align-items:center; gap:8px;
}
.pc-info h3 {
  font-family:var(--font-display); font-size:13px; font-weight:700;
  flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  color:var(--text); letter-spacing:0.5px;
}
.pc-price {
  font-family:var(--font-mono); font-size:12px; font-weight:700;
  background:linear-gradient(135deg,var(--cyan),var(--cyan2));
  color:#000; padding:4px 12px; border-radius:20px;
  flex-shrink:0; letter-spacing:0.5px;
}
.pc-order-btn {
  width:100%; padding:11px;
  background:transparent; border:1px solid var(--border2);
  border-top:none; color:var(--cyan);
  font-family:var(--font-display); font-size:10px; font-weight:800;
  letter-spacing:3px; text-transform:uppercase;
  cursor:pointer; transition:var(--transition);
}
.pc-order-btn:active { background:rgba(0,240,255,0.08); }

/* ─── NEON SECTION BADGE ─── */
.sec-badge {
  font-family:var(--font-display); font-size:8px; font-weight:800;
  letter-spacing:2px; padding:2px 8px; border-radius:4px;
  text-transform:uppercase;
  background:rgba(255,56,96,0.15); color:var(--red);
  border:1px solid rgba(255,56,96,0.3);
  box-shadow:0 0 8px rgba(255,56,96,0.2);
}
.sec-badge-pfp { background:rgba(192,38,211,0.15); color:var(--purple); border-color:rgba(192,38,211,0.3); box-shadow:0 0 8px rgba(192,38,211,0.2); }
`;

// ─── HEADER HTML ───
function headerHTML(title) {
  return `
  <div class="t-overlay" id="overlay"></div>
  <div class="t-sidebar" id="sidebar">
    <div class="t-sidebar-header">
      <span>MENU</span>
      <button class="t-sidebar-close" onclick="toggleSidebar()">${ICONS.close}</button>
    </div>
    <nav class="t-sidebar-nav">
      <a href="index.html">${ICONS.home} Home</a>
      <a href="orders.html">${ICONS.orders} My Orders</a>
      <a href="spin.html">${ICONS.spin} Daily Spin</a>
      <a href="redeem.html">${ICONS.gift} Redeem</a>
      <a href="about.html">${ICONS.about} About</a>
      <a href="contact.html">${ICONS.contact} Contact</a>
    </nav>
    <div class="t-sidebar-footer">
      <div id="userBox"></div>
      <a href="https://wa.me/918828949250" target="_blank" style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:rgba(37,211,102,0.1);border:1px solid rgba(37,211,102,0.2);border-radius:50%;">${ICONS.whatsapp}</a>
    </div>
  </div>
  <header class="t-header">
    <button class="t-header-btn" onclick="toggleSidebar()" aria-label="Menu">${ICONS.menu}</button>
    <div class="t-logo">${title || '<span style="color:var(--text)">THUMB</span>LYST'}</div>
    <button class="t-header-btn" onclick="location.href='cart.html'" aria-label="Cart">
      ${ICONS.cart}
      <span class="t-badge" id="cartBadge" style="display:none">0</span>
    </button>
  </header>`;
}

// ─── FOOTER HTML ───
function footerHTML() {
  return `
  <footer class="t-footer">
    <p>© 2025 Thumblyst — Premium Gaming GFX Studio</p>
    <div class="t-footer-links">
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="orders.html">Orders</a>
      <a href="https://wa.me/918828949250" target="_blank">WhatsApp</a>
    </div>
  </footer>`;
}

// ─── INIT APP ───
function initApp() {
  // Guard against double-init
  let app;
  try {
    app = firebase.app();
  } catch(e) {
    firebase.initializeApp(firebaseConfig);
  }
  const auth = firebase.auth();
  const db = firebase.firestore();

  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');

  window.toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
  };

  if (overlay) overlay.addEventListener('click', toggleSidebar);

  auth.onAuthStateChanged(user => {
    const userBox = document.getElementById('userBox');
    if (userBox) {
      if (user && !user.isAnonymous) {
        const name = user.displayName || user.email || 'User';
        userBox.innerHTML = `<span style="font-size:12px;font-weight:700;color:var(--cyan);letter-spacing:1px;font-family:var(--font-display)">${name.split(' ')[0].toUpperCase()}</span>`;
      } else {
        userBox.innerHTML = `<button onclick="location.href='login.html'" style="background:linear-gradient(135deg,var(--cyan),var(--cyan2));color:#000;border:none;padding:8px 14px;border-radius:8px;font-size:10px;font-weight:800;font-family:var(--font-display);letter-spacing:2px;cursor:pointer">SIGN IN</button>`;
      }
    }

    if (user) {
      const cartBadge = document.getElementById('cartBadge');
      if (cartBadge) {
        try {
          db.collection('users').doc(user.uid).collection('cart')
            .onSnapshot(snap => {
              cartBadge.textContent = snap.size;
              cartBadge.style.display = snap.size > 0 ? 'flex' : 'none';
            }, () => {});
        } catch(e) {}
      }
    }
  });

  // Scroll fade observer
  const faders = document.querySelectorAll('.t-fade');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
  faders.forEach(f => obs.observe(f));

  return { auth, db };
}

// ─── UPLOAD TO IMGBB ───
async function uploadToImgBB(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const fd = new FormData();
      fd.append('key', IMGBB_KEY);
      fd.append('image', reader.result.split(',')[1]);
      try {
        const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body: fd });
        const json = await res.json();
        if (json.success) resolve(json.data.url);
        else reject('ImgBB upload failed');
      } catch(e) { reject(e); }
    };
    reader.onerror = () => reject('File read failed');
    reader.readAsDataURL(file);
  });
}

// ─── PAGE LOADER ───
function showPageLoader() {
  const l = document.createElement('div');
  l.className = 't-page-loader'; l.id = 'pageLoader';
  l.innerHTML = `<div class="t-page-loader-logo">THUMBLYST</div><div class="t-spinner"></div>`;
  document.body.prepend(l);
}
function hidePageLoader() {
  const l = document.getElementById('pageLoader');
  if (l) { l.classList.add('hidden'); setTimeout(() => l.remove(), 400); }
}

// ─── TOAST NOTIFICATION ───
function showToast(msg, type = 'info') {
  const existing = document.getElementById('t-toast');
  if (existing) existing.remove();
  const colors = { success: 'var(--green)', error: 'var(--red)', info: 'var(--cyan)', warning: 'var(--yellow)' };
  const t = document.createElement('div');
  t.id = 't-toast';
  t.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--bg2);border:1px solid ${colors[type]||colors.info};color:var(--text);padding:12px 20px;border-radius:12px;font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:2px;z-index:9999;box-shadow:0 0 20px ${colors[type]||colors.info}40;opacity:0;transition:all 0.3s ease;white-space:nowrap;max-width:90vw;text-align:center;`;
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(10px)'; setTimeout(() => t.remove(), 300); }, 2800);
}
