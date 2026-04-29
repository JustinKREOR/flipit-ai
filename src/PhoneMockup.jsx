// Animated iPhone mockup with live notifications
const { useState: usePhoneState, useEffect: usePhoneEffect, useRef: usePhoneRef } = React;

const NOTIFICATIONS = [
  { cat: "🪑 Mobilier", title: "Canapé cuir italien — 450 $", sub: "Marché estimé 1 200 $ · -62%", time: "À l'instant", platform: "FB Marketplace" },
  { cat: "📱 Électronique", title: "iPhone 15 Pro 256GB — 720 $", sub: "Marché estimé 1 050 $ · -31%", time: "12s", platform: "Kijiji" },
  { cat: "🚴 Vélo", title: "Cervélo carbone R5 — 890 $", sub: "Marché estimé 2 400 $ · -63%", time: "47s", platform: "Craigslist" },
  { cat: "🛠️ Outillage", title: "Compresseur DeWalt 60gal — 380 $", sub: "Marché estimé 799 $ · -52%", time: "1m", platform: "FB Marketplace" },
  { cat: "📸 Photo", title: "Canon R6 + 24-70 2.8 — 2100 $", sub: "Marché estimé 3 500 $ · -40%", time: "2m", platform: "Kijiji" },
  { cat: "💿 Vinyle", title: "Pink Floyd DSOTM 1st press — 60 $", sub: "Marché estimé 320 $ · -81%", time: "3m", platform: "FB Marketplace" },
];

function PhoneMockup({ accent }) {
  const [notifs, setNotifs] = usePhoneState([NOTIFICATIONS[0], NOTIFICATIONS[1], NOTIFICATIONS[2]]);
  const idxRef = usePhoneRef(3);

  usePhoneEffect(() => {
    const t = setInterval(() => {
      setNotifs(prev => {
        const next = [NOTIFICATIONS[idxRef.current % NOTIFICATIONS.length], ...prev.slice(0, 2)];
        idxRef.current += 1;
        return next;
      });
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const [time, setTime] = usePhoneState("");
  usePhoneEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
    };
    update();
    const t = setInterval(update, 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      position: "relative",
      width: 320,
      height: 640,
      margin: "0 auto",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        inset: -60,
        background: `radial-gradient(ellipse at center, ${accent}22, transparent 65%)`,
        filter: "blur(40px)",
        pointerEvents: "none",
      }} />

      {/* Phone frame */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 48,
        background: "linear-gradient(145deg, #2a241b 0%, #0a0906 50%, #1a160f 100%)",
        padding: 11,
        boxShadow: `
          0 40px 80px rgba(0,0,0,0.6),
          0 0 0 1px rgba(245, 238, 221, 0.08),
          inset 0 2px 2px rgba(255,255,255,0.05)
        `,
      }}>
        {/* Side button */}
        <div style={{ position: "absolute", right: -2, top: 120, width: 3, height: 60, background: "#1a160f", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: -2, top: 100, width: 3, height: 32, background: "#1a160f", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: -2, top: 150, width: 3, height: 56, background: "#1a160f", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: -2, top: 220, width: 3, height: 56, background: "#1a160f", borderRadius: 2 }} />

        {/* Screen */}
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: 38,
          overflow: "hidden",
          position: "relative",
          background: `
            radial-gradient(ellipse at 50% -10%, ${accent}15, transparent 50%),
            linear-gradient(180deg, #0f0d08 0%, #060503 100%)
          `,
        }}>
          {/* Status bar */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 28px 8px",
            fontSize: 13,
            fontWeight: 600,
            color: "#f5eedd",
            fontFamily: "-apple-system, sans-serif",
          }}>
            <span>{time || "10:24"}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {/* signal */}
              <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
                <rect x="0" y="6" width="3" height="4" rx="0.5" />
                <rect x="4" y="4" width="3" height="6" rx="0.5" />
                <rect x="8" y="2" width="3" height="8" rx="0.5" />
                <rect x="12" y="0" width="3" height="10" rx="0.5" />
              </svg>
              {/* wifi */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                <path d="M7 10c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM4 7c.8-.8 1.9-1.3 3-1.3s2.2.5 3 1.3L7 10 4 7zM1 4c1.6-1.6 3.8-2.5 6-2.5s4.4.9 6 2.5l-2 2c-1.1-1.1-2.5-1.6-4-1.6s-2.9.5-4 1.6L1 4z" />
              </svg>
              {/* battery */}
              <div style={{ position: "relative", width: 24, height: 11, border: "1px solid #f5eedd", borderRadius: 3, padding: 1 }}>
                <div style={{ width: "75%", height: "100%", background: "#f5eedd", borderRadius: 1 }} />
                <div style={{ position: "absolute", right: -2, top: 3, width: 1.5, height: 5, background: "#f5eedd", borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* Dynamic island */}
          <div style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 32,
            background: "#000",
            borderRadius: 999,
            zIndex: 10,
          }} />

          {/* Scanning indicator header */}
          <div style={{
            padding: "42px 20px 18px",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: accent,
              marginBottom: 6,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}>
              <span style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: 999,
                background: accent,
                boxShadow: `0 0 12px ${accent}`,
                animation: "blink 1.2s infinite",
              }} />
              FLIPIT · LIVE
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#f5eedd" }}>
              Nouvelles offres
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>
              Analyse: 3 plateformes · 24/7
            </div>
          </div>

          {/* Scanning sweep line */}
          <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 140,
            height: 40,
            background: `linear-gradient(180deg, transparent, ${accent}20, transparent)`,
            animation: "scan-sweep 3.5s linear infinite",
            pointerEvents: "none",
          }} />

          {/* Notification stack */}
          <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            {notifs.map((n, i) => (
              <div
                key={`${n.title}-${idxRef.current}-${i}`}
                style={{
                  background: i === 0 ? `linear-gradient(135deg, ${accent}22, ${accent}08)` : "rgba(245, 238, 221, 0.05)",
                  border: i === 0 ? `1px solid ${accent}66` : "1px solid rgba(245, 238, 221, 0.08)",
                  borderRadius: 18,
                  padding: "12px 14px",
                  animation: i === 0 ? "slide-up-notif-new 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                  opacity: i === 0 ? 1 : 0.95 - i * 0.2,
                  transform: `scale(${1 - i * 0.02})`,
                  transition: "all 0.5s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div style={{ fontSize: 10, color: i === 0 ? accent : "var(--ink-dim)", fontWeight: 600, letterSpacing: "0.05em", fontFamily: "'JetBrains Mono', monospace" }}>
                    FLIPIT AI · {n.platform.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--ink-mute)" }}>{n.time}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-dim)", marginBottom: 2 }}>{n.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#f5eedd", letterSpacing: "-0.01em", marginBottom: 3, lineHeight: 1.2 }}>
                  {n.title}
                </div>
                <div style={{ fontSize: 11, color: i === 0 ? "#ffd37a" : "var(--ink-dim)", fontFamily: "'JetBrains Mono', monospace" }}>
                  {n.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 130,
            height: 5,
            background: "#f5eedd",
            borderRadius: 999,
            opacity: 0.6,
          }} />
        </div>
      </div>

      <style>{`
        @keyframes slide-up-notif-new {
          0% { transform: translateY(-40px) scale(0.95); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

window.PhoneMockup = PhoneMockup;
