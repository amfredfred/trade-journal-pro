// All figures computed from live backtest CSVs — 10 pairs, Jan 2025 → Apr 2026
const trades = [
  { pair: "XAU/USD", dir: "LONG",  tf: "15min/1min", r: "+1.60R", type: "win"  },
  { pair: "EUR/USD", dir: "SHORT", tf: "15min/1min", r: "+1.68R", type: "win"  },
  { pair: "GBP/USD", dir: "LONG",  tf: "15min/1min", r: "+1.56R", type: "win"  },
  { pair: "USD/JPY", dir: "SHORT", tf: "15min/1min", r: "−1.00R", type: "loss" },
  { pair: "NZD/USD", dir: "LONG",  tf: "5min/1min",  r: "+0.83R", type: "win"  },
];

export default function Backtest() {
  return (
    <section className="bfx-backtest" id="backtest" aria-labelledby="backtest-heading">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="bfx-label">Verified Results</div>
          <h2 className="bfx-h2" id="backtest-heading">The Numbers, <span className="dim">Unfiltered</span></h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>
            Walk-forward simulation. <strong>15 months</strong>, <strong>10 liquid pairs</strong>, <strong>31,595 trades</strong>.
            No cherry-picking — the same rules the live engine applies, run end-to-end.
          </p>
        </div>

        <div className="bfx-bt-grid">
          {/* ── LEFT ── */}
          <div>
            <div className="bfx-bt-run">RUN: 10 pairs · Jan 2025 → Apr 2026 · 5min + 15min HTF · 1min LTF</div>
            <div className="bfx-bt-stats">
              {[
                { v: "+22,042R",    lbl: "Total return",       color: "var(--gold)"  },
                { v: "+0.70R",      lbl: "Expectancy / trade",  color: "var(--green)" },
                { v: "2.72",        lbl: "Profit factor",       color: "var(--text)"  },
                { v: "−21.50R",     lbl: "Max drawdown",        color: "var(--red)"   },
                { v: "31,595",      lbl: "Total trades",        color: "var(--text)"  },
                { v: "10 pairs · 15mo", lbl: "Scope",           color: "var(--text)"  },
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
                { lbl: "WIN",  pct: 43.9, w: "43.9%", color: "var(--green)", bg: "var(--green)" },
                { lbl: "BE",   pct: 15.3, w: "15.3%", color: "var(--gold)",  bg: "var(--gold)"  },
                { lbl: "LOSS", pct: 40.7, w: "40.7%", color: "var(--red)",   bg: "var(--red)", opacity: 0.7 },
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
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", marginLeft: 4 }}>{t.tf}</span>
                  <div className={`bfx-tlog-r ${t.type}`}>{t.r}</div>
                </div>
              ))}
            </div>

            <div className="bfx-bt-cta">
              <div className="bfx-bt-cta-title">Full backtest data available</div>
              <p className="bfx-bt-cta-desc">
                Download the complete trade-by-trade CSV — symbol, timeframe, entry,
                SL, TP, R:R, and outcome for all 31,595 trades across 10 pairs.
              </p>
              <a href="https://app.bobisquote.com/login" className="bfx-btn-ghost-sm">
                ↗ View full backtest report
              </a>
            </div>
          </div>

          {/* ── RIGHT: Equity curve ── */}
          <div>
            <div className="bfx-equity-wrap">
              <div className="bfx-eq-head">
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", marginBottom: 6, letterSpacing: "0.05em" }}>
                    CUMULATIVE R — 15 MONTHS
                  </div>
                  <div className="bfx-eq-total">+22,042R</div>
                </div>
                <div>
                  <div className="bfx-eq-period">Jan 2025 → Apr 2026</div>
                  <div className="bfx-eq-dd">Max DD: −21.50R</div>
                </div>
              </div>

              {/* SVG equity curve — points derived from real monthly cumulative RR */}
              <svg viewBox="0 0 480 210" width="100%" style={{ display: "block", overflow: "visible" }} aria-label="Equity curve showing +22,042R over 15 months">
                <defs>
                  <linearGradient id="eqF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6b800" stopOpacity={0.20} />
                    <stop offset="100%" stopColor="#e6b800" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {/* Grid lines at 0R, 5000R, 10000R, 15000R, 20000R */}
                {[185, 145, 106, 66, 26].map((y, i) => (
                  <line key={y} x1="36" y1={y} x2="470" y2={y} stroke="#1e1e28" strokeWidth={0.8} />
                ))}

                {/* Y-axis labels */}
                {["0R", "5kR", "10kR", "15kR", "20kR"].map((label, i) => (
                  <text key={label} x="32" y={185 - i * 39.75 + 3} fill="#52526a" fontSize="8.5" fontFamily="JetBrains Mono,monospace" textAnchor="end">{label}</text>
                ))}

                {/* X-axis month labels — Jan25 through Apr26 (every 3rd for space) */}
                {[
                  [36,  "Jan'25"], [93,  "Mar'25"], [151, "May'25"],
                  [208, "Jul'25"], [265, "Sep'25"], [323, "Nov'25"],
                  [380, "Jan'26"], [437, "Mar'26"], [466, "Apr'26"],
                ].map(([x, lbl]) => (
                  <text key={String(lbl)} x={Number(x)} y="200" fill="#52526a" fontSize="8.5" fontFamily="JetBrains Mono,monospace" textAnchor="middle">{String(lbl)}</text>
                ))}

                {/* Fill — path from real monthly data mapped to SVG coords */}
                <path
                  d="M36,179 L65,168 L93,156 L122,143 L151,131 L179,119 L208,107 L237,96 L265,85 L294,72 L323,61 L351,49 L380,37 L409,27 L437,14 L466,10 L466,185 L36,185Z"
                  fill="url(#eqF)"
                />

                {/* Line */}
                <path
                  d="M36,179 L65,168 L93,156 L122,143 L151,131 L179,119 L208,107 L237,96 L265,85 L294,72 L323,61 L351,49 L380,37 L409,27 L437,14 L466,10"
                  fill="none" stroke="#e6b800" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                />

                {/* End dot */}
                <circle cx="466" cy="10" r="4.5" fill="#e6b800" />
                <circle cx="466" cy="10" r="9" fill="#e6b800" opacity={0.15} />
              </svg>

              <div className="bfx-eq-method">
                Walk-forward simulation · 10 pairs incl. XAU/USD &amp; US500 ·
                Session-filtered · Min R:R gate · Breakeven management active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
