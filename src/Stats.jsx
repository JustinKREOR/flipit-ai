function Stats({ lang, accent }) {
  const c = window.COPY[lang].stats;
  return (
    <Section style={{ padding: "100px 0" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </Reveal>
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}>
          {c.items.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                padding: "44px 28px",
                borderRight: i < c.items.length - 1 ? "1px solid var(--line)" : "none",
                height: "100%",
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginBottom: 14,
                }}>
                  <span style={{ color: accent }}>{s.n}</span>
                </div>
                <div style={{
                  fontSize: 13,
                  color: "var(--ink-dim)",
                  lineHeight: 1.45,
                  textWrap: "balance",
                }}>{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div > div { border-right: none !important; border-bottom: 1px solid var(--line); }
        }
      `}</style>
    </Section>
  );
}

window.Stats = Stats;
