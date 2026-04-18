import React from "react";

const stack = [
  {
    name: "Supabase", role: "Auth & Database", color: "#3ecf8e",
    desc: "User authentication, account storage, and real-time data sync via Supabase Postgres.",
    logo: (
      <svg viewBox="0 0 109 113" fill="none" height="28">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284Z" fill="url(#sb1)"/>
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284Z" fill="url(#sb2)" fillOpacity=".2"/>
        <path d="M45.317 2.071C48.177-1.53 53.974.443 54.044 5.041l.505 67.251H9.854c-8.19 0-12.759-9.46-7.665-15.874L45.317 2.071Z" fill="#3ECF8E"/>
        <defs>
          <linearGradient id="sb1" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient>
          <linearGradient id="sb2" x1="36.156" y1="30.578" x2="54.484" y2="65.08" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stopOpacity="0"/></linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "RevenueCat", role: "Billing & Subscriptions", color: "#f25a2b",
    desc: "Cross-platform subscription management, entitlement tracking, and payment lifecycle.",
    logo: (
      <svg viewBox="0 0 32 32" fill="none" height="28">
        <circle cx="16" cy="16" r="16" fill="#F25A2B"/>
        <path d="M10 8h7.5a5.5 5.5 0 0 1 0 11H14v5h-4V8Zm4 4v3h3.5a1.5 1.5 0 0 0 0-3H14Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "MetaAPI", role: "Broker Connectivity", color: "#5b9cf6",
    desc: "Real-time sync, trade execution, and position management across MT4 and MT5.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="26" style={{ color: "#5b9cf6" }}>
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
  },
  {
    name: "Stripe", role: "Payment Processing", color: "#635bff",
    desc: "Secure payment collection and invoice management — integrated through RevenueCat.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="26" style={{ color: "#635bff" }}>
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.92 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
  },
  {
    name: "TradingView", role: "Charts & Indicators", color: "#2962ff",
    desc: "Embedded charts inside the platform plus a published Pine Script indicator for manual reference.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="26" style={{ color: "#2962ff" }}>
        <path d="M4 4h16v2H4zm0 14h16v2H4zm0-7h10v2H4zm12 0l4 3-4 3V11z"/>
      </svg>
    ),
  },
  {
    name: "MT4 / MT5", role: "Trade Execution", color: "#fbbf24",
    desc: "Native support for MetaTrader 4 and MetaTrader 5 — the most widely used trading terminals in retail forex.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="26" style={{ color: "#fbbf24" }}>
        <path d="M2 2h9v9H2zm11 0h9v9h-9zM2 13h9v9H2zm11 0h9v9h-9z"/>
      </svg>
    ),
  },
];

export default function BuiltWith() {
  return (
    <section className="bfx-builtwith" id="built-with">
      <div className="bfx-section-inner">
        <div className="bfx-builtwith-header">
          <div className="bfx-label">Infrastructure</div>
          <h2 className="bfx-h2">Built on <span className="dim">Proven Stack</span></h2>
          <p className="bfx-sub">No custom billing servers, no proprietary broker bridges. Production infrastructure, battle-tested.</p>
        </div>
        <div className="bfx-bw-grid">
          {stack.map((s) => (
            <div key={s.name} className="bfx-bw-card">
              <div className="bfx-bw-icon" style={{ color: s.color, borderColor: `color-mix(in srgb, ${s.color} 28%, var(--border))`, background: `color-mix(in srgb, ${s.color} 8%, var(--panel))` }}>
                {s.logo}
              </div>
              <div className="bfx-bw-name">{s.name}</div>
              <div className="bfx-bw-role" style={{ color: s.color }}>{s.role}</div>
              <p className="bfx-bw-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
