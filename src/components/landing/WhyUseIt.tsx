const reasons = [
  {
    n: "01",
    title: "The edge is already backtested",
    body: "Every component of the signal logic — BOS detection, zone ranking, rejection scoring, session filtering — has been validated across 1,484 trades and 10 months. You're not guessing whether the system works.",
  },
  {
    n: "02",
    title: "No discretion required",
    body: "The engine doesn't rely on your interpretation of a chart. It applies deterministic rules: pivot-based structure, wick ratio thresholds, configurable R:R gates. The same setup produces the same signal every time.",
  },
  {
    n: "03",
    title: "Works with your existing broker",
    body: "Connect any MT4, MT5, cTrader, or Match Trader account. No need to move funds or open a new account. BobiFX reads and executes on your existing broker relationship via MetaAPI.",
  },
  {
    n: "04",
    title: "Full transparency on every trade",
    body: "Every signal includes the HTF zone origin, LTF candle that triggered it, entry/SL/TP levels, and R:R ratio. The journal captures your entire history. Nothing is a black box.",
  },
  {
    n: "05",
    title: "Designed for prop and funded accounts",
    body: "Loss-guard circuit breakers, daily drawdown limits, and breakeven management are built in. Elite users get funded account mode — tailored risk controls that comply with standard prop firm rules.",
  },
  {
    n: "06",
    title: "One platform, not three subscriptions",
    body: "Signal feed, analytics, journaling, and auto-execution are bundled. No separate journaling app, no third-party alert service, no additional analytics tool. Everything is in one dashboard.",
  },
];

export default function WhyUseIt() {
  return (
    <section className="bfx-why" id="why">
      <div className="bfx-section-inner">
        <div className="bfx-label">Why BobiFX</div>
        <h2 className="bfx-h2">What makes this<br />different.</h2>
        <p className="bfx-sub">
          Most signal services give you an alert with no context and no accountability.
          BobiFX gives you the engine, the data, and the tools to verify everything.
        </p>
        <div className="bfx-why-grid">
          {reasons.map((r) => (
            <div key={r.n} className="bfx-why-card">
              <div className="bfx-why-n">{r.n}</div>
              <div className="bfx-why-title">{r.title}</div>
              <p className="bfx-why-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
