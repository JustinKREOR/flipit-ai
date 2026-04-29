function Hero({ lang, accent, variant }) {
  const c = window.COPY[lang].hero;
  const [scanCount, setScanCount] = React.useState(2438291);

  React.useEffect(() => {
    const t = setInterval(() => {
      setScanCount(n => n + Math.floor(Math.random() * 9) + 3);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" style={{
      position: "relative",
      minHeight: "100vh",
      paddingTop: 140,
      paddingBottom: 80,
      overflow: "hidden",
    }}>
      <DotGrid opacity={0.5} />

      {/* Orbital glow */}
      <div style={{
        position: "absolute",
        top: "15%",
        right: "-10%",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${accent}22, transparent 60%)`,
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          {/* Left: copy */}
          <div>
            {/* Live pill */}
            <Reveal>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px",
                background: "rgba(245, 238, 221, 0.04)",
                border: "1px solid var(--line-2)",
                borderRadius: 999,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--ink-dim)",
                marginBottom: 32,
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: accent,
                  position: "relative",
                  boxShadow: `0 0 12px ${accent}`,
                }}>
                  <span style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: accent,
                    animation: "pulse-ring 1.8s ease-out infinite",
                  }} />
                </span>
                {c.tag}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                margin: 0,
                marginBottom: 24,
                textWrap: "balance",
              }}>
                {c.title_a}
                <span style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  background: `linear-gradient(135deg, ${accent}, ${accent === "#D4A038" ? "#f0ca6a" : accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {c.title_b}
                </span>
                {c.title_c}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p style={{
                fontSize: "clamp(16px, 1.4vw, 19px)",
                color: "var(--ink-dim)",
                lineHeight: 1.55,
                margin: 0,
                marginBottom: 40,
                maxWidth: 580,
                textWrap: "pretty",
              }}>
                {c.sub}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 20 }}>
                <AppStoreBtn variant="ios" />
                <AppStoreBtn variant="android" />
              </div>
              <div style={{
                fontSize: 12,
                color: "var(--ink-mute)",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.03em",
              }}>
                {c.cta_sub}
              </div>
            </Reveal>

            {/* Live scan counter */}
            <Reveal delay={400}>
              <div style={{
                marginTop: 48,
                padding: "16px 20px",
                background: "rgba(245, 238, 221, 0.03)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "var(--ok)",
                  boxShadow: "0 0 10px var(--ok)",
                  animation: "blink 1.4s infinite",
                }} />
                <div style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
                  ANNONCES ANALYSÉES
                </div>
                <div style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink)",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {scanCount.toLocaleString("fr-CA")}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: phone mockup */}
          <div className="hero-phone-wrap">
            <Reveal delay={200}>
              <PhoneMockup accent={accent} />
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-phone-wrap { display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
