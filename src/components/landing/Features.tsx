const features = [
  { icon:"⚡", name:"Live Signal Feed",       tag:"FREE",   desc:"Real-time alerts for all 20 pairs. Every signal shows HTF zone, LTF rejection candle, entry, SL, TP1, TP2, R:R, and current status — with push notifications on mobile." },
  { icon:"🗺", name:"Zone Map",               tag:"FREE",   desc:"Visual dashboard of every active supply and demand zone across all pairs, grouped by status: WATCHING, ACTIVE, or DEAD. Always know where the engine is focused." },
  { icon:"🤖", name:"Auto-Trade Engine",      tag:"BASIC+", desc:"Connect MT4, MT5, Match Trader, cTrader, or TradingView via MetaAPI. The engine places trades, manages breakeven at TP1, and closes positions automatically." },
  { icon:"📊", name:"Advanced Analytics",     tag:"PRO",    desc:"Full analytics suite: equity curve, session heatmap, rolling performance windows, monthly scorecard, strategy breakdown, and RR distribution — all by account." },
  { icon:"🕐", name:"Session & Hour Analysis",tag:"PRO",    desc:"Hour-by-hour and session-level breakdown showing net R:R, win rate, and trade frequency across Tokyo, London, and New York. Identify your edge windows." },
  { icon:"📓", name:"Trade Journal",          tag:"FREE",   desc:"Log every trade with entry/exit, screenshots, emotion tags, strategy notes, and conviction levels. Auto-populated from connected broker accounts." },
  { icon:"📈", name:"Performance Hub",        tag:"PRO",    desc:"Risk-of-ruin calculator, income projection, streak tracker, rolling equity curve, and monthly scorecard — everything to monitor your edge over time." },
  { icon:"💡", name:"Trade Ideas",            tag:"PRO",    desc:"AI-scored setups ranked by signal quality, session alignment, and historical performance on each pair and timeframe. Push-notified the moment an idea fires." },
  { icon:"📅", name:"Economic Calendar",      tag:"FREE",   desc:"Integrated news calendar overlaid on your signal and trade history. See exactly how high-impact events affect your system's performance." },
];
export default function Features() {
  return (
    <section id="features" className="bfx-features-section">
      <div className="bfx-section-inner">
        <div className="bfx-label">Platform</div>
        <h2 className="bfx-h2">Everything a serious<br />trader needs.</h2>
        <p className="bfx-sub">Signal engine, auto-execution, deep analytics, journaling, and session analysis — one platform built for traders running real accounts.</p>
        <div className="bfx-features-grid">
          {features.map(f => (
            <div key={f.name} className="bfx-feat">
              <div className="bfx-feat-icon">{f.icon}</div>
              <div className="bfx-feat-name">{f.name}</div>
              <p className="bfx-feat-desc">{f.desc}</p>
              <span className="bfx-feat-tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
