// Free tier limitations sourced from pitch deck Slide 6
const plans = [
  {
    name: "Free", price: "0", period: "",
    tagline: "Perfect for exploring signals & getting started.",
    features: [
      "Live signal alerts (view only)",
      "Setup monitor — all 6 instruments",
      "Trade journal (manual entry)",
      "Community support"
    ],
    cta: "Start for Free",
    btnClass: "bfx-plan-btn-sec"
  },
  {
    name: "Basic", price: "14.99", period: "/ month",
    tagline: "One account. Full execution.",
    features: [
      "1 broker account (MT4 / MT5)",
      "3 signal instrument subscriptions",
      "Unlimited trade journal + screenshots",
      "Signal & setup push alerts",
      "Auto-trade integration",
      "Basic analytics dashboard",
      "Email support"
    ],
    cta: "Get started",
    btnClass: "bfx-plan-btn-sec"
  },
  {
    name: "Pro", price: "44.97", period: "/ month",
    tagline: "Full stack. Built for serious traders.",
    badge: "Most Popular",
    features: [
      "Everything in Basic, plus:",
      "3 broker accounts (MT4 / MT5)",
      "6 signal instrument subscriptions",
      "Advanced analytics suite — all 8 modules",
      "Session & hour heatmap",
      "Loss Guard circuit breaker",
      "Risk-of-Ruin calculator",
      "Income projection module"
    ],
    cta: "Start Pro",
    btnClass: "bfx-plan-btn-gold",
    featured: true
  },
  {
    name: "Elite", price: "149.90", period: "/ month",
    tagline: "Scale across every account.",
    features: [
      "Everything in Pro, plus:",
      "10 broker accounts (MT4 / MT5)",
      "All 6 instruments",
      "5 simultaneous auto-trade pipelines",
      "Multi-account analytics",
      "Funded account mode",
      "Early access to new features",
      "Dedicated support channel"
    ],
    cta: "Get Elite",
    btnClass: "bfx-plan-btn-sec"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bfx-pricing">
      <div className="bfx-section-inner">
        <div className="bfx-pricing-header">
          <div className="bfx-label">Pricing</div>
          <h2 className="bfx-h2">One Engine, <span className="dim">Four Tiers</span></h2>
          <p className="bfx-sub">
            Each paid plan covers a set number of broker accounts — one pipeline per account.
            All plans include live signals and the setup monitor.
            The free tier lets you explore before connecting a broker.
          </p>
        </div>

        <div className="bfx-pricing-model-note">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" /><line x1="8" y1="7" x2="8" y2="11" /><circle cx="8" cy="5" r=".5" fill="currentColor" />
          </svg>
          <span>Priced per broker pipeline. No hidden per-trade fees. Cancel anytime.</span>
        </div>

        <div className="bfx-pricing-grid bfx-pricing-grid--two-by-two">
          {plans.map(p => (
            <div key={p.name} className={`bfx-plan${p.featured ? " bfx-plan-featured" : ""}`}>
              {p.badge && <div className="bfx-plan-badge">{p.badge}</div>}
              <div className="bfx-plan-header">
                <h3 className="bfx-plan-name">{p.name}</h3>
                <div className="bfx-plan-price-section">
                  <div className="bfx-plan-price">
                    {p.price === "0" ? (
                      <span className="bfx-plan-price-free">Free</span>
                    ) : (
                      <>
                        <span className="bfx-plan-price-currency">$</span>
                        <span className="bfx-plan-price-amount">{p.price}</span>
                      </>
                    )}
                  </div>
                  {p.period && <div className="bfx-plan-period">{p.period}</div>}
                </div>
              </div>

              <p className="bfx-plan-tagline">{p.tagline}</p>

              <ul className="bfx-plan-features">
                {p.features.map((feature, i) => (
                  <li key={i} className="bfx-plan-feature">
                    <svg className="bfx-plan-feature-icon" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://app.bobisquote.com/login" className={`bfx-plan-btn ${p.btnClass}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="bfx-pricing-footer">
          <p className="bfx-pricing-trust">No contracts · No lock-in · No fund transfers to Bobi's Quote · Your money stays with your broker</p>
        </div>
      </div>

      <style>{`
        .bfx-pricing-model-note {
          display:flex;align-items:center;gap:8px;justify-content:center;
          font-family:var(--mono);font-size:11px;color:var(--dim);letter-spacing:.04em;
          margin-bottom:40px;
        }
        .bfx-pricing-grid--two-by-two {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        @media(max-width:768px) {
          .bfx-pricing-grid--two-by-two { grid-template-columns: 1fr !important; }
        }
        .bfx-pricing-footer {
          text-align:center;margin-top:32px;
        }
        .bfx-pricing-trust {
          font-family:var(--mono);font-size:11px;color:var(--muted);letter-spacing:.04em;
        }
      `}</style>
    </section>
  );
}
