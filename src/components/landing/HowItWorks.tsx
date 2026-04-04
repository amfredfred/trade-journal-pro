const steps = [
  { n:"01", name:"Zone Detected",        desc:"HTF BOS confirmed. Supply or demand zone locked — engine enters WATCHING state.",                               active:false },
  { n:"02", name:"Price Approaches",     desc:"LTF candles close toward the HTF zone boundary. Signal status advances to PENDING. Alert sent.",               active:false },
  { n:"03", name:"Rejection Candle",     desc:"Hammer or shooting-star detected at zone. Entry, SL, and TP2 calculated. Signal TRIGGERED.",                   active:true  },
  { n:"04", name:"TP1 Hit → Breakeven", desc:"Partial profit taken at TP1. Stop-loss automatically moved to entry price. Runner continues.",                 active:false },
  { n:"05", name:"TP2 → WIN",           desc:"Full target reached. Trade closed. Realized R:R logged to your journal and analytics.",                         active:false },
];
export default function HowItWorks() {
  return (
    <section className="bfx-pipeline" id="how-it-works">
      <div className="bfx-section-inner">
        <div className="bfx-label">Pipeline</div>
        <h2 className="bfx-h2">Five steps. Fully automated.</h2>
        <p className="bfx-sub">From zone detection to trade closure — the engine runs the entire lifecycle while you stay focused on your strategy.</p>
        <div className="bfx-pipeline-steps">
          {steps.map(s => (
            <div key={s.n} className={`bfx-pipe-step${s.active ? " bfx-pipe-active" : ""}`}>
              <div className="bfx-pipe-num">{s.n}</div>
              <div className="bfx-pipe-name">{s.name}</div>
              <div className="bfx-pipe-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
