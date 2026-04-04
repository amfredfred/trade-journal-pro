export default function TVStrip() {
  return (
    <div className="bfx-tv-strip">
      <span className="bfx-tv-lbl">Also available on</span>
      <div className="bfx-tv-pill">
        <svg width="16" height="16" viewBox="0 0 20 20"><rect width="20" height="20" rx="4" fill="#1E53E5"/><text x="3" y="15" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fill="white">TV</text></svg>
        TradingView Companion Indicator
      </div>
      <span className="bfx-tv-lbl">— overlay your zones directly on TradingView charts</span>
      <a href="https://www.tradingview.com" className="bfx-btn-ghost" style={{ fontSize: 12, padding: "6px 14px" }}>View indicator →</a>
    </div>
  );
}
