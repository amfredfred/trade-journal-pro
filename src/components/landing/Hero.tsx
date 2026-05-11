import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [confirmed, setConfirmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 400);
    const t2 = setTimeout(() => setConfirmed(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); }
  }, []);

  return (
    <section className="bfx-hero" aria-label="Hero">
      <div className="bfx-hero-inner">
        <div className="bfx-hero-grid">

          {/* Primary headline */}
          <h1 className="bfx-h1">
            Your forex trades,<br />
            <em>planned and placed — automatically.</em>
          </h1>

          {/* Sub-copy */}
          <p className="bfx-hero-sub">
            Bobi's Quote monitors 6 instruments across forex, metals, and US indices around the clock,
            generates complete trade plans, and executes them directly on your MT4 or MT5
            broker account.&nbsp;
            <span style={{ color: "var(--text2)" }}>No manual work. No copy-trading.</span>
          </p>

          {/* CTA row */}
          <div className="bfx-hero-actions">
            <a href="https://app.bobisquote.com/login" className="bfx-btn-hero">
              Start free →
            </a>
            <a href="#backtest" className="bfx-btn-hero-ghost">
              ▶ See the results
            </a>
          </div>

          {/* Trust anchors */}
          <div className="bfx-hero-anchors" aria-label="Key facts">
            <div className="bfx-anchor-item">
              <span className="bfx-anchor-n">25,403</span>
              <span className="bfx-anchor-l">trades tested · 89 months</span>
            </div>
            <div className="bfx-anchor-sep" aria-hidden="true" />
            <div className="bfx-anchor-item">
              <span className="bfx-anchor-n">MT4 &amp; MT5</span>
              <span className="bfx-anchor-l">No fund transfers</span>
            </div>
            <div className="bfx-anchor-sep" aria-hidden="true" />
            <div className="bfx-anchor-item">
              <span className="bfx-anchor-n">Loss Guard</span>
              <span className="bfx-anchor-l">Professional trading</span>
            </div>
          </div>

        </div>

        {/* Signal card visual */}
        <figure
          className="bfx-signal-visual"
          aria-label="Example signal showing what you receive when a setup is confirmed"
        >
          <div className={`bfx-sig-card${visible ? " bfx-sig-card--visible" : ""}`}>
            <div className="bfx-sig-card-header">
              <div className="bfx-sig-card-pair">XAU / USD</div>
              <span className="bfx-sig-badge bfx-sig-badge--long">▲ LONG</span>
              <div className="bfx-sig-live"><div className="bfx-pulse" />LIVE</div>
            </div>
            <div className="bfx-sig-card-body">
              <div className="bfx-sig-row">
                <span className="bfx-sig-lbl">Entry</span>
                <span className="bfx-sig-val">2,318.40</span>
              </div>
              <div className="bfx-sig-row">
                <span className="bfx-sig-lbl">Stop Loss</span>
                <span className="bfx-sig-val bfx-red">2,304.60</span>
              </div>
              <div className="bfx-sig-row">
                <span className="bfx-sig-lbl">Take Profit 1</span>
                <span className="bfx-sig-val bfx-green">2,332.70</span>
              </div>
              <div className="bfx-sig-row">
                <span className="bfx-sig-lbl">Take Profit 2</span>
                <span className="bfx-sig-val bfx-green">2,349.10</span>
              </div>
              <div className="bfx-sig-divider" />
              <div className="bfx-sig-row">
                <span className="bfx-sig-lbl">Risk : Reward</span>
                <span className="bfx-sig-val bfx-gold">2.5R</span>
              </div>
            </div>
            <div className="bfx-sig-card-source">
              Signal confirmed · Auto-execution active
            </div>
          </div>

          <div
            className={`bfx-exec-card${confirmed ? " bfx-exec-card--visible" : ""}`}
            aria-live="polite"
          >
            <div className="bfx-exec-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="2,9 6,13 14,3" />
              </svg>
            </div>
            <div>
              <div className="bfx-exec-title">Placed on your broker</div>
              <div className="bfx-exec-detail">XAU/USD · 0.01 lots · Confirmed</div>
            </div>
          </div>
        </figure>

      </div>

      <style>{`
        /* ── Hero layout ── */
        .bfx-hero {
          padding: 140px 24px 100px;
          display: flex;
          justify-content: center;
          background: var(--bg);
          background-image:
            linear-gradient(89deg, rgba(255, 255, 255, .015) 1px, transparent 1px),
            linear-gradient(89deg, rgba(255, 255, 255, .015) 1px, transparent 1px);
          background-size: 60px 60px;
          position: relative;
          overflow: hidden;
        }
        .bfx-hero-inner {
          max-width: 760px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
          position: relative;
          z-index: 1;
        }
        .bfx-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          width: 100%;
        }
        .bfx-h1 {
          font-family: var(--display-hero);
          font-size: clamp(30px, 4.5vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -.02em;
          color: var(--text);
          margin-bottom: 22px;
        }
        .bfx-h1 em {
          font-style: normal;
          color: var(--accent);
        }
        .bfx-hero-sub {
          font-size: 17px;
          color: var(--dim);
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 36px;
        }

        /* ── CTA buttons ── */
        .bfx-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 40px;
        }
        .bfx-btn-hero {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 600;
          color: #000;
          background: var(--text);
          padding: 13px 30px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity .15s;
          box-shadow: none;
        }
        .bfx-btn-hero:hover { opacity: .88; }
        .bfx-btn-hero-ghost {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 500;
          color: var(--dim);
          background: transparent;
          border: 1px solid var(--border2);
          padding: 13px 24px;
          border-radius: 8px;
          text-decoration: none;
          transition: border-color .15s, color .15s;
        }
        .bfx-btn-hero-ghost:hover { border-color: var(--dim); color: var(--text); }

        /* ── Trust anchors ── */
        .bfx-hero-anchors {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 64px;
        }
        .bfx-anchor-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .bfx-anchor-n {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--text2);
        }
        .bfx-anchor-l {
          font-size: 11px;
          color: var(--muted);
          font-family: var(--mono);
        }
        .bfx-anchor-sep {
          width: 1px;
          height: 32px;
          background: var(--border);
        }
        @media (max-width: 480px) {
          .bfx-anchor-sep { display: none; }
        }

        /* ── Signal card visual ── */
        .bfx-signal-visual {
          position: relative;
          width: 100%;
          max-width: 420px;
          min-height: 280px;
          display: flex;
          justify-content: center;
        }
        .bfx-sig-card {
          width: 100%;
          background: var(--panel);
          border: 1px solid var(--border2);
          border-radius: var(--radius);
          overflow: hidden;
          opacity: 0;
          transition: opacity .5s ease;
          box-shadow: none;
        }
        .bfx-sig-card--visible {
          opacity: 1;
        }
        .bfx-sig-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,.02);
        }
        .bfx-sig-card-pair {
          font-family: var(--mono);
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
          flex: 1;
        }
        .bfx-sig-badge {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid;
        }
        .bfx-sig-badge--long {
          color: var(--accent);
          border-color: var(--accent-border);
          background: var(--accent-bg);
        }
        .bfx-sig-live {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: var(--mono);
          font-size: 10px;
          color: var(--dim);
        }
        .bfx-sig-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bfx-sig-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bfx-sig-lbl {
          font-size: 12px;
          color: var(--dim);
          font-family: var(--mono);
        }
        .bfx-sig-val {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--text2);
        }
        .bfx-sig-divider {
          border-top: 1px solid var(--border);
          margin: 4px 0;
        }
        .bfx-sig-card-source {
          padding: 10px 20px;
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          border-top: 1px solid var(--border);
          text-align: right;
          letter-spacing: .05em;
        }

        /* Execution confirmation pill */
        .bfx-exec-card {
          position: absolute;
          bottom: -16px;
          right: -8px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--surface);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius);
          padding: 12px 16px;
          opacity: 0;
          transition: opacity .45s ease;
          box-shadow: none;
        }
        .bfx-exec-card--visible {
          opacity: 1;
        }
        .bfx-exec-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-bg);
          border: 1px solid var(--accent-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .bfx-exec-title {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: .04em;
        }
        .bfx-exec-detail {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--dim);
          margin-top: 1px;
        }

        .bfx-green { color: var(--accent) !important; }
        .bfx-red   { color: var(--danger) !important; }
        .bfx-gold  { color: var(--gold) !important; }

        @media (max-width: 560px) {
          .bfx-hero { padding: 110px 16px 64px; }
          .bfx-hero-sub { font-size: 15px; }
          .bfx-exec-card { right: 0; bottom: -20px; }
        }
      `}</style>
    </section>
  );
}
