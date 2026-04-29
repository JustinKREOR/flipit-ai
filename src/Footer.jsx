function Footer({ lang, accent }) {
  const c = window.COPY[lang].footer;
  return (
    <footer id="download" style={{
      position: "relative",
      padding: "100px 0 40px",
      borderTop: "1px solid var(--line)",
      overflow: "hidden",
    }}>
      {/* Final CTA */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          textAlign: "center",
          marginBottom: 80,
          padding: "80px 40px",
          borderRadius: 28,
          border: "1px solid var(--line-2)",
          background: `radial-gradient(ellipse at top, ${accent}18, transparent 60%)`,
          position: "relative",
          overflow: "hidden",
        }}>
          <DotGrid opacity={0.35} />
          <Reveal>
            <div style={{
              position: "relative",
              zIndex: 2,
            }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                marginBottom: 16,
                textWrap: "balance",
              }}>
                {c.tagline}
              </h2>
              <p style={{ fontSize: 16, color: "var(--ink-dim)", margin: 0, marginBottom: 36 }}>
                Téléchargez l'app · Créez votre profil · Recevez l'alerte.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
                <AppStoreBtn variant="ios" />
                <AppStoreBtn variant="android" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer content */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 60,
          borderBottom: "1px solid var(--line)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <LogoMark />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: "-0.02em",
              }}>FlipIt <span style={{ color: accent }}>AI</span></span>
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.55, margin: 0, maxWidth: 280 }}>
              Scanner intelligent pour Facebook Marketplace, Kijiji et Craigslist. Soyez le premier sur chaque bonne affaire.
            </p>
          </div>

          {Object.entries(c.sections).map(([key, sec]) => (
            <div key={key}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--ink-mute)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}>{sec.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {sec.links.map((l, i) => {
                  // Resolve href
                  let href = "#";
                  if (l === "Politique de confidentialité") href = "privacy.html";
                  else if (l === "Termes et conditions") href = "terms.html";
                  else if (l === "Fonctionnalités") href = "#features";
                  else if (l === "Tarifs") href = "#pricing";
                  else if (l === "Comment ça marche") href = "#how";
                  else if (l === "FAQ") href = "#faq";
                  else if (l === "Contact") href = "mailto:support@flipitapp.ai";
                  return (
                    <li key={i}>
                      <a href={href} style={{
                        fontSize: 14,
                        color: "var(--ink-dim)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--ink)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--ink-dim)"; }}
                      >{l}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{
          paddingTop: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
          fontSize: 13,
          color: "var(--ink-mute)",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.02em",
        }}>
          <div>{c.copy}</div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="privacy.html" style={{ color: "var(--ink-mute)" }}>Confidentialité</a>
            <a href="terms.html" style={{ color: "var(--ink-mute)" }}>Termes</a>
            <span>{c.madein}</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 780px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: 1 / 3; }
        }
      `}</style>
    </footer>
  );
}

window.Footer = Footer;
