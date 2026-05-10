const analyticsModules = [
  { n: "1", name: "Risk of Ruin",     desc: "Probability of account loss given your current win rate and drawdown — updated continuously." },
  { n: "2", name: "Equity Curve",     desc: "Cumulative P&L with peak-to-trough drawdown overlay across all connected accounts." },
  { n: "3", name: "Rolling Windows",  desc: "Last 10 / 20 / 50 / all-time performance with a trend flag showing if things are improving." },
  { n: "4", name: "Strategy Stats",   desc: "Win rate, expectancy, and profit factor per instrument — know exactly which pairs are earning." },
  { n: "5", name: "Session Heatmap",  desc: "Performance broken down by trading session — Sydney, Tokyo, London, New York, and overlaps." },
  { n: "6", name: "Streak Alerts",    desc: "Safe / Caution / Danger indicator on consecutive losses — before the damage compounds." },
  { n: "7", name: "Pattern Tracking", desc: "Win rates and returns tracked over time per setup type — see what is improving or fading." },
  { n: "8", name: "Monthly Score",    desc: "A single 0–100 score for month-on-month progress — one number that tells the truth." },
];

const groups = [
  {
    stage: "Start here",
    note: "Included on every plan — no broker connection required",
    features: [
      {
        name: "Signal Alerts",
        tier: "FREE",
        desc: "Real-time alerts the moment a setup is confirmed. Every signal includes entry, stop loss, two take-profit levels, and risk-to-reward — ready to act on manually or pass to auto-execution.",
        detail: null,
      },
      {
        name: "Setup Monitor",
        tier: "FREE",
        desc: "See every active setup across all 20 pairs — watching, confirmed, or invalidated. Always know where the next opportunity is building.",
        detail: null,
      },
      {
        name: "Trade Journal",
        tier: "FREE",
        desc: "Every trade logged automatically from your broker — no manual entry. Filter by instrument, session, direction, or outcome. Monthly score computed automatically.",
        detail: null,
      },
    ],
  },
  {
    stage: "When you're ready to automate",
    note: "Requires a connected MT4 or MT5 broker account",
    features: [
      {
        name: "Auto-Trade Execution",
        tier: "BASIC+",
        desc: "Connect your broker and let the engine place, manage, and close trades automatically. Stop loss moves to breakeven at Take Profit 1 — no action needed from you.",
        detail: null,
      },
      {
        name: "Deep Analytics — 8 modules",
        tier: "PRO",
        desc: "The full analytics suite — every number that actually tells you if your edge is holding.",
        detail: analyticsModules,
      },
    ],
  },
  {
    stage: "When you're running prop accounts",
    note: "Designed specifically for funded account risk rules",
    features: [
      {
        name: "Loss Guard — automatic kill switch",
        tier: "PRO",
        desc: "Set daily loss limits, consecutive stop rules, and rolling window caps. The engine pauses automatically before damage compounds — essential for prop firms like FTMO and MyFundedFX.",
        detail: null,
      },
      {
        name: "Multi-Account Execution",
        tier: "ELITE",
        desc: "Run simultaneous pipelines across up to 10 broker accounts. One signal, consistent execution across every funded account you manage.",
        detail: null,
      },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bfx-features-section">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div className="bfx-label">What's Included</div>
          <h2 className="bfx-h2">Everything that <span className="dim">matters.</span></h2>
          <p className="bfx-sub" style={{ margin: "0 auto 12px" }}>
            All plans include live signals, the setup monitor, and trade journal.
            Auto-execution requires Basic or above. Loss Guard and multi-account support are on Pro and Elite.
          </p>
        </div>

        {groups.map(g => (
          <div key={g.stage} className="bfx-feat-group">
            <div className="bfx-feat-group-header">
              <div className="bfx-feat-group-stage">{g.stage}</div>
              <div className="bfx-feat-group-note">{g.note}</div>
            </div>
            <div className="bfx-feat-flat-grid" style={{ gridTemplateColumns: `repeat(${g.features.length}, 1fr)` }}>
              {g.features.map((f) => (
                <div key={f.name} className="bfx-feat-flat-card">
                  <div className="bfx-feat-flat-top">
                    <div className="bfx-feat-name">{f.name}</div>
                    <span className="bfx-feat-tag">{f.tier}</span>
                  </div>
                  <p className="bfx-feat-desc">{f.desc}</p>

                  {f.detail && (
                    <div className="bfx-analytics-modules">
                      {(f.detail as typeof analyticsModules).map(m => (
                        <div key={m.n} className="bfx-analytics-module">
                          <div className="bfx-analytics-module-n">{m.n}</div>
                          <div>
                            <div className="bfx-analytics-module-name">{m.name}</div>
                            <div className="bfx-analytics-module-desc">{m.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .bfx-feat-group { margin-bottom: 32px; }
        .bfx-feat-group-header { display:flex;align-items:center;gap:14px;margin-bottom:8px;flex-wrap:wrap; }
        .bfx-feat-group-stage { font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:4px;border:1px solid var(--border2);color:var(--dim);background:var(--panel); }
        .bfx-feat-group-note { font-size:12px;color:var(--muted); }
        .bfx-feat-flat-grid { display:grid;gap:2px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden; }
        @media(max-width:768px){ .bfx-feat-flat-grid{grid-template-columns:1fr !important;} }
        .bfx-feat-flat-card { padding:26px 24px;background:var(--panel);border-right:1px solid var(--border);border-bottom:1px solid var(--border);transition:background .15s; }
        .bfx-feat-flat-card:hover{background:var(--surface)}
        .bfx-feat-flat-card:last-child{border-right:none}
        .bfx-feat-flat-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:10px; }
        .bfx-feat-name { font-family:var(--mono);font-size:12px;font-weight:600;color:var(--text);letter-spacing:.03em; }
        .bfx-feat-tag { font-family:var(--mono);font-size:9px;letter-spacing:.12em;padding:2px 7px;border-radius:4px;border:1px solid var(--border2);font-weight:600;white-space:nowrap;color:var(--muted);background:var(--surface); }
        .bfx-feat-desc { font-size:13px;color:var(--dim);line-height:1.65; }
        .bfx-analytics-modules { margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:2px;border:1px solid var(--border);border-radius:8px;overflow:hidden; }
        @media(max-width:560px){ .bfx-analytics-modules{grid-template-columns:1fr;} }
        .bfx-analytics-module { display:flex;gap:10px;padding:12px 14px;background:var(--surface);border-right:1px solid var(--border);border-bottom:1px solid var(--border); }
        .bfx-analytics-module:nth-child(2n){border-right:none}
        .bfx-analytics-module:nth-last-child(-n+2){border-bottom:none}
        .bfx-analytics-module-n { font-family:var(--mono);font-size:10px;font-weight:700;color:var(--muted);width:14px;flex-shrink:0;margin-top:1px; }
        .bfx-analytics-module-name { font-family:var(--mono);font-size:11px;font-weight:600;color:var(--text2);margin-bottom:3px;letter-spacing:.02em; }
        .bfx-analytics-module-desc { font-size:11px;color:var(--dim);line-height:1.55; }
      `}</style>
    </section>
  );
}
