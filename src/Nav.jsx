function Nav({ lang = "fr", setLang, bannerOffset = 0 }) {
  const c = window.COPY[lang].nav;
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: c.features },
    { href: "#how", label: c.how },
    { href: "#pricing", label: c.pricing },
    { href: "#faq", label: c.faq },
    { href: "mailto:support@flipitapp.ai", label: c.support },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: bannerOffset,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? "12px 0" : "20px 0",
      background: scrolled ? "rgba(10, 9, 6, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <LogoMark />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}>
            FlipIt <span style={{ color: "var(--accent)" }}>AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 14,
              color: "var(--ink-dim)",
              transition: "color 0.2s",
              fontWeight: 500,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--ink)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--ink-dim)"; }}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA + Lang toggle */}
        <div className="nav-cta" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* FR / EN toggle */}
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(245, 238, 221, 0.04)",
            border: "1px solid var(--line-2)",
            borderRadius: 999,
            padding: 3,
            gap: 2,
          }}>
            {["fr", "en"].map(l => (
              <button key={l} onClick={() => setLang && setLang(l)} style={{
                padding: "5px 12px",
                borderRadius: 999,
                background: lang === l ? "var(--accent)" : "transparent",
                color: lang === l ? "#0a0906" : "var(--ink-dim)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s",
                textTransform: "uppercase",
              }}>{l}</button>
            ))}
          </div>
          <PrimaryBtn
            href="#download"
            style={{ padding: "10px 18px", fontSize: 14 }}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>}
          >
            {c.download}
          </PrimaryBtn>
        </div>

        {/* Mobile toggle */}
        <button className="nav-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "rgba(10, 9, 6, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--line)",
          padding: "20px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 16, color: "var(--ink)", padding: "8px 0" }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links { display: none !important; }
          .nav-mobile-toggle { display: flex !important; align-items: center; justify-content: center; width: 40px; height: 40px; border: 1px solid var(--line-2); border-radius: 10px; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function LogoMark() {
  return (
    <div style={{
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 16px rgba(212, 160, 56, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
      position: "relative",
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0906" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    </div>
  );
}

window.Nav = Nav;
window.LogoMark = LogoMark;
