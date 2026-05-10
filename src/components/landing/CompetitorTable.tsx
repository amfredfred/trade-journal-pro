const marketStats = [
  { n: "$7.5T",  lbl: "Daily forex volume",          sub: "largest financial market in the world" },
  { n: "10M+",   lbl: "Active MT4 / MT5 traders",    sub: "retail, self-funded & prop · growing 6% YoY" },
  { n: "$1.4B",  lbl: "Trading software TAM",         sub: "retail analytics & automation tools" },
];

const features = [
  { name: "Live Signal Engine",       bq: true,  tv: "Limited", mt: false,   other: false   },
  { name: "Auto-Trade Pipelines",     bq: true,  tv: false,     mt: "Manual", other: false  },
  { name: "Risk of Ruin Analytics",   bq: true,  tv: false,     mt: false,   other: false   },
  { name: "Session Heatmaps",         bq: true,  tv: false,     mt: false,   other: "Partial" },
  { name: "Loss Guard Circuit Breaker", bq: true, tv: false,    mt: false,   other: false   },
  { name: "All-in-one · single price", bq: true, tv: false,    mt: false,   other: false   },
];

type CellVal = boolean | string;

function Cell({ val, highlight }: { val: CellVal; highlight?: boolean }) {
  if (val === true) {
    return (
      <div className={`bfx-comp-cell bfx-comp-cell--yes${highlight ? " bfx-comp-cell--hl" : ""}`}>
        <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="2,8 5,11 12,3" />
        </svg>
        YES
      </div>
    );
  }
  if (val === false) {
    return (
      <div className="bfx-comp-cell bfx-comp-cell--no">
        <svg viewBox="0 0 14 14" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="3" x2="11" y2="11" /><line x1="11" y1="3" x2="3" y2="11" />
        </svg>
        NO
      </div>
    );
  }
  return <div className="bfx-comp-cell bfx-comp-cell--partial">{val as string}</div>;
}

export default function CompetitorTable() {
  return (
    <section className="bfx-comp" aria-labelledby="comp-heading">
      <div className="bfx-section-inner">

        {/* Market context */}
        <div className="bfx-comp-market">
          {marketStats.map(m => (
            <div key={m.lbl} className="bfx-comp-mstat">
              <div className="bfx-comp-mstat-n">{m.n}</div>
              <div className="bfx-comp-mstat-lbl">{m.lbl}</div>
              <div className="bfx-comp-mstat-sub">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Table header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="bfx-label" id="comp-heading">Why We Win</div>
          <h2 className="bfx-h2">
            One platform that does what <span className="dim">four tools can't.</span>
          </h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>
            TradingView gives you charts. MT4/MT5 gives you execution.
            Other apps give you fragments. Bobi's Quote gives you the whole stack.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bfx-comp-table" role="table" aria-label="Feature comparison">

          {/* Column headers */}
          <div className="bfx-comp-row bfx-comp-row--head" role="row">
            <div className="bfx-comp-col-feature" role="columnheader">Feature</div>
            <div className="bfx-comp-col bfx-comp-col--hl" role="columnheader">
              <div className="bfx-comp-col-name-hl">Bobi's Quote</div>
            </div>
            <div className="bfx-comp-col" role="columnheader">
              <div className="bfx-comp-col-name">TradingView</div>
            </div>
            <div className="bfx-comp-col" role="columnheader">
              <div className="bfx-comp-col-name">MT4 / MT5</div>
            </div>
            <div className="bfx-comp-col" role="columnheader">
              <div className="bfx-comp-col-name">Other Apps</div>
            </div>
          </div>

          {/* Data rows */}
          {features.map((f, i) => (
            <div
              key={f.name}
              className={`bfx-comp-row${i % 2 === 1 ? " bfx-comp-row--alt" : ""}`}
              role="row"
            >
              <div className="bfx-comp-col-feature" role="cell">
                <span className="bfx-comp-feat-name">{f.name}</span>
              </div>
              <div className="bfx-comp-col bfx-comp-col--hl" role="cell">
                <Cell val={f.bq} highlight />
              </div>
              <div className="bfx-comp-col" role="cell">
                <Cell val={f.tv} />
              </div>
              <div className="bfx-comp-col" role="cell">
                <Cell val={f.mt} />
              </div>
              <div className="bfx-comp-col" role="cell">
                <Cell val={f.other} />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .bfx-comp {
          padding: 120px 0;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }

        /* Market stats strip */
        .bfx-comp-market {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 72px;
        }
        @media (max-width: 640px) {
          .bfx-comp-market { grid-template-columns: 1fr; }
        }
        .bfx-comp-mstat {
          background: var(--panel);
          padding: 28px 28px;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .bfx-comp-mstat:last-child { border-right: none; }
        .bfx-comp-mstat-n {
          font-family: var(--display);
          font-size: 36px;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -.02em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .bfx-comp-mstat-lbl {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text2);
          letter-spacing: .05em;
          margin-bottom: 4px;
        }
        .bfx-comp-mstat-sub {
          font-size: 11px;
          color: var(--muted);
          font-family: var(--mono);
          letter-spacing: .03em;
        }

        /* Comparison table */
        .bfx-comp-table {
          max-width: 860px;
          margin: 0 auto;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .bfx-comp-row {
          display: grid;
          grid-template-columns: 1fr 140px 120px 120px 120px;
          border-bottom: 1px solid var(--border);
        }
        .bfx-comp-row:last-child { border-bottom: none; }
        .bfx-comp-row--head {
          background: var(--surface);
        }
        .bfx-comp-row--alt {
          background: color-mix(in srgb, var(--panel) 60%, var(--bg));
        }
        @media (max-width: 700px) {
          .bfx-comp-row {
            grid-template-columns: 1fr 90px 80px 80px 80px;
          }
        }
        @media (max-width: 540px) {
          .bfx-comp-row {
            grid-template-columns: 1fr 80px 72px;
          }
          .bfx-comp-col:nth-child(4),
          .bfx-comp-col:nth-child(5) { display: none; }
        }

        .bfx-comp-col-feature {
          padding: 14px 20px;
          display: flex;
          align-items: center;
          border-right: 1px solid var(--border);
        }
        .bfx-comp-col {
          padding: 12px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--border);
        }
        .bfx-comp-col:last-child { border-right: none; }
        .bfx-comp-col--hl {
          background: var(--panel);
          border-right-color: var(--border);
        }

        .bfx-comp-col-name {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: .06em;
          text-transform: uppercase;
          text-align: center;
        }
        .bfx-comp-col-name-hl {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--text2);
          letter-spacing: .06em;
          text-transform: uppercase;
          text-align: center;
        }

        .bfx-comp-feat-name {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text2);
          letter-spacing: .02em;
        }

        .bfx-comp-cell {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .08em;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .bfx-comp-cell--yes {
          color: var(--dim);
          background: transparent;
        }
        .bfx-comp-cell--hl {
          color: var(--text2);
          background: var(--surface);
          border: 1px solid var(--border2);
        }
        .bfx-comp-cell--no {
          color: var(--muted2);
        }
        .bfx-comp-cell--partial {
          color: var(--dim);
          font-size: 9px;
          background: transparent;
          border: 1px solid var(--border);
        }
      `}</style>
    </section>
  );
}
