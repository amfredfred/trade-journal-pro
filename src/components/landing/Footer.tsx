import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bfx-footer">
      <div className="bfx-footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div className="bfx-logo-mark"><img src="/bobi-foreground.png" alt="Bobi's Quote logo" width={24} height={24} /></div>
            <span className="bfx-footer-brand">Bobi&apos;s Quote</span>
          </div>
          <p className="bfx-footer-desc">
            Signal and execution engine for MT4 &amp; MT5 traders.
            Signals, auto-execution, analytics, and journaling — one platform.
          </p>
          <div className="bfx-footer-tech">
            Secure payments · Cancel anytime · Your funds stay with your broker
          </div>
        </div>
        <div>
          <div className="bfx-footer-col-title">Platform</div>
          <ul className="bfx-footer-links">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#backtest">Results</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="bfx-footer-col-title">Resources</div>
          <ul className="bfx-footer-links">
            <li><a href="https://app.bobisquote.com" target="_blank" rel="noreferrer">Full results report</a></li>
            <li><a href="https://www.tradingview.com" target="_blank" rel="noreferrer">TradingView indicator</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp" target="_blank" rel="noreferrer">Android app</a></li>
            <li><a href="mailto:support@bobisquote.com">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="bfx-footer-col-title">Account &amp; Legal</div>
          <ul className="bfx-footer-links">
            <li><a href="https://app.bobisquote.com/login">Log in</a></li>
            <li><a href="https://app.bobisquote.com/login">Sign up free</a></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="bfx-footer-bottom" style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span>© {new Date().getFullYear()} Bobi&apos;s Quote. All rights reserved.</span>
        <span>Works with any MT4 or MT5 broker</span>
      </div>
      <div className="bfx-disclaimer" style={{ maxWidth: 1280, margin: "18px auto 0" }}>
        Risk disclaimer: Trading foreign exchange and CFDs carries significant risk of loss and is not suitable for all investors.
        Past performance, including simulated results, does not guarantee future returns. The +20,126.55R figure was generated from an
        89-month historical simulation (Jan 2019 – May 2026, 25,403 trades across 6 instruments) using the same rules the live engine
        applies, and may not reflect live trading results. Bobi&apos;s Quote is not a licensed financial adviser or broker. Trade responsibly.
      </div>
    </footer>
  );
}
