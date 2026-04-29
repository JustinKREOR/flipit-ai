function ForWho({ lang, accent }) {
  const c = window.COPY[lang].forWho;
  return (
    <Section style={{ padding: "120px 0" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 800, marginBottom: 72 }}>{c.title}</SectionTitle>
        </Reveal>

        <div className="forwho-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {c.personas.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{
                position: "relative",
                padding: "40px 32px",
                borderRadius: 20,
                border: "1px solid var(--line-2)",
                background: i === 1
                  ? `linear-gradient(160deg, ${accent}18, transparent 60%)`
                  : "rgba(245, 238, 221, 0.02)",
                overflow: "hidden",
                height: "100%",
              }}>
                {/* Decorative chars */}
                <div style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: "0.1em",
                }}>0{i + 1}</div>

                <div style={{
                  display: "inline-block",
                  padding: "5px 11px",
                  fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  color: accent,
                  background: `${accent}15`,
                  border: `1px solid ${accent}44`,
                  borderRadius: 999,
                  marginBottom: 32,
                  textTransform: "uppercase",
                }}>{p.tag}</div>

                <h3 style={{
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: 0,
                  marginBottom: 16,
                  color: "var(--ink)",
                  textWrap: "balance",
                }}>{p.title}</h3>

                <p style={{
                  fontSize: 15,
                  color: "var(--ink-dim)",
                  lineHeight: 1.6,
                  margin: 0,
                  textWrap: "pretty",
                }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .forwho-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

window.ForWho = ForWho;
