const trades = [
  { pair:"XAU/USD", dir:"LONG",  tf:"1H/5M",  r:"+3.20R", type:"win"  },
  { pair:"EUR/USD", dir:"SHORT", tf:"30M/5M", r:"−1.00R", type:"loss" },
  { pair:"USD/JPY", dir:"LONG",  tf:"1H/5M",  r:"+4.10R", type:"win"  },
  { pair:"GBP/USD", dir:"SHORT", tf:"30M/5M", r:"0.00R",  type:"be"   },
  { pair:"NZD/CAD", dir:"LONG",  tf:"1H/5M",  r:"+2.80R", type:"win"  },
];

export default function Backtest() {
  return (
    <section className="bfx-backtest" id="backtest">
      <div className="bfx-section-inner">
        <div className="bfx-label">Verified Results</div>
        <h2 className="bfx-h2">The numbers, unfiltered.</h2>
        <p className="bfx-sub">Walk-forward simulation across 11 months, 20 liquid pairs, 1,249 trades. No cherry-picked symbols — session filters match live trading discipline exactly.</p>

        <div className="bfx-bt-grid">
          {/* ── LEFT ── */}
          <div>
            <div className="bfx-bt-run">RUN: fbs-55 · 2026-04-02 18:00 UTC · HTF/LTF multi-pair · 1H/5M</div>
            <div className="bfx-bt-stats">
              {[
                { v:"+944.67R", lbl:"Total return",      color:"var(--gold)"  },
                { v:"+0.756R",  lbl:"Expectancy / trade", color:"var(--green)" },
                { v:"1.89",     lbl:"Profit factor",      color:"var(--text)"  },
                { v:"−14.93R",  lbl:"Max drawdown",       color:"var(--red)"   },
                { v:"1,249",    lbl:"Total trades",       color:"var(--text)"  },
                { v:"20 pairs · 11mo", lbl:"Scope",       color:"var(--text)"  },
              ].map(s => (
                <div key={s.lbl} className="bfx-bt-stat">
                  <div className="bfx-bt-stat-val" style={{ color: s.color }}>{s.v}</div>
                  <div className="bfx-bt-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Outcome bars */}
            <div className="bfx-outcomes">
              {[
                { lbl:"WIN",  pct:31.0, w:"31%",  color:"var(--green)", bg:"var(--green)" },
                { lbl:"BE",   pct:15.1, w:"15.1%",color:"var(--gold)",  bg:"var(--gold)"  },
                { lbl:"LOSS", pct:54.0, w:"54%",  color:"var(--red)",   bg:"var(--red)", opacity:.7 },
              ].map(o => (
                <div key={o.lbl} className="bfx-ob-row">
                  <div className="bfx-ob-label" style={{ color: o.color }}>{o.lbl}</div>
                  <div className="bfx-ob-track">
                    <div className="bfx-ob-fill" style={{ width: o.w, background: o.bg, opacity: o.opacity ?? 1 }} />
                  </div>
                  <div className="bfx-ob-pct" style={{ color: o.color }}>{o.pct}%</div>
                </div>
              ))}
            </div>

            {/* Sample trades */}
            <div className="bfx-tlog">
              <div className="bfx-tlog-head">SAMPLE TRADES</div>
              {trades.map((t, i) => (
                <div key={i} className="bfx-tlog-row">
                  <div className="bfx-tlog-pair">{t.pair}</div>
                  <span className={`bfx-sig-dir bfx-${t.dir.toLowerCase()}`} style={{ fontSize: 9, padding: "2px 6px", borderRadius: 3 }}>{t.dir}</span>
                  <span style={{ fontFamily:"var(--mono)", fontSize: 10, color:"var(--muted)", marginLeft: 4 }}>{t.tf}</span>
                  <div className={`bfx-tlog-r ${t.type}`}>{t.r}</div>
                </div>
              ))}
            </div>

            <div className="bfx-bt-cta">
              <div className="bfx-bt-cta-title">Full backtest report available</div>
              <p className="bfx-bt-cta-desc">Download the complete trade-by-trade CSV with symbol, timeframe, session, entry, SL, TP, R:R, and outcome for all 1,249 trades. Includes the full HTML analytics report.</p>
              <a href="https://results.bobifx.com/fbs-55" className="bfx-btn-ghost" style={{ fontSize: 13 }}>
                ↗ View full backtest · fbs-55
              </a>
            </div>
          </div>

          {/* ── RIGHT: Equity curve ── */}
          <div>
            <div className="bfx-equity-wrap">
              <div className="bfx-eq-head">
                <div>
                  <div style={{ fontFamily:"var(--mono)", fontSize:11, color:"var(--muted)", marginBottom:6, letterSpacing:"0.05em" }}>CUMULATIVE R — 11 MONTHS</div>
                  <div className="bfx-eq-total">+944.67R</div>
                </div>
                <div>
                  <div className="bfx-eq-period">Apr 2025 → Mar 2026</div>
                  <div className="bfx-eq-dd">Max DD: −14.93R</div>
                </div>
              </div>
              <svg viewBox="0 0 480 220" width="100%" style={{ display:"block", overflow:"visible" }}>
                <defs>
                  <linearGradient id="eqF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6b800" stopOpacity={0.22}/>
                    <stop offset="100%" stopColor="#e6b800" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="ddF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e85050" stopOpacity={0.18}/>
                    <stop offset="100%" stopColor="#e85050" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                {[180,140,100,60,20].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#24242f" strokeWidth={0.5}/>)}
                {["0R","250R","500R","750R","1000R"].map((t,i) => <text key={t} x="5" y={183 - i*40} fill="#52526a" fontSize="9" fontFamily="JetBrains Mono,monospace">{t}</text>)}
                {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map((m,i) => <text key={m} x={38+i*38} y="200" fill="#52526a" fontSize="9" fontFamily="JetBrains Mono,monospace">{m}</text>)}
                <path d="M36,178 L72,168 L108,154 L144,162 L180,148 L216,134 L252,120 L288,108 L324,116 L360,96 L396,78 L432,60 L468,36 L468,180 L36,180Z" fill="url(#eqF)"/>
                <path d="M36,178 L72,168 L108,154 L144,162 L180,148 L216,134 L252,120 L288,108 L324,116 L360,96 L396,78 L432,60 L468,36" fill="none" stroke="#e6b800" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M288,108 L324,116" stroke="#e85050" strokeWidth={2} strokeLinecap="round"/>
                <path d="M288,108 L324,132 L324,116Z" fill="url(#ddF)"/>
                <circle cx="324" cy="116" r="3.5" fill="#e85050" opacity={0.8}/>
                <text x="328" y="112" fill="#e85050" fontSize="8" fontFamily="JetBrains Mono,monospace">-14.93R</text>
                <circle cx="468" cy="36" r="5" fill="#e6b800"/>
                <circle cx="468" cy="36" r="10" fill="#e6b800" opacity={0.14}/>
              </svg>
              <div className="bfx-eq-method">
                Walk-forward simulation · Liquid majors + XAU/USD · Session-filtered (London + NY) · Min 1.5 R:R · Max 9.0 R:R · Breakeven management active · Pivot-based BOS detection · 1H/5M timeframe pair
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
