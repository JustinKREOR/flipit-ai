function FAQ({ lang, accent }) {
  const c = window.COPY[lang].faq;
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div>
            <Reveal>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <SectionTitle style={{ marginBottom: 24 }}>{c.title}</SectionTitle>
              <p style={{ color: "var(--ink-dim)", fontSize: 15, lineHeight: 1.6, maxWidth: 320 }}>
                Une question qui n'est pas ici ? <a href="mailto:support@flipitapp.ai" style={{ color: accent, borderBottom: `1px solid ${accent}55` }}>support@flipitapp.ai</a>
              </p>
            </Reveal>
          </div>
          <div>
            {c.list.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "22px 0",
                  cursor: "pointer",
                }} onClick={() => setOpen(open === i ? -1 : i)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                    <h3 style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                    }}>{f.q}</h3>
                    <div style={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      borderRadius: 999,
                      border: "1px solid var(--line-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: open === i ? accent : "var(--ink-dim)",
                      transform: open === i ? "rotate(45deg)" : "rotate(0)",
                      transition: "all 0.25s ease",
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </div>
                  </div>
                  <div style={{
                    maxHeight: open === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, margin-top 0.35s ease, opacity 0.3s ease",
                    marginTop: open === i ? 14 : 0,
                    opacity: open === i ? 1 : 0,
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: 15,
                      color: "var(--ink-dim)",
                      lineHeight: 1.6,
                      paddingRight: 56,
                      textWrap: "pretty",
                    }}>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .faq-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </Section>
  );
}

window.FAQ = FAQ;
