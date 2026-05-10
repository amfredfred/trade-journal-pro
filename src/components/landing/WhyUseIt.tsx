const reasons = [
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <polyline points="10,6 10,10 13,12" />
      </svg>
    ),
    title: "Never miss an entry",
    body: "Pairs are monitored 24/7. When a setup is confirmed, the signal fires immediately — no screen time required.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L3 5.5v5c0 4 3.5 6.5 7 7.5 3.5-1 7-3.5 7-7.5v-5L10 2z" />
      </svg>
    ),
    title: "Your account stays protected",
    body: "Loss Guard pauses trading automatically after consecutive losses or daily drawdown limits are hit. You define the thresholds — the engine enforces them.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,13 6,7 10,11 14,5 18,8" />
      </svg>
    ),
    title: "Know your real numbers",
    body: "Win rate, profit factor, R per signal, equity curve — all tracked automatically across every trade and every connected account.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="16" height="11" rx="2" />
        <path d="M6 5V4a2 2 0 0 1 4 0M14 5V4a2 2 0 0 0-4 0" />
      </svg>
    ),
    title: "Works with your existing broker",
    body: "Connect any MT4 or MT5 account. No fund transfers, no new accounts opened. Execute on your existing broker relationship.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="12" y="3" width="6" height="6" rx="1" />
        <rect x="2" y="11" width="6" height="6" rx="1" />
        <rect x="12" y="11" width="6" height="6" rx="1" />
      </svg>
    ),
    title: "Scale without adding work",
    body: "Run signals across multiple broker accounts simultaneously. One engine setup, consistent execution across all your accounts.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="14" rx="2" />
        <path d="M2 8h16" />
        <path d="M6 3v5M14 3v5" />
      </svg>
    ),
    title: "One platform, not three subscriptions",
    body: "Signal feed, analytics, journaling, and auto-execution are all bundled. No separate tools required, no extra subscriptions.",
  },
];

export default function WhyUseIt() {
  return (
    <section className="bfx-why" id="why">
      <div className="bfx-section-inner">
        <div className="bfx-why-header">
          <div className="bfx-label">Why Use It</div>
          <h2 className="bfx-h2">
            You focus on the edge.{" "}
            <span className="dim">Bobi's Quote handles the rest.</span>
          </h2>
          <p className="bfx-sub">
            Built for forex traders with MT4/MT5 accounts — especially funded and prop traders
            where execution speed, risk control, and accurate data matter most.
          </p>
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
