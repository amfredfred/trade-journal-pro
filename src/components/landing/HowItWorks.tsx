const steps = [
  {
    n: "01",
    phase: "HTF SCAN",
    name: "Break of Structure Detected",
    desc: "The engine continuously scans all pairs on the Higher Timeframe (30M or 1H). When pivot-based BOS is confirmed — a clean break above a swing high or below a swing low — a Supply or Demand zone is locked and the engine enters WATCHING state.",
    tag: "MarketStructure · TrendBias",
    color: "var(--accent)",
  },
  {
    n: "02",
    phase: "ZONE MAP",
    name: "Zone Ranked & Session-Filtered",
    desc: "The confirmed zone is mapped against all active zones, filtered by session (Tokyo / London / NY), and ranked by proximity and quality. The Zone Map dashboard updates in real-time. Duplicate zones within the same session are suppressed via SessionMemory dedup rules.",
    tag: "SessionMemory · ZoneMap",
    color: "var(--info)",
  },
  {
    n: "03",
    phase: "LTF APPROACH",
    name: "Price Approaches — PENDING Alert Fired",
    desc: "The engine switches to high-frequency LTF polling (5M) when price closes within proximity of the HTF zone boundary. Signal advances to PENDING. Push notification fired immediately. Entry, SL, TP1, and TP2 pre-calculated.",
    tag: "SignalScheduler · LTF_WATCH",
    color: "var(--warn)",
  },
  {
    n: "04",
    phase: "TRIGGER",
    name: "Rejection Candle Scored & Signal Fired",
    desc: "A hammer (demand) or shooting-star (supply) candle forms at the zone edge on the LTF. The RejectionDetector scores wick ratio, body position, and close location. If the quality gate passes, a TRIGGERED signal is emitted with full entry parameters.",
    tag: "RejectionDetector · SignalQualityGate",
    color: "#f05454",
  },
  {
    n: "05",
    phase: "EXECUTION",
    name: "Order Placed on Broker",
    desc: "If auto-trade is enabled, the engine places the order on your connected broker (MT4 / MT5 / cTrader / Match Trader) via MetaAPI within milliseconds. Risk is sized to your configured R value. SL sits 1–3 pips beyond the zone boundary.",
    tag: "MetaAPI · AutoTradeEngine",
    color: "var(--accent)",
  },
  {
    n: "06",
    phase: "MANAGEMENT",
    name: "TP1 Hit → Stop Moved to Breakeven",
    desc: "At TP1 the engine automatically moves the stop-loss to entry price, locking in a risk-free runner. Partial profit is recorded to your trade journal. The remaining position continues targeting TP2 at maximum R:R.",
    tag: "TradeManagement · BreakevenLogic",
    color: "var(--gold)",
  },
  {
    n: "07",
    phase: "CLOSE & LOG",
    name: "TP2 Closed — R:R Logged to Analytics",
    desc: "Final target reached and position closed. Realized R:R is written to the analytics engine, journal, and equity curve simultaneously. Signal is marked WIN, LOSS, or BE — feeding the rolling performance windows and session heatmap.",
    tag: "Analytics · PerformanceHub · Journal",
    color: "var(--gold)",
  },
];

export default function HowItWorks() {
  return (
    <section className="bfx-hiw" id="how-it-works">
      <div className="bfx-section-inner">
        <div className="bfx-label">Signal Engine Pipeline</div>
        <h2 className="bfx-h2">Seven steps.<br />Zero manual intervention.</h2>
        <p className="bfx-sub">
          From BOS detection on the higher timeframe to final trade closure — the engine runs
          the complete lifecycle autonomously while you monitor from the dashboard.
        </p>
        <div className="bfx-hiw-track">
          <div className="bfx-hiw-line" />
          {steps.map((s) => (
            <div key={s.n} className="bfx-hiw-step">
              <div className="bfx-hiw-node" style={{ borderColor: s.color, color: s.color }}>
                {s.n}
              </div>
              <div className="bfx-hiw-content">
                <div className="bfx-hiw-phase" style={{ color: s.color }}>{s.phase}</div>
                <div className="bfx-hiw-name">{s.name}</div>
                <p className="bfx-hiw-desc">{s.desc}</p>
                <div className="bfx-hiw-tag">{s.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
