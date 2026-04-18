import { useState } from "react";

const faqs = [
  {
    q: "What brokers does Bobi's Quote support?",
    a: "Bobi's Quote connects to any MT4 or MT5 account via MetaAPI. This covers the vast majority of retail forex brokers worldwide — including IC Markets, Pepperstone, FTMO, and most prop firms. If your broker supports MT4 or MT5, you can connect it.",
  },
  {
    q: "How is Bobi's Quote different from a copy-trading service?",
    a: "A copy-trading service blindly mirrors someone else's trades. Bobi's Quote detects setups using deterministic technical rules — Break of Structure, supply and demand zone formation, rejection candle scoring — based on what price is doing right now on your data feed. No black box, no third-party dependency. You own the logic.",
  },
  {
    q: "What does the backtest actually prove?",
    a: "The walk-forward simulation ran across 10 liquid pairs over 10 months, producing 1,484 trades using the exact same rules the live engine applies — session filters, dedup rules, R:R gates, breakeven logic. +1,111.45R at a profit factor of 2.84 with a max drawdown of −7.75R. Full CSV available for independent verification.",
  },
  {
    q: "Can I use Bobi's Quote without auto-trade enabled?",
    a: "Yes. The signal feed, zone map, trade journal, and analytics all work without a connected broker. Many users monitor signals manually and enter trades themselves — the platform is fully functional as a signal-only tool. Auto-trade is optional and can be enabled at any time from your account settings.",
  },
  {
    q: "Is Bobi's Quote suitable for prop or funded accounts?",
    a: "Yes. The Elite plan includes funded account mode with configurable daily drawdown limits and loss-guard circuit breakers that automatically suspend trading if thresholds are breached — designed to comply with standard prop firm risk rules (e.g. FTMO, MyFundedFX, The Funded Trader).",
  },
  {
    q: "Which timeframe combinations does the engine use?",
    a: "The engine runs 5M/1M, 15M/1M, and 30M/5M in parallel. Each symbol runs an independent pipeline and emits signals tagged with its timeframe pair. This is configurable via the TF_PAIRS setting in your dashboard.",
  },
  {
    q: "How does auto-trade execution work?",
    a: "With auto-trade enabled, once a signal is TRIGGERED (rejection candle confirmed at the zone), Bobi's Quote places a market or limit order on your broker account via MetaAPI — sized precisely to your configured risk per trade. At TP1, the stop-loss is automatically moved to breakeven. At TP2, the position closes and the result is logged to your journal and analytics.",
  },
  {
    q: "How is billing handled?",
    a: "Subscriptions are managed through RevenueCat with payments via Stripe. Subscribe, upgrade, downgrade, or cancel at any time. No contracts. A free tier lets you explore signals and zones before connecting any broker account.",
  },
  {
    q: "What happens if my internet connection drops?",
    a: "The signal engine and auto-trade management runs server-side, not on your device. Open positions continue to be tracked and managed regardless of your connection status. Push notifications fire when TP1, TP2, or SL is hit.",
  },
  {
    q: "What pairs does Bobi's Quote cover?",
    a: "The signal engine covers 20 pairs across major and minor forex, plus gold (XAU/USD) and US500. This includes EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, USD/CHF, NZD/USD, EUR/JPY, and more. Each pair runs an independent signal pipeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bfx-faq" id="faq" aria-labelledby="faq-heading">
      <div className="bfx-section-inner">
        <div className="bfx-faq-header">
          <div className="bfx-label">FAQ</div>
          <h2 className="bfx-h2" id="faq-heading">Common <span className="dim">Questions</span></h2>
          <p className="bfx-sub">Straight answers about Bobi&apos;s Quote, the backtest, and how everything connects.</p>
        </div>
        <div className="bfx-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`bfx-faq-item${open === i ? " bfx-faq-open" : ""}`}>
              <button className="bfx-faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="bfx-faq-icon" aria-hidden="true">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="bfx-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
