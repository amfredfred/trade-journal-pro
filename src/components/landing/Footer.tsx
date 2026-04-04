import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bfx-footer">
      <div className="bfx-footer-inner">
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
            <div className="bfx-logo-mark">B</div>
            <span className="bfx-footer-brand">BobiFX</span>
          </div>
          <p className="bfx-footer-desc">Precision algorithmic signal engine for serious forex traders. HTF/LTF zone detection, auto-execution, deep analytics, and journaling — one platform.</p>
          <div className="bfx-footer-tech">
            Billing via RevenueCat · Payments via Stripe<br />
            Broker sync via MetaAPI · Auth via Supabase
          </div>
        </div>
        <div>
          <div className="bfx-footer-col-title">Platform</div>
          <ul className="bfx-footer-links">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#backtest">Backtest results</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#mobile">Mobile app</a></li>
          </ul>
        </div>
        <div>
          <div className="bfx-footer-col-title">Resources</div>
          <ul className="bfx-footer-links">
            <li><a href="https://results.bobifx.com/fbs-55" target="_blank" rel="noreferrer">Full backtest report</a></li>
            <li><a href="https://www.tradingview.com" target="_blank" rel="noreferrer">TradingView indicator</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp" target="_blank" rel="noreferrer">Android app</a></li>
            <li><a href="mailto:support@bobifx.com">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="bfx-footer-col-title">Account &amp; Legal</div>
          <ul className="bfx-footer-links">
            <li><a href="https://app.bobifx.com/login">Log in</a></li>
            <li><a href="https://app.bobifx.com/login">Sign up free</a></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="bfx-footer-bottom" style={{ maxWidth:1280, margin:"0 auto", paddingTop:24, borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <span>© {new Date().getFullYear()} BobiFX. All rights reserved.</span>
        <span>Built with MetaAPI · RevenueCat · Supabase</span>
      </div>
      <div className="bfx-disclaimer" style={{ maxWidth:1280, margin:"18px auto 0" }}>
        Risk disclaimer: Trading foreign exchange and CFDs carries significant risk of loss and is not suitable for all investors. Past performance, including backtested results, does not guarantee future returns. The +944.67R figure was generated via a walk-forward simulation on historical data and may not reflect live trading results. BobiFX is not a licensed financial adviser or broker. Trade responsibly.
      </div>
    </footer>
  );
}
