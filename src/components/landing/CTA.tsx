export default function CTA() {
  return (
    <section className="bfx-cta">
      <div className="bfx-cta-inner">
        <div className="bfx-cta-card">
          <div className="bfx-label" style={{ justifyContent: "center", marginBottom: 16 }}>Get started</div>
          <h2 className="bfx-h2" style={{ marginBottom: 12 }}>Ready to trade smarter?</h2>
          <p className="bfx-cta-desc">Connect your broker. Subscribe to your pairs. Let the engine run. Free to start — no credit card required.</p>
          <div className="bfx-cta-actions">
            <a href="https://app.bobifx.com/login" className="bfx-btn-hero">Start free →</a>
            <a href="#backtest" className="bfx-btn-hero-ghost">View backtest</a>
          </div>
          <div className="bfx-cta-note">No credit card · Cancel anytime · 1,484 trades verified</div>
        </div>
      </div>
    </section>
  );
}
