export default function TrustProof() {
  return (
    <section className="bfx-trust" id="backtest" aria-labelledby="trust-heading">
      <div className="bfx-section-inner">
        <div className="bfx-trust-inner">
          <div className="bfx-label">Backtest</div>
          <h2 className="bfx-h2" id="trust-heading">
            15 months. 31,595 trades.
          </h2>
          <p className="bfx-trust-body">
            Walk-forward simulation using the same rules as the live engine — no parameter
            fitting, no cherry-picked results.
          </p>
          <a
            href="https://app.bobisquote.com/backtest"
            target="_blank"
            rel="noreferrer"
            className="bfx-trust-link"
          >
            View full backtest results ↗
          </a>
        </div>
      </div>

      <style>{`
        .bfx-trust {
          padding: 100px 24px;
          border-top: 1px solid var(--border);
        }
        .bfx-trust-inner {
          max-width: 560px;
          margin: 0 auto;
          text-align: center;
        }
        .bfx-trust-body {
          font-size: 16px;
          color: var(--dim);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .bfx-trust-link {
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: .04em;
          color: var(--text2);
          text-decoration: none;
          border-bottom: 1px solid var(--border2);
          padding-bottom: 2px;
          transition: border-color .15s, color .15s;
        }
        .bfx-trust-link:hover {
          color: var(--text);
          border-color: var(--dim);
        }
      `}</style>
    </section>
  );
}
