const reasons = [
  {
    icon: "⚡",
    title: "Never miss an entry",
    body: "Zones are monitored 24/7. When price taps a level, the signal fires immediately — no screen time required.",
  },
  {
    icon: "🛡️",
    title: "Your account stays protected",
    body: "Automatic loss guard pauses trading after consecutive losses or daily drawdown limits. You define the rules, it enforces them.",
  },
  {
    icon: "📈",
    title: "Know your real numbers",
    body: "Win rate, profit factor, RR per signal, equity curve — all tracked automatically across every trade and every account.",
  },
  {
    icon: "🔗",
    title: "Works with your existing broker",
    body: "Connect any MT4 or MT5 account. No fund transfers, no new accounts. Execute on your existing broker relationship.",
  },
  {
    icon: "🔁",
    title: "Scale without adding work",
    body: "Run signals across multiple broker accounts simultaneously. One setup, consistent execution across all your prop accounts.",
  },
  {
    icon: "📦",
    title: "One platform, not three subscriptions",
    body: "Signal feed, analytics, journaling, and auto-execution are all bundled. No separate tools, no extra subscriptions.",
  },
];

export default function WhyUseIt() {
  return (
    <section className="bfx-why" id="why">
      <div className="bfx-section-inner">
        <div className="bfx-why-header">
          <div className="bfx-label">Built for Serious Traders</div>
          <h2 className="bfx-h2">You focus on the edge. <span className="dim">Bobi's Quote handles the rest.</span></h2>
          <p className="bfx-sub">Built for serious, funded traders and prop firm accounts who can't afford slow execution, missed zones, or poor risk management.</p>
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
