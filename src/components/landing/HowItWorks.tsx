const steps = [
  {
    n: "1", phase: "HTF SCAN", color: "var(--accent)",
    icon: "⬡",
    name: "Break of Structure Detected",
    desc: "The engine scans all pairs on the higher timeframe (30M / 1H). When price breaks cleanly above a swing high or below a swing low, a supply or demand zone is confirmed and locked.",
    tag: "MarketStructure · TrendBias",
  },
  {
    n: "2", phase: "ZONE MAP", color: "var(--info)",
    icon: "◈",
    name: "Zone Logged & Session-Filtered",
    desc: "The zone is added to the Zone Map and checked against your active sessions — Tokyo, London, NY. Overlapping zones within the same session are deduplicated.",
    tag: "SessionMemory · ZoneMap",
  },
  {
    n: "3", phase: "APPROACH", color: "var(--warn)",
    icon: "◎",
    name: "Price Nears Zone — PENDING Alert",
    desc: "When price closes within range of the zone on the LTF (5M), status advances to PENDING. Push notification fires with pre-calculated entry, SL, TP1, and TP2.",
    tag: "SignalScheduler · LTF_WATCH",
  },
  {
    n: "4", phase: "TRIGGER", color: "var(--danger)",
    icon: "◆",
    name: "Rejection Candle Scored",
    desc: "A hammer at demand or shooting-star at supply forms at the zone edge. The engine scores wick ratio, body position, and close. If it passes, signal is TRIGGERED.",
    tag: "RejectionDetector · QualityGate",
  },
  {
    n: "5", phase: "EXECUTION", color: "var(--accent)",
    icon: "▶",
    name: "Order Placed on Broker",
    desc: "With auto-trade on, the order hits your MT4/MT5/cTrader account immediately via MetaAPI — sized to your configured R. SL placed just beyond the zone.",
    tag: "MetaAPI · AutoTradeEngine",
  },
  {
    n: "6", phase: "MANAGEMENT", color: "var(--gold)",
    icon: "⟳",
    name: "TP1 Hit — Stop to Breakeven",
    desc: "At TP1 the engine automatically moves stop-loss to entry, locking in a risk-free runner. Partial profit logged. Position continues toward TP2.",
    tag: "TradeManagement · Breakeven",
  },
  {
    n: "7", phase: "CLOSE", color: "var(--gold)",
    icon: "✓",
    name: "TP2 Reached — Logged to Analytics",
    desc: "Final target hit. Position closes. R:R, outcome, and duration are written to journal, equity curve, and analytics simultaneously. WIN, LOSS, or BE — all recorded.",
    tag: "Analytics · Journal · EquityCurve",
  },
];

export default function HowItWorks() {
  return (
    <section className="bfx-hiw" id="how-it-works">
      <div className="bfx-section-inner">
        <div className="bfx-hiw-header">
          <div className="bfx-label">Signal Engine Pipeline</div>
          <h2 className="bfx-h2">How It <span className="dim">Works</span></h2>
          <p className="bfx-sub">Seven steps. Every one runs automatically — from zone detection to closed trade.</p>
        </div>
        <div className="bfx-hiw-grid">
          {steps.map((s) => (
            <div key={s.n} className="bfx-hiw-card">
              <div className="bfx-hiw-ghost">{s.n}</div>
              <div className="bfx-hiw-icon" style={{ borderColor: `color-mix(in srgb, ${s.color} 30%, var(--border2))` }}>
                <span style={{ color: s.color, fontSize: 18 }}>{s.icon}</span>
              </div>
              <div className="bfx-hiw-phase" style={{ color: s.color }}>{s.phase}</div>
              <div className="bfx-hiw-name">{s.name}</div>
              <p className="bfx-hiw-desc">{s.desc}</p>
              <div className="bfx-hiw-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
