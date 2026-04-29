function Testimonials({ lang, accent }) {
  const c = window.COPY[lang].testimonials;
  return (
    <Section style={{ padding: "120px 0" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 780, marginBottom: 64 }}>{c.title}</SectionTitle>
        </Reveal>

        <div className="testimonials-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {c.list.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                padding: "32px 28px",
                border: "1px solid var(--line-2)",
                borderRadius: 18,
                background: "rgba(245, 238, 221, 0.025)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}>
                <div style={{ color: accent, fontFamily: "'Instrument Serif', serif", fontSize: 48, lineHeight: 0.8, height: 24 }}>“</div>
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--ink)",
                  margin: 0,
                  flex: 1,
                  letterSpacing: "-0.005em",
                }}>{t.q}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    background: `linear-gradient(135deg, ${accent}, ${accent}88)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0a0906",
                  }}>{t.n.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{t.n}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{t.r}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

window.Testimonials = Testimonials;
