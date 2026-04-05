import { useState } from "react";

const faqs = [
  {
    q: "What brokers are supported?",
    a: "BobiFX connects to any MT4, MT5, cTrader, or Match Trader account via MetaAPI. This covers the vast majority of retail forex brokers worldwide — including IC Markets, Pepperstone, FTMO, and most prop firms.",
  },
  {
    q: "How is this different from a copy-trading service?",
    a: "A copy-trading service blindly mirrors someone else's trades. BobiFX's engine detects setups using deterministic technical rules — Break of Structure, zone formation, rejection candle scoring — based on what price is doing right now on your data feed. You own the logic.",
  },
  {
    q: "What does the backtest actually prove?",
    a: "The walk-forward simulation ran across 10 liquid pairs, 10 months, and 1,484 trades using the exact same rules the live engine applies — session filters, dedup rules, R:R gates, breakeven logic. +1,111.45R at a profit factor of 2.84 with a max drawdown of −7.75R. Full CSV available at results.bobifx.com/fbs-ceil.",
  },
  {
    q: "Can I use BobiFX without auto-trade enabled?",
    a: "Yes. The signal feed, zone map, trade journal, and analytics work fully without a connected broker. Many users monitor signals manually and enter trades themselves. Auto-trade is optional and can be enabled at any time.",
  },
  {
    q: "Is it suitable for prop / funded accounts?",
    a: "Yes. Elite plan includes funded account mode with configurable daily drawdown limits and loss-guard circuit breakers that automatically suspend trading if thresholds are breached — designed to comply with standard prop firm risk rules.",
  },
  {
    q: "Which timeframe pairs does the engine use?",
    a: "The default runs 30M/5M and 1H/5M in parallel. Each pair runs an independent pipeline and emits signals tagged with its timeframe. This is configurable via the TF_PAIRS setting in the dashboard.",
  },
  {
    q: "How is billing handled?",
    a: "Subscriptions are managed through RevenueCat with payments via Stripe. Subscribe, upgrade, downgrade, or cancel at any time. No contracts. A free tier lets you explore signals and zones before connecting any broker.",
  },
  {
    q: "What happens if my connection drops?",
    a: "The signal engine runs server-side, not on your device. Open positions managed by auto-trade continue to be tracked and managed regardless of your connection status. Push notifications fire when TP1, TP2, or SL is hit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bfx-faq" id="faq">
      <div className="bfx-section-inner">
        <div className="bfx-faq-header">
          <div className="bfx-label">FAQ</div>
          <h2 className="bfx-h2">Common <span className="dim">Questions</span></h2>
          <p className="bfx-sub">Straight answers about the platform, the backtest, and how everything connects.</p>
        </div>
        <div className="bfx-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`bfx-faq-item${open === i ? " bfx-faq-open" : ""}`}>
              <button className="bfx-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="bfx-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="bfx-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
