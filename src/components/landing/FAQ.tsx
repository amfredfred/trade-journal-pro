import { useState } from "react";

const faqs = [
  {
    q: "What brokers are supported?",
    a: "BobiFX connects to any MT4, MT5, cTrader, or Match Trader account via MetaAPI. If your broker supports one of these platforms, you can connect it. This covers the vast majority of retail forex brokers worldwide — including IC Markets, Pepperstone, FTMO, and most prop firms.",
  },
  {
    q: "How is the signal engine different from a copy-trading service?",
    a: "A copy-trading service blindly mirrors someone else's trades. BobiFX's engine detects setups on your account's data feed using deterministic technical rules — Break of Structure, zone formation, rejection candle scoring — and fires signals based on what price is actually doing right now. You own the logic. Nothing is outsourced.",
  },
  {
    q: "What does the backtest actually prove?",
    a: "The walk-forward simulation ran across 10 liquid pairs, 10 months, and 1,484 trades using the exact same signal rules the live engine applies — session filters, dedup rules, R:R gates, breakeven logic. It produced +1,111.45R at a profit factor of 2.84 with a max drawdown of −7.75R. The full trade-by-trade CSV is publicly available at results.bobifx.com/fbs-ceil for independent verification.",
  },
  {
    q: "Can I use BobiFX without enabling auto-trade?",
    a: "Yes. The signal feed, zone map, trade journal, and analytics work fully without connecting a broker account. Many users monitor signals manually and enter trades themselves. Auto-trade is an optional layer you can enable at any time.",
  },
  {
    q: "Is BobiFX suitable for prop / funded accounts?",
    a: "Yes. Elite plan includes funded account mode with configurable daily drawdown limits and loss-guard circuit breakers that automatically suspend trading if thresholds are breached. This is designed to comply with standard prop firm risk rules.",
  },
  {
    q: "Which timeframe pairs does the engine run?",
    a: "The engine supports multiple Higher Timeframe / Lower Timeframe pairs simultaneously. The default configuration runs 30M/5M and 1H/5M in parallel. Each pair runs an independent pipeline and emits signals tagged with its timeframe. You can configure this via the TF_PAIRS setting.",
  },
  {
    q: "How is billing handled?",
    a: "Subscriptions are managed through RevenueCat with payments processed via Stripe. You can subscribe, upgrade, downgrade, or cancel at any time from the app or web dashboard. There are no long-term contracts. A free tier lets you explore signals and the zone map before connecting any broker.",
  },
  {
    q: "What happens if my internet connection drops?",
    a: "The signal engine runs server-side — not on your device. Open positions managed by auto-trade continue to be tracked and managed by the server regardless of your connection status. You will receive push notifications when TP1, TP2, or SL is hit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bfx-faq" id="faq">
      <div className="bfx-section-inner">
        <div className="bfx-label">FAQ</div>
        <h2 className="bfx-h2">Common questions.</h2>
        <p className="bfx-sub">
          Straight answers about how the platform works, what it connects to, and what the backtest actually means.
        </p>
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
