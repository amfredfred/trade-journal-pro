const groups = [
  {
    label: "Signal Engine",
    desc: "The core — detecting and broadcasting high-quality setups.",
    features: [
      { name: "Live Signal Feed", tag: "FREE", desc: "Real-time alerts for all 20 pairs. Every signal includes HTF zone, LTF rejection candle, entry, SL, TP1, TP2, R:R, and current status — with push notifications on mobile." },
      { name: "Zone Map", tag: "FREE", desc: "Visual dashboard of every active supply and demand zone across all pairs, grouped by status: WATCHING, ACTIVE, or DEAD. Always know exactly where the engine is focused." },
      { name: "Session Filter", tag: "FREE", desc: "Signals are session-gated (Tokyo / London / NY). Only setups that align with your configured active sessions are emitted — reducing noise and improving edge consistency." },
    ],
  },
  {
    label: "Execution & Automation",
    desc: "Connect your broker and let the engine trade for you.",
    features: [
      { name: "Auto-Trade Engine", tag: "BASIC+", desc: "Connect MT4 or MT5 via MetaAPI. The engine places trades, manages breakeven at TP1, and closes positions automatically — no manual intervention." },
      { name: "Breakeven Management", tag: "BASIC+", desc: "Stop-loss is automatically moved to entry price when TP1 is hit, eliminating risk on open runners and enforcing consistent trade management across all positions." },
      { name: "Multi-Account Support", tag: "ELITE", desc: "Run up to 10 broker accounts simultaneously. Each account operates independently with its own risk settings, pipeline allocation, and loss-guard circuit breakers." },
    ],
  },
  {
    label: "Analytics & Journaling",
    desc: "Understand your edge deeply. Improve systematically.",
    features: [
      { name: "Trade Journal", tag: "FREE", desc: "Log every trade with entry/exit, screenshots, emotion tags, strategy notes, and conviction levels. Auto-populated from connected broker accounts via MetaAPI sync." },
      { name: "Advanced Analytics", tag: "PRO", desc: "Full analytics suite: equity curve, session heatmap, rolling performance windows, monthly scorecard, strategy breakdown, and R:R distribution — all per account." },
      { name: "Session & Hour Analysis", tag: "PRO", desc: "Hour-by-hour and session-level breakdown showing net R:R, win rate, and trade frequency across Tokyo, London, and New York. Find your highest-edge windows." },
    ],
  },
  {
    label: "Performance & Risk",
    desc: "Track your edge over time and protect your capital.",
    features: [
      { name: "Performance Hub", tag: "PRO", desc: "Risk-of-ruin calculator, income projection, streak tracker, rolling equity curve, and monthly scorecard — everything to monitor whether your statistical edge holds over time." },
      { name: "Economic Calendar", tag: "FREE", desc: "Integrated news calendar overlaid on your signal and trade history. See exactly how high-impact events affect your system's performance by session and pair." },
      { name: "Loss-Guard Circuit Breakers", tag: "ELITE", desc: "Set daily or weekly drawdown limits per account. The engine automatically suspends auto-trading if thresholds are breached — protecting funded and prop accounts." },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bfx-features-section">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="bfx-label">Platform</div>
          <h2 className="bfx-h2">Everything a <span className="dim">Serious Trader</span> Needs</h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>
            Signal engine, auto-execution, analytics, journaling — grouped by function.
          </p>
        </div>
        <div className="bfx-feat-groups">
          {groups.map((g) => (
            <div key={g.label} className="bfx-feat-group">
              <div className="bfx-feat-group-header">
                <div className="bfx-feat-group-label">{g.label}</div>
                <p className="bfx-feat-group-desc">{g.desc}</p>
              </div>
              <div className="bfx-feat-group-cols">
                {g.features.map((f) => (
                  <div key={f.name} className="bfx-feat-card">
                    <div className="bfx-feat-top">
                      <div className="bfx-feat-name">{f.name}</div>
                      <span className="bfx-feat-tag">{f.tag}</span>
                    </div>
                    <p className="bfx-feat-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
