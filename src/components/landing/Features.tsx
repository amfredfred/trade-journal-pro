const features = [
  {
    name: "Signal Alerts",
    tier: "FREE",
    desc: "Real-time alerts the moment a zone triggers. Every signal includes entry, stop loss, TP1, TP2, and R:R — ready to act on or auto-execute.",
  },
  {
    name: "Zone Watchlist",
    tier: "FREE",
    desc: "See every active zone across all pairs — watching, triggered, or invalidated. Always know where the next setup is building.",
  },
  {
    name: "Trade Journal",
    tier: "FREE",
    desc: "Every trade logged automatically from your broker. Filter by symbol, session, direction, or outcome. Full history, no manual entry.",
  },
  {
    name: "Auto-Trade Execution",
    tier: "BASIC+",
    desc: "Connect your broker and let Bobi's Quote place, manage, and close trades automatically. Breakeven at TP1 is handled for you.",
  },
  {
    name: "Advanced Analytics",
    tier: "PRO",
    desc: "Equity curve, win rate by session and hour, profit factor, and monthly scorecard. The numbers that actually tell you if your edge holds.",
  },
  {
    name: "Loss Guard",
    tier: "PRO",
    desc: "Set daily loss limits and consecutive stop rules. Auto-pause kicks in before damage compounds — essential for funded accounts.",
  },
];

const TIER_COLOR: Record<string, string> = {
  "FREE": "var(--accent)",
  "BASIC+": "var(--info)",
  "PRO": "var(--gold)",
  "ELITE": "var(--purple, #a78bfa)",
};

export default function Features() {
  return (
    <section id="features" className="bfx-features-section">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="bfx-label">What's Included</div>
          <h2 className="bfx-h2">Everything that <span className="dim">matters.</span></h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>
            The features that directly affect your trading — nothing else.
          </p>
        </div>
        <div className="bfx-feat-flat-grid">
          {features.map((f) => (
            <div key={f.name} className="bfx-feat-flat-card">
              <div className="bfx-feat-flat-top">
                <div className="bfx-feat-name">{f.name}</div>
                <span
                  className="bfx-feat-tag"
                  style={{ color: TIER_COLOR[f.tier], borderColor: `color-mix(in srgb, ${TIER_COLOR[f.tier]} 28%, transparent)`, background: `color-mix(in srgb, ${TIER_COLOR[f.tier]} 8%, transparent)` }}
                >
                  {f.tier}
                </span>
              </div>
              <p className="bfx-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bfx-feat-flat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .bfx-feat-flat-grid { grid-template-columns: 1fr; }
        }
        .bfx-feat-flat-card {
          padding: 26px 24px;
          background: var(--panel);
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          transition: background 0.15s;
        }
        .bfx-feat-flat-card:hover { background: var(--surface); }
        .bfx-feat-flat-card:nth-child(3n) { border-right: none; }
        .bfx-feat-flat-card:nth-last-child(-n+3) { border-bottom: none; }
        .bfx-feat-flat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .bfx-feat-name {
          font-family: var(--mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          letter-spacing: 0.03em;
        }
        .bfx-feat-tag {
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid;
          font-weight: 600;
        }
        .bfx-feat-desc {
          font-size: 13px;
          color: var(--dim);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
