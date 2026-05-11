export default function WhatItIs() {
  return (
    <section className="bfx-whatitis" id="what-it-is" aria-labelledby="whatitis-heading">
      <div className="bfx-section-inner">
        <div className="bfx-whatitis-inner">
          <div className="bfx-label" id="whatitis-heading">What It Is</div>
          <h2 className="bfx-h2 bfx-whatitis-h2">
            One engine. The full trade lifecycle.
          </h2>
          <p className="bfx-whatitis-body">
            Bobi's Quote monitors 6 instruments 24/7, identifies trade setups,
            and places orders directly on your broker when a signal is confirmed —
            no Telegram group, no copy-trading, no manual action required.
          </p>
          <p className="bfx-whatitis-sub">
            Every signal comes with a complete trade plan: entry price, stop loss,
            two take-profit levels, and a risk-to-reward ratio. Position management,
            journaling, and analytics happen automatically from that point on.
          </p>

          <div className="bfx-whatitis-pillars">
            {[
              { label: "Signal Engine", desc: "Monitors 6 instruments · Generates complete trade plans" },
              { label: "Risk Engine", desc: "Multi-rule gate before any order is placed" },
              { label: "Execution Engine", desc: "Places orders on your MT4 / MT5 broker account" },
              { label: "Position Manager", desc: "Moves stop to breakeven at TP1 · Closes at TP2 or SL" },
              { label: "Loss Guard", desc: "Automatic pause for prop &amp; funded accounts" },
              { label: "Deep Analytics", desc: "Equity curve · Win rate · Profit factor · Monthly score" },
            ].map(p => (
              <div key={p.label} className="bfx-whatitis-pillar">
                <div className="bfx-whatitis-pillar-label">{p.label}</div>
                <div className="bfx-whatitis-pillar-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bfx-whatitis {
          padding: 80px 24px;
          border-top: 1px solid var(--border);
        }
        .bfx-whatitis-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }
        .bfx-whatitis-h2 { margin-bottom: 20px; }
        .bfx-whatitis-body {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text2);
          margin-bottom: 16px;
        }
        .bfx-whatitis-sub {
          font-size: 14px;
          line-height: 1.7;
          color: var(--dim);
          margin-bottom: 52px;
        }
        .bfx-whatitis-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          text-align: left;
        }
        @media (max-width: 600px) {
          .bfx-whatitis-pillars { grid-template-columns: 1fr; }
        }
        .bfx-whatitis-pillar {
          padding: 18px 20px;
          background: var(--panel);
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          transition: background .15s;
        }
        .bfx-whatitis-pillar:hover { background: var(--surface); }
        .bfx-whatitis-pillar:nth-child(3n) { border-right: none; }
        .bfx-whatitis-pillar:nth-last-child(-n+3) { border-bottom: none; }
        .bfx-whatitis-pillar-label {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text);
          letter-spacing: .05em;
          margin-bottom: 5px;
        }
        .bfx-whatitis-pillar-desc {
          font-size: 12px;
          color: var(--dim);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
