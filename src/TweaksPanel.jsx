function TweaksPanel({ state, setState }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const onMessage = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setActive(true);
      if (e.data.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMessage);
    // Announce availability AFTER listener
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const update = (key, value) => {
    setState(s => ({ ...s, [key]: value }));
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
    } catch (e) {}
  };

  if (!active) return null;

  const accentOptions = [
    { label: "Or (défaut)", value: "#D4A038" },
    { label: "Cyan électrique", value: "#3dd9d6" },
    { label: "Vert lime", value: "#aee83d" },
    { label: "Rouge magma", value: "#e7644e" },
    { label: "Violet néon", value: "#b97bff" },
  ];

  return (
    <div style={{
      position: "fixed",
      right: 20,
      bottom: 20,
      width: 300,
      background: "rgba(15, 13, 8, 0.96)",
      backdropFilter: "blur(20px)",
      border: "1px solid var(--line-2)",
      borderRadius: 16,
      padding: 20,
      zIndex: 1000,
      fontFamily: "'Space Grotesk', sans-serif",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.15em",
        color: "var(--accent)",
        marginBottom: 16,
      }}>TWEAKS</div>

      {/* Accent color */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: "var(--ink-dim)", marginBottom: 8 }}>Couleur d'accent</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {accentOptions.map(o => (
            <button key={o.value} onClick={() => update("accentColor", o.value)} style={{
              width: 30, height: 30, borderRadius: 999,
              background: o.value,
              border: state.accentColor === o.value ? "2px solid var(--ink)" : "2px solid transparent",
              cursor: "pointer",
              transition: "transform 0.15s",
              boxShadow: `0 0 10px ${o.value}66`,
            }}
            title={o.label}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          ))}
        </div>
      </div>

      {/* Copy tone */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: "var(--ink-dim)", marginBottom: 8 }}>Ton du copy</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["direct", "urgence", "pro"].map(t => (
            <button key={t} onClick={() => update("copyTone", t)} style={{
              padding: "6px 12px",
              fontSize: 12,
              border: `1px solid ${state.copyTone === t ? "var(--accent)" : "var(--line-2)"}`,
              background: state.copyTone === t ? `${state.accentColor}22` : "transparent",
              color: state.copyTone === t ? "var(--accent)" : "var(--ink-dim)",
              borderRadius: 8,
              cursor: "pointer",
              textTransform: "capitalize",
              fontFamily: "inherit",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Beta banner */}
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--ink)" }}>
          <input type="checkbox" checked={state.showBetaBanner} onChange={e => update("showBetaBanner", e.target.checked)} />
          Afficher la bannière BETA
        </label>
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
