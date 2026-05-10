const stats = [
  { n: "+20,127R",  lbl: "Total return",       src: "7-year dataset, 6 instruments" },
  { n: "25,403",    lbl: "Trades analysed",    src: "Jan 2019 – May 2026" },
  { n: "42.0%",     lbl: "Win rate",           src: "honest, not cherry-picked" },
  { n: "2.37",      lbl: "Profit factor",      src: "same rules as live engine" },
  { n: "+0.79R",    lbl: "Return per trade",   src: "average across all signals" },
  { n: "6",         lbl: "Instruments",        src: "Forex, Gold, US Indices" },
];

export default function StatsBar() {
  return (
    <div className="bfx-stats-bar" aria-label="Backtest statistics">
      <div className="bfx-stats-source-label" aria-hidden="true">
        7-year simulation · 6 instruments · Same rules as the live engine
      </div>
      <div className="bfx-stats-inner">
        {stats.map(s => (
          <div key={s.lbl} className="bfx-stat-item">
            <div className="bfx-stat-n">{s.n}</div>
            <div className="bfx-stat-l">{s.lbl}</div>
            <div className="bfx-stat-src">{s.src}</div>
          </div>
        ))}
      </div>

      <style>{`
        .bfx-stats-source-label {
          text-align: center;
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: .07em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .bfx-stat-src {
          font-family: var(--mono);
          font-size: 9px;
          color: var(--muted);
          letter-spacing: .04em;
          margin-top: 3px;
        }
      `}</style>
    </div>
  );
}
