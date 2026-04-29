function DealsShowcase({ lang, accent }) {
  const c = window.COPY[lang].deals;

  return (
    <Section style={{ padding: "120px 0", background: "linear-gradient(180deg, rgba(245, 238, 221, 0.015), transparent)" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <SectionTitle style={{ maxWidth: 700, marginBottom: 12 }}>{c.title}</SectionTitle>
          <p style={{ fontSize: 16, color: "var(--ink-dim)", margin: 0, marginBottom: 60, maxWidth: 600 }}>{c.sub}</p>
        </Reveal>

        <Reveal delay={120}>
          {/* Terminal-style header */}
          <div style={{
            border: "1px solid var(--line-2)",
            borderRadius: 18,
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(245,238,221,0.02), transparent)",
          }}>
            <div style={{
              padding: "14px 20px",
              background: "rgba(245, 238, 221, 0.03)",
              borderBottom: "1px solid var(--line)",
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "var(--ink-mute)",
              letterSpacing: "0.08em",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#e7644e" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#e8bc5a" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#7bc26b" }} />
              </div>
              <span>flipit-ai — live feed —</span>
              <div style={{ flex: 1 }} />
              <span style={{ color: "var(--ok)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--ok)", boxShadow: "0 0 8px var(--ok)", animation: "blink 1.2s infinite" }} />
                CONNECTÉ · 3 SCANNERS ACTIFS
              </span>
            </div>

            {/* Deals list */}
            <div>
              {c.list.map((d, i) => (
                <div key={i} className="deal-row" style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto",
                  gap: 20,
                  padding: "22px 24px",
                  alignItems: "center",
                  borderBottom: i < c.list.length - 1 ? "1px solid var(--line)" : "none",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245, 238, 221, 0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  {/* Category badge */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(245, 238, 221, 0.04)",
                    border: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>

                  {/* Item */}
                  <div>
                    <div style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--ink-mute)",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}>
                      {d.cat} · {d.platform} · {d.time}
                    </div>
                    <div style={{
                      fontSize: 17,
                      fontWeight: 500,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}>{d.item}</div>
                  </div>

                  {/* Prices */}
                  <div className="deal-prices" style={{ textAlign: "right", fontFamily: "'JetBrains Mono', monospace" }}>
                    <div style={{ fontSize: 13, color: "var(--ink-mute)", textDecoration: "line-through" }}>{d.market}</div>
                    <div style={{ fontSize: 19, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.01em" }}>{d.listed}</div>
                  </div>

                  {/* Savings */}
                  <div style={{
                    padding: "8px 14px",
                    background: `${accent}15`,
                    border: `1px solid ${accent}66`,
                    borderRadius: 10,
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    minWidth: 60,
                    textAlign: "center",
                  }}>-{d.save}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .deal-row { grid-template-columns: 1fr auto !important; }
          .deal-row > div:first-child { display: none; }
          .deal-prices { grid-column: 1 / 3; display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px dashed var(--line); }
        }
      `}</style>
    </Section>
  );
}

window.DealsShowcase = DealsShowcase;
