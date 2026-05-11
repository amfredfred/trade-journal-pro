// Free tier limitations sourced from pitch deck Slide 6
const plans = [
  {
    name: "Free", price: "0", accounts: 0, period: "",
    annual: null, annualSave: null, featured: false, badge: null,
    tagline: "Explore before you connect",
    features: [
      { t: "Live signal alerts (view only)", on: true },
      { t: "Setup monitor — all 6 instruments", on: true },
      { t: "Trade journal (manual entry)", on: true },
      { t: "Broker account connection", on: false },
      { t: "Auto-trade pipelines", on: false },
      { t: "Advanced analytics suite", on: false },
      { t: "Loss Guard circuit breaker", on: false },
    ],
    btn: "bfx-plan-btn-sec", cta: "Start free →",
  },
  {
    name: "Basic", price: "14.99", accounts: 1, period: "/ month",
    annual: "$9.99 / mo", annualSave: "Save 33% annually", featured: false, badge: null,
    tagline: "One account. Full execution.",
    features: [
      { t: "1 broker account (MT4 / MT5)", on: true },
      { t: "3 signal instrument subscriptions", on: true },
      { t: "Unlimited trade journal + screenshots", on: true },
      { t: "Signal & setup push alerts", on: true },
      { t: "Auto-trade integration", on: true },
      { t: "Basic analytics dashboard", on: true },
      { t: "Advanced analytics suite", on: false },
      { t: "Loss Guard circuit breaker", on: false },
    ],
    btn: "bfx-plan-btn-sec", cta: "Get started →",
  },
  {
    name: "Pro", price: "44.97", accounts: 3, period: "/ month",
    annual: "$29.97 / mo", annualSave: "Save 33% annually", featured: true, badge: "MOST POPULAR",
    tagline: "Full stack. Built for serious traders.",
    features: [
      { t: "3 broker accounts (MT4 / MT5)", on: true },
      { t: "6 signal instrument subscriptions", on: true },
      { t: "Everything in Basic", on: true },
      { t: "Advanced analytics suite — all 8 modules", on: true },
      { t: "Session & hour heatmap", on: true },
      { t: "Loss Guard circuit breaker", on: true },
      { t: "Risk-of-Ruin calculator", on: true },
      { t: "Income projection module", on: true },
    ],
    btn: "bfx-plan-btn-gold", cta: "Start Pro →",
  },
  {
    name: "Elite", price: "149.90", accounts: 10, period: "/ month",
    annual: "$99.90 / mo", annualSave: "Save 33% annually", featured: false, badge: null,
    tagline: "Scale across every funded account.",
    features: [
      { t: "10 broker accounts (MT4 / MT5)", on: true },
      { t: "All 6 instruments", on: true },
      { t: "5 simultaneous auto-trade pipelines", on: true },
      { t: "Multi-account analytics", on: true },
      { t: "Funded / prop account mode", on: true },
      { t: "Everything in Pro", on: true },
      { t: "Early access to new features", on: true },
      { t: "Dedicated support channel", on: true },
    ],
    btn: "bfx-plan-btn-out", cta: "Get Elite →",
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

        <div className="bfx-pricing-grid bfx-pricing-grid--four">
          {plans.map(p => (
            <div key={p.name} className={`bfx-plan${p.featured ? " bfx-plan-featured" : ""}`}>
              {p.badge && <div className="bfx-plan-badge">{p.badge}</div>}
              <div className="bfx-plan-name">{p.name}</div>

              {p.accounts > 0 && (
                <div className="bfx-plan-accounts">
                  {p.accounts} broker account{p.accounts > 1 ? "s" : ""}
                </div>
              )}

              <div className="bfx-plan-price">
                {p.price === "0" ? (
                  <span style={{ fontSize: 36, fontWeight: 800 }}>Free</span>
                ) : (
                  <><sup>$</sup>{p.price.split(".")[0]}<span style={{ fontSize: 20, fontWeight: 600 }}>.{p.price.split(".")[1]}</span></>
                )}
              </div>
              {p.period && <div className="bfx-plan-period">{p.period}</div>}
              {p.tagline && <div className="bfx-plan-tagline">{p.tagline}</div>}

              {p.annual && (
                <div className="bfx-plan-annual-block">
                  <div className="bfx-plan-annual-price">{p.annual} billed annually</div>
                  <div className="bfx-plan-annual-save">{p.annualSave}</div>
                </div>
              )}

              <div className="bfx-plan-divider" />
              <ul className="bfx-plan-features">
                {p.features.map((f, i) => <li key={i} className={f.on ? "" : "off"}>{f.t}</li>)}
              </ul>
              <a href="https://app.bobisquote.com/login" className={`bfx-plan-btn ${p.btn}`}>{p.cta}</a>
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
        .bfx-pricing-grid--four {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }
        @media(max-width:1024px) {
          .bfx-pricing-grid--four { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media(max-width:560px) {
          .bfx-pricing-grid--four { grid-template-columns: 1fr !important; }
        }
        .bfx-plan-accounts {
          font-family:var(--mono);font-size:11px;font-weight:600;
          color:var(--dim);letter-spacing:.07em;text-transform:uppercase;margin-bottom:10px;
        }
        .bfx-plan-tagline {
          font-size:12px;color:var(--muted);margin-bottom:8px;
          font-family:var(--mono);letter-spacing:.03em;
        }
        .bfx-plan-annual-block {
          border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin:8px 0 0;background:var(--surface);
        }
        .bfx-plan-annual-price {
          font-family:var(--mono);font-size:12px;color:var(--text2);font-weight:600;
        }
        .bfx-plan-annual-save {
          font-size:11px;color:var(--dim);font-family:var(--mono);margin-top:1px;
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
