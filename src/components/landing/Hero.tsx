const Pulse = () => <div className="bfx-pulse" />;

export default function Hero() {
  return (
    <section className="bfx-hero">
      <div className="bfx-hero-grid" />
      <div className="bfx-hero-glow" />
      <div className="bfx-hero-glow2" />
      <div className="bfx-hero-inner">
        {/* ── LEFT ── */}
        <div>
          <div className="bfx-hero-eyebrow"><Pulse /><span className="bfx-eyebrow-text">Signal engine · LIVE</span></div>
          <h1 className="bfx-h1">Trade with<br /><em>algorithmic</em><br />precision.</h1>
          <p className="bfx-hero-sub">
            BobiFX detects HTF supply &amp; demand zones, fires entry signals at the LTF rejection candle,
            and executes trades directly on your MT4/MT5 broker — fully automated.
          </p>
          <div className="bfx-hero-actions">
            <a href="https://app.bobifx.com/login" className="bfx-btn-hero">Start free <span style={{ fontSize: 18 }}>→</span></a>
            <a href="#backtest" className="bfx-btn-hero-ghost">📊 View backtest results</a>
          </div>
          <div className="bfx-hero-trust">
            <div className="bfx-trust-item"><span className="bfx-trust-val">+944R</span> backtested</div>
            <div className="bfx-trust-sep" />
            <div className="bfx-trust-item"><span className="bfx-trust-val">1,249</span> trades</div>
            <div className="bfx-trust-sep" />
            <div className="bfx-trust-item"><span className="bfx-trust-val">1.89</span> profit factor</div>
            <div className="bfx-trust-sep" />
            <div className="bfx-trust-item"><span className="bfx-trust-val">11</span> months</div>
          </div>
        </div>

        {/* ── RIGHT: Signal feed mockup ── */}
        <div className="bfx-hero-right">
          <div className="bfx-mockup">
            <div className="bfx-mockup-bar">
              <div className="bfx-mockup-dots"><div className="bfx-mockup-dot"/><div className="bfx-mockup-dot"/><div className="bfx-mockup-dot"/></div>
              <span className="bfx-mockup-ttl">SIGNAL FEED</span>
              <div className="bfx-mockup-live"><Pulse />LIVE</div>
            </div>
            <div className="bfx-mockup-body">
              {[
                { pair: "XAU/USD", dir: "LONG",  tf: "1H/5M",  e:"2,318.40", sl:"2,311.20", tp:"2,339.80", rr:"3.0R", status:<><Pulse />TRIGGERED · London</>,  statusColor: "var(--green)", rrColor: "var(--gold)" },
                { pair: "EUR/USD", dir: "SHORT", tf: "30M/5M", e:"1.08842",  sl:"1.08960",  tp:"1.08370",  rr:"4.0R", status:"◆ TP1 HIT · Moving to BE",         statusColor: "var(--gold)", rrColor: "var(--green)" },
                { pair: "GBP/USD", dir: "LONG",  tf: "1H/5M",  e:"1.26310",  sl:"1.26148",  tp:"1.26960",  rr:"4.0R", status:"◎ WATCHING · New York",             statusColor: "var(--muted)", rrColor: "var(--gold)" },
              ].map((s, i) => (
                <div key={i} className="bfx-signal" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div>
                    <div className="bfx-sig-top">
                      <span className="bfx-sig-pair">{s.pair}</span>
                      <span className={`bfx-sig-dir bfx-${s.dir.toLowerCase()}`}>{s.dir}</span>
                      <span className="bfx-sig-tf">{s.tf}</span>
                    </div>
                    <div className="bfx-sig-levels">
                      <span className="bfx-sig-lvl">E <span>{s.e}</span></span>
                      <span className="bfx-sig-lvl">SL <span>{s.sl}</span></span>
                      <span className="bfx-sig-lvl">TP <span>{s.tp}</span></span>
                    </div>
                    <div className="bfx-sig-status" style={{ color: s.statusColor }}>{s.status}</div>
                  </div>
                  <div>
                    <div className="bfx-sig-rr" style={{ color: s.rrColor }}>{s.rr}</div>
                    <div className="bfx-sig-rr-lbl">R:R RATIO</div>
                  </div>
                </div>
              ))}

              {/* Mini equity curve */}
              <div className="bfx-mini-eq">
                <div className="bfx-mini-eq-head">
                  <span className="bfx-mini-eq-lbl">RUNNING P&amp;L (R)</span>
                  <span className="bfx-mini-eq-val">+18.4R</span>
                </div>
                <svg viewBox="0 0 320 56" width="100%" style={{ display: "block" }}>
                  <defs>
                    <linearGradient id="mEqG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e6b800" stopOpacity={0.28}/>
                      <stop offset="100%" stopColor="#e6b800" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <path d="M0,50 L22,47 L44,40 L66,43 L88,34 L110,38 L132,26 L154,30 L176,18 L198,22 L220,12 L242,16 L264,8 L286,11 L320,4 L320,56 L0,56Z" fill="url(#mEqG)"/>
                  <path d="M0,50 L22,47 L44,40 L66,43 L88,34 L110,38 L132,26 L154,30 L176,18 L198,22 L220,12 L242,16 L264,8 L286,11 L320,4" fill="none" stroke="#e6b800" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="320" cy="4" r="3.5" fill="#e6b800"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
