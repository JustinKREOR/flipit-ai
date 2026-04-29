function Features({ lang, accent }) {
  const c = window.COPY[lang].features;
  const icons = [
    // Bell
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    // Layers
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    // Filter
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
    // AI spark
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/><path d="M19 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/></svg>,
    // Users
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    // Bookmark
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  ];

  return (
    <Section id="features" style={{ padding: "140px 0", background: "linear-gradient(180deg, transparent, rgba(245, 238, 221, 0.015))" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 720, marginBottom: 72 }}>{c.title}</SectionTitle>
        </Reveal>

        <div className="features-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--line)",
          border: "1px solid var(--line)",
          borderRadius: 20,
          overflow: "hidden",
        }}>
          {c.list.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                padding: "36px 32px",
                background: "var(--bg)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                position: "relative",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(245, 238, 221, 0.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: `linear-gradient(135deg, ${accent}28, ${accent}08)`,
                  border: `1px solid ${accent}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: accent,
                }}>
                  <div style={{ width: 22, height: 22 }}>{icons[i]}</div>
                </div>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  margin: 0,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}>{f.k}</h3>
                <p style={{
                  margin: 0,
                  fontSize: 14.5,
                  color: "var(--ink-dim)",
                  lineHeight: 1.55,
                }}>{f.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

window.Features = Features;
