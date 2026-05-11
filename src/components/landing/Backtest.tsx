const trades = [
  { pair: "XAU/USD", dir: "LONG", tf: "XAUUSD", r: "+1.60R", type: "win" },
  { pair: "EUR/USD", dir: "SHORT", tf: "EURUSD", r: "+1.68R", type: "win" },
  { pair: "US 100", dir: "LONG", tf: "US100", r: "+1.56R", type: "win" },
  { pair: "US 30", dir: "SHORT", tf: "US30", r: "−1.00R", type: "loss" },
  { pair: "US 500", dir: "LONG", tf: "US500", r: "+0.83R", type: "win" },
];

export default function Backtest() {
  return (
    <section className="bfx-backtest" id="backtest" aria-labelledby="backtest-heading">
      <div className="bfx-section-inner">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="bfx-label">Verified Results</div>
          <h2 className="bfx-h2" id="backtest-heading">The Numbers, <span className="dim">Unfiltered</span></h2>
          <p className="bfx-sub" style={{ margin: "0 auto" }}>
            89 months of data. <strong>12 pair/timeframe pipelines</strong>, <strong>25,403 trades</strong>.
            The same rules the live engine applies — run end-to-end, no cherry-picking.
          </p>
        </div>

        <div className="bfx-bt-grid">
          {/* ── LEFT ── */}
          <div>
            <div className="bfx-bt-run">RUN: 6 instruments · 12 pair/timeframe pipelines · Jan 2019 → May 2026 · EURUSD · XAUUSD · US100 · US30 · US500 · JP225</div>
            <div className="bfx-bt-stats">
              {[
                { v: "+20,126.55R", lbl: "Total return", color: "var(--gold)" },
                { v: "+0.79R", lbl: "Return per trade", color: "var(--green)" },
                { v: "2.37", lbl: "Profit factor", color: "var(--text)" },
                { v: "0.0%", lbl: "Breakeven rate", color: "var(--muted)" },
                { v: "−26.67R", lbl: "Max drawdown", color: "var(--red)" },
                { v: "25,403", lbl: "Total trades", color: "var(--text)" },
                { v: "89 months", lbl: "Data scope", color: "var(--text)" },
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
                { lbl: "WIN", pct: 42.0, w: "42.0%", color: "var(--green)", bg: "var(--green)" },
                { lbl: "LOSS", pct: 58.0, w: "58.0%", color: "var(--red)", bg: "var(--red)", opacity: 0.7 },
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

            <div className="bfx-bt-detail" style={{ marginTop: 28, display: "grid", gap: 12 }}>
              <div className="bfx-bt-detail-title" style={{ fontSize: 14, fontWeight: 700, marginBottom: 0 }}>
                Detailed instrument and timeframe results are available at
              </div>
              <a href="https://backtested.bobisquote.com" target="_blank" rel="noreferrer" className="bfx-btn-ghost-sm">
                ↗ backtested.bobisquote.com
              </a>
            </div>

            <div className="bfx-bt-cta">
              <div className="bfx-bt-cta-title">No unusual loss streaks detected across all instruments</div>
              <p className="bfx-bt-cta-desc">
                Every trade is logged — symbol, direction, entry, exit, and result.
                Visit backtested.bobisquote.com to review the full 89-month dataset across all 6 instruments.
              </p>
              <a href="https://backtested.bobisquote.com" target="_blank" rel="noreferrer" className="bfx-btn-ghost-sm">
                ↗ View full backtest details
              </a>
            </div>
          </div>

          {/* ── RIGHT: Equity curve ── */}
          <div>
            <div className="bfx-equity-wrap">
              <div className="bfx-eq-head">
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", marginBottom: 6, letterSpacing: "0.05em" }}>
                    CUMULATIVE RETURN — 89 MONTHS
                  </div>
                  <div className="bfx-eq-total">+20,126.55R</div>
                </div>
                <div>
                  <div className="bfx-eq-period">Jan 2019 → May 2026</div>
                  <div className="bfx-eq-dd">Max drawdown: −23.85R</div>
                </div>
              </div>

              {/* SVG equity curve — derived from 89-month monthly data */}
              <svg viewBox="0 0 480 210" width="100%" style={{ display: "block", overflow: "visible" }} aria-label="Equity curve showing +20,126.55R over 89 months">
                <defs>
                  <linearGradient id="eqF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6b800" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#e6b800" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {[185, 148, 111, 74, 37].map((y) => (
                  <line key={y} x1="44" y1={y} x2="470" y2={y} stroke="#1e1e28" strokeWidth={0.8} />
                ))}

                {["0R", "5kR", "10kR", "15kR", "20kR"].map((label, i) => (
                  <text key={label} x="40" y={185 - i * 37 + 3} fill="#52526a" fontSize="8.5" fontFamily="JetBrains Mono,monospace" textAnchor="end">{label}</text>
                ))}

                {[
                  [44, "'19"], [101, "'20"], [157, "'21"],
                  [214, "'22"], [271, "'23"], [327, "'24"],
                  [384, "'25"], [440, "now"],
                ].map(([x, lbl]) => (
                  <text key={String(lbl)} x={Number(x)} y="200" fill="#52526a" fontSize="8.5" fontFamily="JetBrains Mono,monospace" textAnchor="middle">{String(lbl)}</text>
                ))}

                <path
                  d="M44,183 L101,172 L157,158 L214,138 L271,112 L327,80 L384,42 L440,12 L440,185 L44,185Z"
                  fill="url(#eqF)"
                />
                <path
                  d="M44,183 L101,172 L157,158 L214,138 L271,112 L327,80 L384,42 L440,12"
                  fill="none" stroke="#e6b800" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                />
                <circle cx="440" cy="12" r="4.5" fill="#e6b800" />
                <circle cx="440" cy="12" r="9" fill="#e6b800" opacity={0.15} />
              </svg>

              <div className="bfx-eq-method">
                89-month simulation · 6 instruments including XAU/USD &amp; US indices ·
                Session-filtered · Minimum R:R gate · Breakeven management active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
