function HowItWorks({ lang, accent }) {
  const c = window.COPY[lang].how;
  return (
    <Section id="how" style={{ padding: "140px 0" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 820, marginBottom: 80 }}>{c.title}</SectionTitle>
        </Reveal>

        <div className="how-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {c.steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{
                position: "relative",
                padding: "32px 28px",
                background: "linear-gradient(180deg, rgba(245, 238, 221, 0.035), rgba(245, 238, 221, 0.01))",
                border: "1px solid var(--line)",
                borderRadius: 20,
                height: "100%",
                overflow: "hidden",
              }}>
                {/* Corner marker */}
                <div style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: accent,
                  padding: "4px 10px",
                  border: `1px solid ${accent}55`,
                  borderRadius: 6,
                }}>
                  {s.tag}
                </div>

                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                  color: accent,
                  marginBottom: 28,
                }}>{s.num}</div>

                <h3 style={{
                  fontSize: 24,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  marginBottom: 12,
                  color: "var(--ink)",
                }}>{s.title}</h3>

                <p style={{
                  fontSize: 15,
                  color: "var(--ink-dim)",
                  lineHeight: 1.55,
                  margin: 0,
                }}>{s.body}</p>

                {/* Step illustration */}
                <div style={{ marginTop: 32 }}>
                  <StepIllustration idx={i} accent={accent} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function StepIllustration({ idx, accent }) {
  if (idx === 0) {
    // Search profile chips
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { k: "Catégorie", v: "Vélos · Route" },
          { k: "Prix max", v: "1 200 $" },
          { k: "Rayon", v: "50 km · Montréal" },
          { k: "Mots-clés", v: "carbone, Shimano" },
        ].map((f, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 12px",
            background: "rgba(245, 238, 221, 0.03)",
            border: "1px solid var(--line)",
            borderRadius: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
          }}>
            <span style={{ color: "var(--ink-mute)" }}>{f.k}</span>
            <span style={{ color: "var(--ink)" }}>{f.v}</span>
          </div>
        ))}
      </div>
    );
  }
  if (idx === 1) {
    // Scanning animation
    return (
      <div style={{
        position: "relative",
        height: 130,
        background: "#0a0906",
        border: "1px solid var(--line)",
        borderRadius: 10,
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
      }}>
        {/* scan bar */}
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 20,
          background: `linear-gradient(180deg, ${accent}44, transparent)`,
          animation: "scan-sweep-local 2.5s linear infinite",
        }} />
        <div style={{ padding: 12, color: "var(--ink-mute)", lineHeight: 1.7 }}>
          <div>[fb] scan annonce #8224...</div>
          <div style={{ color: "var(--ok)" }}>[ok] marché estimé 1 200$</div>
          <div style={{ color: accent }}>[!] sous-évaluée -62%</div>
          <div>[push] envoi notification...</div>
        </div>
        <style>{`
          @keyframes scan-sweep-local {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(650%); }
          }
        `}</style>
      </div>
    );
  }
  // Step 3 — notification preview
  return (
    <div style={{
      background: `linear-gradient(135deg, ${accent}22, ${accent}08)`,
      border: `1px solid ${accent}55`,
      borderRadius: 14,
      padding: 14,
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: accent,
        letterSpacing: "0.08em",
        marginBottom: 6,
      }}>FLIPIT AI · À L'INSTANT</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 3 }}>
        Nouvelle alerte — Vélo route
      </div>
      <div style={{ fontSize: 12, color: "var(--ink-dim)" }}>
        Cervélo R5 carbone · 890 $ · -63%
      </div>
    </div>
  );
}

window.HowItWorks = HowItWorks;
