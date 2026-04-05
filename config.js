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
  upload: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
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
};

// ─── SHARED PREMIUM CSS ───
const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --bg: #ffffff;
  --bg-secondary: #f6f6f6;
  --bg-tertiary: #f0f0f0;
  --text: #0a0a0a;
  --text-secondary: #6b6b6b;
  --text-muted: #b0b0b0;
  --border: rgba(0,0,0,0.07);
  --border-strong: rgba(0,0,0,0.12);
  --accent: #0a0a0a;
  --accent-hover: #222;
  --accent-light: #f5f5f5;
  --danger: #dc2626;
  --success: #16a34a;
  --warning: #d97706;
  --radius: 16px;
  --radius-sm: 10px;
  --radius-xs: 6px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);
  --shadow: 0 2px 8px rgba(0,0,0,0.06), 0 6px 20px rgba(0,0,0,0.05);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
  --shadow-xl: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
  --transition: all 0.22s cubic-bezier(0.4,0,0.2,1);
  --transition-spring: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  --font-display: 'Syne', system-ui, sans-serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  -webkit-user-select: none;
  user-select: none;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input, textarea {
  -webkit-user-select: text;
  user-select: text;
  font-family: var(--font-body);
}

img {
  user-select: none;
  -webkit-user-drag: none;
}

button, a {
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  font-family: var(--font-body);
}

button:focus, a:focus, input:focus, textarea:focus { outline: none; box-shadow: none; }

::-webkit-scrollbar { width: 0; height: 0; }

/* ─── PAGE ENTRANCE ─── */
@keyframes pageIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* ─── SHIMMER ANIMATION ─── */
@keyframes shimmerSweep {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.shim, .cv-shim, .v-shim, .g-shim, .feat-slide-shim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    #ececec 0%,
    #ececec 25%,
    #f8f8f8 40%,
    #ffffff 50%,
    #f8f8f8 60%,
    #ececec 75%,
    #ececec 100%
  );
  background-size: 400% 100%;
  animation: shimmerSweep 1.8s ease-in-out infinite;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.shim.off, .cv-shim.off, .v-shim.off, .g-shim.off, .feat-slide-shim.off {
  opacity: 0;
  pointer-events: none;
}

/* ─── HEADER ─── */
.t-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.92);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  animation: pageIn 0.4s ease both;
}

.t-header-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: var(--text);
  border-radius: 50%;
  transition: var(--transition);
  position: relative;
}

.t-header-btn:active {
  background: var(--accent-light);
  transform: scale(0.9);
}

.t-logo {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--text);
}

.t-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: var(--danger);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-family: var(--font-display);
}

/* ─── SIDEBAR ─── */
.t-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.t-overlay.active {
  opacity: 1;
  visibility: visible;
}

.t-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #fff;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 40px rgba(0,0,0,0.12);
}

.t-sidebar.active { transform: translateX(0); }

.t-sidebar-header {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-muted);
}

.t-sidebar-close {
  width: 36px;
  height: 36px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.t-sidebar-close:active { transform: scale(0.9); }

.t-sidebar-nav {
  flex: 1;
  padding: 12px 0;
  overflow-y: auto;
}

.t-sidebar-nav a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  text-decoration: none;
  color: var(--text);
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.t-sidebar-nav a:last-child { border-bottom: none; }
.t-sidebar-nav a:active { background: var(--accent-light); }

.t-sidebar-footer {
  padding: 20px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.t-sidebar-footer button {
  flex: 1;
  padding: 10px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
}

/* ─── CONTAINER ─── */
.t-container {
  background: var(--bg);
  padding: 16px 16px 100px;
  animation: pageIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
}

/* ─── BACK HEADER ─── */
.back-header {
  height: 58px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.92);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  animation: pageIn 0.35s ease both;
}

.back-header h2, .back-header h3 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--text);
}

.back-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: var(--bg-secondary);
  color: var(--text);
  border-radius: 50%;
  transition: var(--transition);
  flex-shrink: 0;
}

.back-btn:active { transform: scale(0.88); background: var(--bg-tertiary); }

/* ─── BUTTONS ─── */
.t-btn {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: var(--radius);
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition-spring);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.t-btn:active { transform: scale(0.96); }

.t-btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.t-btn-primary:active { box-shadow: 0 1px 4px rgba(0,0,0,0.12); }

.t-btn-outline {
  background: transparent;
  color: var(--text);
  border: 1.5px solid var(--border-strong);
}

.t-btn-outline:active { background: var(--bg-secondary); }

.t-btn-danger { background: var(--danger); color: #fff; }

/* ─── INPUTS ─── */
.t-input {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-family: var(--font-body);
  background: var(--bg-secondary);
  color: var(--text);
  transition: var(--transition);
}

.t-input:focus {
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
}

.t-label {
  display: block;
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 8px;
  margin-top: 18px;
}

/* ─── SECTION TITLE ─── */
.t-section-title {
  font-family: var(--font-display);
  color: var(--text);
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 28px 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.t-section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, var(--border-strong), transparent);
}

/* ─── CARDS ─── */
.t-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

