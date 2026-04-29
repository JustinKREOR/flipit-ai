const BANNER_H = 38;

function BetaBanner({ accent, lang, onClose }) {
  const isFr = lang === "fr";
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      height: BANNER_H,
      background: `linear-gradient(90deg, ${accent}18, ${accent}08)`,
      borderBottom: `1px solid ${accent}33`,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      fontSize: 12,
      color: "var(--ink)",
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: "0.02em",
      flexWrap: "nowrap",
      overflow: "hidden",
    }}>
      <span style={{
        padding: "2px 8px",
        background: accent,
        color: "#0a0906",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.15em",
        borderRadius: 4,
        flexShrink: 0,
      }}>BETA</span>
      <span style={{ color: "var(--ink-dim)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {isFr
          ? "Bug majeur trouvé ? Récompense en jours d'abonnement gratuits →"
          : "Found a major bug? Get free subscription days as a reward →"}
      </span>
      <a href="mailto:bugs@flipitapp.ai" style={{ color: accent, borderBottom: `1px solid ${accent}55`, flexShrink: 0, whiteSpace: "nowrap" }}>
        bugs@flipitapp.ai
      </a>
      <button onClick={onClose} style={{
        marginLeft: 4,
        width: 22, height: 22,
        flexShrink: 0,
        borderRadius: 999,
        border: "1px solid var(--line-2)",
        color: "var(--ink-dim)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: "transparent",
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}

function App() {
  const defaults = window.TWEAK_DEFAULTS || {};
  const [state, setState] = React.useState({
    accentColor: defaults.accentColor || "#D4A038",
    heroVariant: defaults.heroVariant || "phone",
    showBetaBanner: defaults.showBetaBanner !== false,
    copyTone: defaults.copyTone || "direct",
    lang: defaults.lang || "fr",
  });
  const [bannerClosed, setBannerClosed] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", state.accentColor);
    root.style.setProperty("--accent-2", state.accentColor);
  }, [state.accentColor]);

  const accent = state.accentColor;
  const lang = state.lang;
  const setLang = (l) => setState(s => ({ ...s, lang: l }));
  const bannerVisible = state.showBetaBanner && !bannerClosed;
  const bannerOffset = bannerVisible ? BANNER_H : 0;

  return (
    <>
      {bannerVisible && (
        <BetaBanner accent={accent} lang={lang} onClose={() => setBannerClosed(true)} />
      )}
      <div style={{ paddingTop: bannerOffset }}>
        <Nav lang={lang} setLang={setLang} bannerOffset={bannerOffset} />
        <Hero lang={lang} accent={accent} variant={state.heroVariant} />
        <HowItWorks lang={lang} accent={accent} />
        <Features lang={lang} accent={accent} />
        <Stats lang={lang} accent={accent} />
        <ForWho lang={lang} accent={accent} />
        <DealsShowcase lang={lang} accent={accent} />
        <Testimonials lang={lang} accent={accent} />
        <Pricing lang={lang} accent={accent} />
        <FAQ lang={lang} accent={accent} />
        <Footer lang={lang} accent={accent} />
      </div>
      <TweaksPanel state={state} setState={setState} />
    </>
  );
}

const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(<App />);
