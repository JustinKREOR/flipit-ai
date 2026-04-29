// Shared UI primitives
const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ===== Eyebrow label (monospace, for section intros) =====
function Eyebrow({ children, style }) {
  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      letterSpacing: "0.15em",
      color: "var(--accent)",
      textTransform: "uppercase",
      marginBottom: 20,
      ...style,
    }}>{children}</div>
  );
}

// ===== Section heading =====
function SectionTitle({ children, style }) {
  return (
    <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "clamp(32px, 5vw, 58px)",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      margin: 0,
      marginBottom: 24,
      textWrap: "balance",
      ...style,
    }}>{children}</h2>
  );
}

// ===== Primary CTA button =====
function PrimaryBtn({ children, onClick, icon, style, href }) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "16px 24px",
        background: "var(--accent)",
        color: "#0a0906",
        borderRadius: 999,
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: "-0.01em",
        transition: "transform 0.15s ease, box-shadow 0.2s ease",
        boxShadow: "0 8px 30px rgba(212, 160, 56, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
        cursor: "pointer",
        border: "none",
        fontFamily: "inherit",
        textDecoration: "none",
        ...style,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(212, 160, 56, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(212, 160, 56, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
    >
      {icon}
      {children}
    </Component>
  );
}

// ===== Ghost button =====
function GhostBtn({ children, onClick, icon, style, href }) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "15px 22px",
        background: "rgba(245, 238, 221, 0.04)",
        color: "var(--ink)",
        borderRadius: 999,
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: "-0.01em",
        border: "1px solid var(--line-2)",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "pointer",
        fontFamily: "inherit",
        textDecoration: "none",
        ...style,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(245, 238, 221, 0.08)"; e.currentTarget.style.borderColor = "rgba(245, 238, 221, 0.25)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(245, 238, 221, 0.04)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
    >
      {icon}
      {children}
    </Component>
  );
}

// ===== App Store / Play Store buttons =====
function AppStoreBtn({ variant = "ios", href = "#", onClick }) {
  const isIOS = variant === "ios";
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 22px",
        background: "#0a0906",
        color: "var(--ink)",
        border: "1px solid var(--line-2)",
        borderRadius: 14,
        transition: "all 0.2s",
        cursor: "pointer",
        textDecoration: "none",
        minWidth: 180,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {isIOS ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24"><defs><linearGradient id="g-play" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#D4A038"/><stop offset="1" stopColor="#e8bc5a"/></linearGradient></defs><path d="M3.609 1.814 13.792 12 3.609 22.186a1 1 0 0 1-.609-.923V2.737a1 1 0 0 1 .609-.923z" fill="url(#g-play)"/><path d="m20.5 10.5-3.5-2L14 11.5 3 22.5l14-8 3.5-2a1 1 0 0 0 0-1.732z" fill="var(--accent)" opacity="0.6"/><path d="m14 11.5 3-3 3.5 2a1 1 0 0 1 0 1.732L17 14.5z" fill="var(--accent-2)" opacity="0.5"/></svg>
      )}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.1 }}>
        <span style={{ fontSize: 10, color: "var(--ink-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
          {isIOS ? "TÉLÉCHARGER SUR" : "DISPONIBLE SUR"}
        </span>
        <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>
          {isIOS ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}

// ===== Horizontal divider with corner brackets (terminal vibe) =====
function BracketDivider({ label, style }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: "var(--ink-mute)",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      ...style,
    }}>
      <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
      {label && <span>{label}</span>}
      <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

// ===== Reveal on scroll =====
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

// ===== Grid of dots background =====
function DotGrid({ opacity = 0.4 }) {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "radial-gradient(circle, rgba(245, 238, 221, 0.09) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      opacity,
      pointerEvents: "none",
      maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
    }} />
  );
}

// ===== Section wrapper =====
function Section({ id, children, style }) {
  return (
    <section id={id} style={{
      position: "relative",
      padding: "120px 0",
      ...style,
    }}>
      {children}
    </section>
  );
}

Object.assign(window, {
  Eyebrow,
  SectionTitle,
  PrimaryBtn,
  GhostBtn,
  AppStoreBtn,
  BracketDivider,
  Reveal,
  DotGrid,
  Section,
});