/* ─── STATUS BADGES ─── */
.t-status {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.t-status-verifying { background: #dbeafe; color: #1d4ed8; }
.t-status-creating  { background: #fed7aa; color: #c2410c; }
.t-status-processing{ background: #fef08a; color: #a16207; }
.t-status-processed { background: #bbf7d0; color: #15803d; }

/* ─── LOADER ─── */
.t-loader {
  display: flex;
  justify-content: center;
  padding: 48px 20px;
}

.t-spinner {
  width: 28px;
  height: 28px;
  border: 2.5px solid rgba(0,0,0,0.08);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.65s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ─── PAGE LOADER ─── */
.t-page-loader {
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: opacity 0.4s ease;
}

.t-page-loader.hidden {
  opacity: 0;
  pointer-events: none;
}

.t-page-loader-logo {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 5px;
  color: var(--text);
  animation: pulse 1.4s ease infinite;
}

@keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }

/* ─── EMPTY STATE ─── */
.t-empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font-display);
  letter-spacing: 1px;
}

/* ─── MODAL ─── */
.t-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(6px);
  display: none;
  align-items: flex-end;
  justify-content: center;
  z-index: 2000;
  padding: 0;
}

.t-modal.active { display: flex; }

.t-modal-box {
  background: #fff;
  width: 100%;
  max-width: 480px;
  border-radius: 24px 24px 0 0;
  padding: 28px 24px 40px;
  text-align: center;
  box-shadow: 0 -8px 40px rgba(0,0,0,0.12);
  animation: slideUpModal 0.36s cubic-bezier(0.34,1.2,0.64,1) both;
}

@keyframes slideUpModal {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

.t-modal-box h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text);
  letter-spacing: 1px;
}

/* ─── FADE SCROLL ANIMATION ─── */
.t-fade {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1);
}

.t-fade.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── FOOTER ─── */
.t-footer {
  border-top: 1px solid rgba(0,0,0,0.06);
  margin-top: 48px;
  padding: 32px 20px 40px;
  background: #0a0a0a;
  text-align: center;
}

.t-footer p {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.25);
  margin-bottom: 14px;
  text-transform: uppercase;
}

.t-footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.t-footer-links a {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: rgba(255,255,255,0.3);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}

.t-footer-links a:active { color: rgba(255,255,255,0.7); }
`;

// ─── HELPER: Init Firebase + Sidebar ───
function initApp() {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');

  window.toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  if (overlay) overlay.addEventListener('click', toggleSidebar);

  auth.onAuthStateChanged(user => {
    const userBox = document.getElementById('userBox');
    if (userBox) {
      if (user && !user.isAnonymous) {
        userBox.innerHTML = `<span style="font-size:13px;font-weight:600;color:var(--text-secondary)">${user.email || 'Signed in'}</span>`;
      } else {
        userBox.innerHTML = `<button onclick="location.href='login.html'" style="background:var(--accent);color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:700;font-family:var(--font-display);letter-spacing:1px;cursor:pointer">Sign In</button>`;
      }
    }

    if (user) {
      const cartBadge = document.getElementById('cartBadge');
      if (cartBadge) {
        db.collection('users').doc(user.uid).collection('cart')
          .onSnapshot(snap => {
            cartBadge.textContent = snap.size;
            cartBadge.style.display = snap.size > 0 ? 'flex' : 'none';
          });
      }
    }
  });

  const faders = document.querySelectorAll('.t-fade');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  faders.forEach(f => fadeObserver.observe(f));

  return { auth, db };
}

// ─── HELPER: Upload to ImgBB ───
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
    reader.readAsDataURL(file);
  });
}

// ─── PAGE LOADER ───
function showPageLoader() {
  const loader = document.createElement('div');
  loader.className = 't-page-loader';
  loader.id = 'pageLoader';
  loader.innerHTML = `<div class="t-page-loader-logo">THUMBLYST</div>`;
  document.body.prepend(loader);
}

function hidePageLoader() {
  const loader = document.getElementById('pageLoader');
  if (loader) { loader.classList.add('hidden'); setTimeout(() => loader.remove(), 400); }
}

// ─── HEADER HTML ───
function headerHTML(title) {
  return `
  <div class="t-overlay" id="overlay"></div>
  <div class="t-sidebar" id="sidebar">
    <div class="t-sidebar-header">
      <span>Menu</span>
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
      <a href="https://wa.me/918828949250" style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:#f0fdf4;border-radius:50%;">${ICONS.whatsapp}</a>
    </div>
  </div>
  <header class="t-header">
    <button class="t-header-btn" onclick="toggleSidebar()">${ICONS.menu}</button>
    <div class="t-logo">${title || 'THUMBLYST'}</div>
    <button class="t-header-btn" onclick="location.href='cart.html'">
      ${ICONS.cart}
      <span class="t-badge" id="cartBadge" style="display:none">0</span>
    </button>
  </header>`;
}

// ─── FOOTER HTML ───
function footerHTML() {
  return `
  <footer class="t-footer">
    <p>© 2025 Thumblyst — Premium Gaming GFX</p>
    <div class="t-footer-links">
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="orders.html">Orders</a>
    </div>
  </footer>`;
}