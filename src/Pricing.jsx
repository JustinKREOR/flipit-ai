function Pricing({ lang, accent }) {
  const c = window.COPY[lang].pricing;
  return (
    <Section id="pricing" style={{ padding: "120px 0", background: "linear-gradient(180deg, transparent, rgba(245, 238, 221, 0.015))" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 700, marginBottom: 12 }}>{c.title}</SectionTitle>
          <p style={{ fontSize: 16, color: "var(--ink-dim)", margin: 0, marginBottom: 56, maxWidth: 560 }}>{c.sub}</p>
        </Reveal>

        <div className="pricing-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
          maxWidth: 880,
        }}>
          {c.plans.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{
                position: "relative",
                padding: "36px 32px 32px",
                borderRadius: 22,
                border: p.highlight ? `1px solid ${accent}` : "1px solid var(--line-2)",
                background: p.highlight
                  ? `linear-gradient(160deg, ${accent}22, ${accent}06 70%)`
                  : "rgba(245, 238, 221, 0.025)",
                boxShadow: p.highlight ? `0 20px 60px ${accent}20` : "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
                {p.tag && (
                  <div style={{
                    position: "absolute",
                    top: -12,
                    left: 32,
                    padding: "5px 12px",
                    background: accent,
                    color: "#0a0906",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: 999,
                  }}>{p.tag}</div>
                )}

                <div style={{ fontSize: 15, fontFamily: "'JetBrains Mono', monospace", color: accent, letterSpacing: "0.05em", marginBottom: 8 }}>
                  {p.name.toUpperCase()}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 62,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}>{p.price} $</span>
                  <span style={{ fontSize: 15, color: "var(--ink-mute)" }}>{p.period}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.5, margin: 0, marginBottom: 28 }}>{p.desc}</p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, flex: 1 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {p.highlight ? (
                  <PrimaryBtn href="#download" style={{ width: "100%", justifyContent: "center" }}>{p.cta}</PrimaryBtn>
                ) : (
                  <GhostBtn href="#download" style={{ width: "100%", justifyContent: "center" }}>{p.cta}</GhostBtn>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Beta bounty banner */}
        <Reveal delay={240}>
          <div style={{
            marginTop: 40,
            padding: "18px 24px",
            border: "1px dashed var(--line-2)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "var(--ink-dim)",
            maxWidth: 880,
          }}>
            <span style={{
              padding: "4px 10px",
              background: `${accent}18`,
              color: accent,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              borderRadius: 999,
              border: `1px solid ${accent}55`,
            }}>BÊTA</span>
            <span>Signalez un bug majeur · Recevez des jours d'abonnement gratuits en récompense.</span>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 780px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

window.Pricing = Pricing;
