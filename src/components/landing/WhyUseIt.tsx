const reasons = [
  { icon: "📊", title: "The edge is already backtested", body: "1,484 trades. 10 months. 10 pairs. Walk-forward simulation using the exact rules the live engine applies. +1,111R at a profit factor of 2.84. Full CSV available for independent verification." },
  { icon: "⚙️", title: "No discretion required", body: "The engine applies deterministic rules: pivot-based BOS, zone ranking, wick ratio scoring, R:R gates. The same setup produces the same signal every single time." },
  { icon: "🔗", title: "Works with your existing broker", body: "Connect any MT4, MT5, cTrader, or Match Trader account via MetaAPI. No fund transfers, no new accounts. Execute on your existing broker relationship." },
  { icon: "🔍", title: "Full transparency on every trade", body: "Every signal shows the HTF zone origin, LTF rejection candle, entry/SL/TP, and R:R. Your journal captures the entire history. Nothing is a black box." },
  { icon: "🛡️", title: "Built for prop and funded accounts", body: "Daily drawdown limits, loss-guard circuit breakers, and breakeven management are built in. Elite users get funded account mode — compliant with standard prop firm rules." },
  { icon: "📦", title: "One platform, not three subscriptions", body: "Signal feed, analytics, journaling, and auto-execution are all bundled. No separate journaling app, no third-party alert service, no extra analytics tool." },
];

export default function WhyUseIt() {
  return (
    <section className="bfx-why" id="why">
      <div className="bfx-section-inner">
        <div className="bfx-why-header">
          <div className="bfx-label">Why BobiFX</div>
          <h2 className="bfx-h2">Built for <span className="dim">Serious Traders</span></h2>
          <p className="bfx-sub">What makes this different from every other signal service.</p>
        </div>
        <div className="bfx-why-grid">
          {reasons.map((r) => (
            <div key={r.title} className="bfx-why-card">
              <div className="bfx-why-icon">{r.icon}</div>
              <div className="bfx-why-title">{r.title}</div>
              <p className="bfx-why-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
