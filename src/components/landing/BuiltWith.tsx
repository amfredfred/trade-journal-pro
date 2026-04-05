const stack = [
  {
    name: "Supabase",
    role: "Auth & Database",
    desc: "User authentication, account storage, and real-time data sync powered by Supabase's Postgres backend.",
    color: "#3ecf8e",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.084 12.978.745 14.25 1.824 14.25h9.228l.113 8.714c.015.986 1.261 1.41 1.875.637l9.261-11.652c.68-.927.02-2.199-1.06-2.199H12.013L11.9 1.036Z"/>
      </svg>
    ),
  },
  {
    name: "RevenueCat",
    role: "Billing & Subscriptions",
    desc: "Cross-platform subscription management, entitlement tracking, and payment lifecycle handling via RevenueCat.",
    color: "#f25a2b",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    name: "MetaAPI",
    role: "Broker Connectivity",
    desc: "Real-time broker account sync, trade execution, and position management across MT4, MT5, cTrader, and Match Trader.",
    color: "#5865f2",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    role: "Payment Processing",
    desc: "Secure payment collection, invoice management, and global currency support via Stripe — integrated through RevenueCat.",
    color: "#635bff",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.92 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
  },
  {
    name: "TradingView",
    role: "Charts & Indicators",
    desc: "Embedded TradingView charts inside the platform, plus a published Pine Script indicator for manual reference during live sessions.",
    color: "#2962ff",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M4 4h16v2H4zm0 14h16v2H4zm0-7h10v2H4zm12 0l4 3-4 3V11z"/>
      </svg>
    ),
  },
  {
    name: "MT4 / MT5",
    role: "Trade Execution",
    desc: "Native support for MetaTrader 4 and MetaTrader 5 platforms — the most widely used trading terminals in the forex industry.",
    color: "#e6b800",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M2 2h9v9H2zm11 0h9v9h-9zM2 13h9v9H2zm11 0h9v9h-9z"/>
      </svg>
    ),
  },
];

export default function BuiltWith() {
  return (
    <section className="bfx-builtwith" id="built-with">
      <div className="bfx-section-inner">
        <div className="bfx-label">Infrastructure</div>
        <h2 className="bfx-h2">Built on proven<br />production infrastructure.</h2>
        <p className="bfx-sub">
          Every component of BobiFX runs on battle-tested technology — no custom billing servers,
          no proprietary broker bridges, no reinvented wheels.
        </p>
        <div className="bfx-bw-grid">
          {stack.map((s) => (
            <div key={s.name} className="bfx-bw-card">
              <div className="bfx-bw-icon" style={{ color: s.color, borderColor: `${s.color}28`, background: `${s.color}0d` }}>
                {s.logo}
              </div>
              <div className="bfx-bw-body">
                <div className="bfx-bw-name">{s.name}</div>
                <div className="bfx-bw-role" style={{ color: s.color }}>{s.role}</div>
                <p className="bfx-bw-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
