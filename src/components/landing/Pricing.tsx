const plans = [
  {
    name:"Basic", price:"14.99", accts:1, period:"/ month · 1 account",
    annual:"or $9.99/mo billed annually", featured:false,
    features:[
      { t:"Unlimited trade journal + screenshots", on:true },
      { t:"1 broker account (MT4/MT5/cTrader…)",  on:true },
      { t:"3 signal pair subscriptions",           on:true },
      { t:"Basic analytics dashboard",             on:true },
      { t:"Signal & zone push alerts",             on:true },
      { t:"Auto-trade integration",                on:true },
      { t:"News sentiment feed",                   on:true },
      { t:"Advanced analytics suite",              on:false},
      { t:"Trade Ideas (AI-scored)",               on:false},
    ],
    btn:"bfx-plan-btn-sec", cta:"Get started →",
  },
  {
    name:"Pro",   price:"44.97", accts:3, period:"/ month · 3 accounts",
    annual:"or $29.97/mo billed annually · Save 33%", featured:true, badge:"MOST POPULAR",
    features:[
      { t:"Everything in Basic",                   on:true },
      { t:"3 broker accounts",                     on:true },
      { t:"10 signal pair subscriptions",          on:true },
      { t:"Advanced analytics suite",              on:true },
      { t:"Session & hour heatmap",                on:true },
      { t:"Risk-of-Ruin calculator",               on:true },
      { t:"Auto-trade (1 active pipeline)",        on:true },
      { t:"Trade Ideas (AI-scored setups)",        on:true },
      { t:"Priority support",                      on:true },
    ],
    btn:"bfx-plan-btn-gold", cta:"Start Pro →",
  },
  {
    name:"Elite", price:"149.90", accts:10, period:"/ month · 10 accounts",
    annual:"or $99.90/mo billed annually", featured:false,
    features:[
      { t:"Everything in Pro",                     on:true },
      { t:"10 broker accounts",                    on:true },
      { t:"Unlimited signal subscriptions",        on:true },
      { t:"5 auto-trade pipelines",                on:true },
      { t:"Multi-account analytics",               on:true },
      { t:"Funded / prop account mode",            on:true },
      { t:"Loss-guard circuit breakers",           on:true },
      { t:"Income projection module",              on:true },
      { t:"Dedicated support channel",             on:true },
    ],
    btn:"bfx-plan-btn-out", cta:"Get Elite →",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bfx-pricing">
      <div className="bfx-section-inner">
        <div className="bfx-label">Pricing</div>
        <h2 className="bfx-h2">One engine,<br />three tiers.</h2>
        <p className="bfx-sub">Priced per broker account — only pay for what you deploy. All plans include live signals, trade journal, and the zone map. Billing via RevenueCat · Payments via Stripe.</p>
        <div className="bfx-pricing-grid">
          {plans.map(p => (
            <div key={p.name} className={`bfx-plan${p.featured ? " bfx-plan-featured" : ""}`}>
              {p.badge && <div className="bfx-plan-badge">{p.badge}</div>}
              <div className="bfx-plan-name">{p.name}</div>
              <div className="bfx-plan-price">
                <sup>$</sup>{p.price.split(".")[0]}<span style={{ fontSize:22 }}>.{p.price.split(".")[1]}</span>
              </div>
              <div className="bfx-plan-period">{p.period}</div>
              <div className="bfx-plan-annual" style={p.featured ? { color:"var(--gold)" } : {}}>{p.annual}</div>
              <div className="bfx-plan-divider" />
              <ul className="bfx-plan-features">
                {p.features.map((f,i) => <li key={i} className={f.on ? "" : "off"}>{f.t}</li>)}
              </ul>
              <a href="https://app.bobifx.com/login" className={`bfx-plan-btn ${p.btn}`}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="bfx-pricing-note">A free tier lets you explore signals and zones before connecting a broker. Cancel anytime.</p>
      </div>
    </section>
  );
}
