const stats = [
  { n: "+944R",    cls: "bfx-gold",  lbl: "Total backtested"    },
  { n: "1,249",   cls: "bfx-dim",   lbl: "Trades analysed"     },
  { n: "31%",     cls: "bfx-dim",   lbl: "Win rate"            },
  { n: "1.89",    cls: "bfx-gold",  lbl: "Profit factor"       },
  { n: "+0.756R", cls: "bfx-green", lbl: "Expectancy / trade"  },
  { n: "20",      cls: "bfx-dim",   lbl: "Pairs covered"       },
];
export default function StatsBar() {
  return (
    <div className="bfx-stats-bar">
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
