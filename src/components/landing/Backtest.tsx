const trades = [
  { pair:"GBP/USD", dir:"LONG",  tf:"30M/5M", r:"+1.86R", type:"win"  },
  { pair:"USD/CAD", dir:"LONG",  tf:"30M/5M", r:"+2.50R", type:"win"  },
  { pair:"EUR/USD", dir:"SHORT", tf:"30M/5M", r:"+2.50R", type:"win"  },
  { pair:"NZD/USD", dir:"SHORT", tf:"30M/5M", r:"−1.00R", type:"loss" },
  { pair:"NZD/USD", dir:"LONG",  tf:"1H/5M",  r:"+1.25R", type:"be"   },
];

export default function Backtest() {
  return (
    <section className="bfx-backtest" id="backtest">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="bfx-label">Verified Results</div>
          <h2 className="bfx-h2">The Numbers, <span className="dim">Unfiltered</span></h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>Walk-forward simulation. 10 months, 10 liquid pairs, 1,484 trades. No cherry-picking — session filters match live trading discipline exactly.</p>
        </div>

        <div className="bfx-bt-grid">
          {/* ── LEFT ── */}
          <div>
            <div className="bfx-bt-run">RUN: fbs-ceil · 2026-04-05 12:48 UTC · HTF/LTF multi-pair · 30M/5M + 1H/5M</div>
            <div className="bfx-bt-stats">
              {[
                { v:"+1,111.45R", lbl:"Total return",       color:"var(--gold)"  },
                { v:"+0.749R",    lbl:"Expectancy / trade",  color:"var(--green)" },
                { v:"2.84",       lbl:"Profit factor",       color:"var(--text)"  },
                { v:"−7.75R",     lbl:"Max drawdown",        color:"var(--red)"   },
                { v:"1,484",      lbl:"Total trades",        color:"var(--text)"  },
                { v:"10 pairs · 10mo", lbl:"Scope",          color:"var(--text)"  },
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
                { lbl:"WIN",  pct:41.5, w:"41.5%", color:"var(--green)", bg:"var(--green)" },
                { lbl:"BE",   pct:17.5, w:"17.5%", color:"var(--gold)",  bg:"var(--gold)"  },
                { lbl:"LOSS", pct:40.8, w:"40.8%", color:"var(--red)",   bg:"var(--red)",  opacity:.7 },
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
              <p className="bfx-bt-cta-desc">Download the complete trade-by-trade CSV with symbol, timeframe, session, entry, SL, TP, R:R, and outcome for all 1,484 trades. Includes the full HTML analytics report.</p>
              <a href="http://bbfx.netlify.app" className="bfx-btn-ghost-sm">
                ↗ View full backtest · fbs-ceil
              </a>
            </div>
          </div>

          {/* ── RIGHT: Equity curve ── */}
          <div>
            <div className="bfx-equity-wrap">
              <div className="bfx-eq-head">
                <div>
                  <div style={{ fontFamily:"var(--mono)", fontSize:11, color:"var(--muted)", marginBottom:6, letterSpacing:"0.05em" }}>CUMULATIVE R — 10 MONTHS</div>
                  <div className="bfx-eq-total">+1,111.45R</div>
                </div>
                <div>
                  <div className="bfx-eq-period">Jun 2025 → Apr 2026</div>
                  <div className="bfx-eq-dd">Max DD: −7.75R</div>
                </div>
              </div>
              {/*
                Monthly cumulative R (mapped to SVG y-axis 180→20, x-axis 36→468):
                Jun→14R, Jul→65R, Aug→163R, Sep→240R, Oct→305R,
                Nov→411R, Dec→588R, Jan→751R, Feb→934R, Mar→1098R, Apr→1111R
                Scale: 1111R maps to 160px height → 1R ≈ 0.144px
                y = 180 - (cumR * 160/1111)
              */}
              <svg viewBox="0 0 480 220" width="100%" style={{ display:"block", overflow:"visible" }}>
                <defs>
                  <linearGradient id="eqF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6b800" stopOpacity={0.22}/>
                    <stop offset="100%" stopColor="#e6b800" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                {[180,140,100,60,20].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#24242f" strokeWidth={0.5}/>)}
                {["0R","250R","500R","750R","1000R"].map((t,i) => <text key={t} x="5" y={183 - i*40} fill="#52526a" fontSize="9" fontFamily="JetBrains Mono,monospace">{t}</text>)}
                {["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr"].map((m,i) => (
                  <text key={m} x={36+i*43} y="200" fill="#52526a" fontSize="9" fontFamily="JetBrains Mono,monospace">{m}</text>
                ))}
                {/* Points: cum/1111*160, subtracted from 180 */}
                {/* Jun=14→178, Jul=65→171, Aug=163→157, Sep=240→145, Oct=305→136, Nov=411→121, Dec=588→96, Jan=751→72, Feb=934→46, Mar=1098→21, Apr=1111→20 */}
                <path
                  d="M36,178 L79,171 L122,157 L165,145 L208,136 L251,121 L294,96 L337,72 L380,46 L423,21 L466,20 L466,180 L36,180Z"
                  fill="url(#eqF)"
                />
                <path
                  d="M36,178 L79,171 L122,157 L165,145 L208,136 L251,121 L294,96 L337,72 L380,46 L423,21 L466,20"
                  fill="none" stroke="#e6b800" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
                />
                <circle cx="466" cy="20" r="5" fill="#e6b800"/>
                <circle cx="466" cy="20" r="10" fill="#e6b800" opacity={0.14}/>
              </svg>
              <div className="bfx-eq-method">
                Walk-forward simulation · 10 liquid pairs incl. XAU/USD · Session-filtered (Tokyo + London + NY) · Min 1.5 R:R · Max 2.5 R:R · Breakeven management active · Pivot-based BOS detection · 30M/5M + 1H/5M timeframe pairs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
