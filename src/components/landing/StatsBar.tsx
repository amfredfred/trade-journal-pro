const stats = [
  { n: "+1,111R",  cls: "bfx-gold",  lbl: "Total return (backtest)"   },
  { n: "1,484",    cls: "bfx-dim",   lbl: "Trades analysed"           },
  { n: "41.5%",    cls: "bfx-dim",   lbl: "Win rate"                  },
  { n: "2.84",     cls: "bfx-gold",  lbl: "Profit factor"             },
  { n: "+0.749R",  cls: "bfx-green", lbl: "Expectancy / trade"        },
  { n: "10",       cls: "bfx-dim",   lbl: "Pairs covered"             },
];

export default function StatsBar() {
  return (
    <div className="bfx-stats-bar" aria-label="Key backtest statistics">
      <div className="bfx-stats-inner">
        {stats.map(s => (
          <div key={s.lbl} className="bfx-stat-item">
            <div className={`bfx-stat-n ${s.cls}`}>{s.n}</div>
            <div className="bfx-stat-l">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
