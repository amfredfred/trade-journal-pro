export default function WhoItsFor() {
  return (
    <section className="bfx-who" aria-labelledby="who-heading">
      <div className="bfx-section-inner">
        <div className="bfx-who-inner">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="bfx-label" id="who-heading">Who This Is For</div>
            <h2 className="bfx-h2">
              Built for a specific type of trader.
            </h2>
            <p className="bfx-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
              Honest scoping saves everyone time. Here's who gets the most out of Bobi's Quote —
              and who it's not designed for.
            </p>
          </div>

          <div className="bfx-who-split">
            <div className="bfx-who-block bfx-who-block--yes">
              <div className="bfx-who-block-label">
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="2,9 6,13 14,3" />
                </svg>
                Built for
              </div>
              <ul className="bfx-who-list">
                <li>Forex traders with MT4 or MT5 accounts who want systematic execution without writing an EA</li>
                <li>Funded / prop traders where drawdown rules are strict and manual mistakes are costly</li>
                <li>Traders who want a complete trade plan — entry, SL, TP1, TP2, R:R — generated automatically</li>
                <li>Traders running multiple broker accounts who need consistent execution across all of them</li>
                <li>Anyone who wants to trade with a technical, rules-based approach but without screen time</li>
              </ul>
            </div>

            <div className="bfx-who-block bfx-who-block--no">
              <div className="bfx-who-block-label">
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </svg>
                Not for
              </div>
              <ul className="bfx-who-list">
                <li>Crypto, stock, or futures traders — the engine covers forex and gold only</li>
                <li>Anyone looking for copy-trading or social signal groups — this is a standalone engine</li>
                <li>Traders who want to review and manually approve every signal before execution</li>
                <li>Anyone requiring guaranteed returns — trading involves risk and the engine cannot eliminate it</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bfx-who { padding: 80px 24px; border-top: 1px solid var(--border); }
        .bfx-who-inner { max-width: 860px; margin: 0 auto; }
        .bfx-who-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .bfx-who-split { grid-template-columns: 1fr; }
        }
        .bfx-who-block {
          background: var(--panel);
          padding: 28px 28px;
          border-right: 1px solid var(--border);
        }
        .bfx-who-block:last-child { border-right: none; }
        .bfx-who-block-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .bfx-who-block--yes .bfx-who-block-label { color: var(--text2); }
        .bfx-who-block--no  .bfx-who-block-label { color: var(--dim); }
        .bfx-who-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .bfx-who-list li {
          font-size: 14px;
          color: var(--dim);
          line-height: 1.6;
          padding-left: 14px;
          position: relative;
        }
        .bfx-who-block--yes .bfx-who-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--dim);
          font-family: var(--mono);
          font-size: 11px;
        }
        .bfx-who-block--no .bfx-who-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 11px;
        }
      `}</style>
    </section>
  );
}
