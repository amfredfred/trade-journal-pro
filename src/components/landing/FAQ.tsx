import { useState } from "react";

const faqs = [
  {
    q: "What brokers does Bobi's Quote support?",
    a: "Bobi's Quote connects to any MT4 or MT5 broker account. This covers the vast majority of retail forex brokers worldwide — including IC Markets, Pepperstone, FTMO, and most prop firms. If your broker supports MT4 or MT5, you can connect it.",
  },
  {
    q: "How is Bobi's Quote different from a copy-trading service?",
    a: "A copy-trading service mirrors trades from a third-party account. Bobi's Quote generates its own signals using technical analysis on live price data — no external trader to follow, no dependency on someone else's performance. The same market conditions always produce the same outcome from the engine. You're trading a system, not copying a person.",
  },
  {
    q: "What do the results actually show?",
    a: "The simulation ran across 6 instruments — EURUSD, XAUUSD, US100, US30, US500, and JP225 — covering 89 months from January 2019 to May 2026. 25,403 trades were executed using the exact same rules as the live engine. Total return was +20,126.55R with a profit factor of 2.37, win rate of 42%, and an average return of +0.79R per trade. No parameters were adjusted after reviewing results. The full trade-by-trade data is available inside the app.",
  },
  {
    q: "Can I use Bobi's Quote without auto-trade enabled?",
    a: "Yes. The signal feed, setup monitor, trade journal, and analytics all work without a connected broker. Many users monitor signals manually and enter trades themselves. Auto-trade is optional and can be enabled at any time from your account settings.",
  },
  {
    q: "Is Bobi's Quote suitable for prop or funded accounts?",
    a: "Yes. The Pro and Elite plans include Loss Guard — configurable daily loss limits and circuit breakers that automatically pause trading if thresholds are breached. This is designed specifically for prop firm risk rules such as FTMO, MyFundedFX, and The Funded Trader. Your defined limits, enforced automatically.",
  },
  {
    q: "How does auto-trade execution work?",
    a: "With auto-trade enabled, once a signal is confirmed, Bobi's Quote places an order on your broker account sized precisely to your configured risk per trade. At Take Profit 1, the stop-loss is automatically moved to breakeven. At Take Profit 2, the position closes and the result is logged to your journal. No manual steps required.",
  },
  {
    q: "What happens to my trades if the server goes offline?",
    a: "Open positions continue to be managed independently of the Bobi's Quote app server. Your broker account holds the positions — they remain live regardless of our server status. You receive push notifications when Take Profit 1, Take Profit 2, or Stop Loss is hit.",
  },
  {
    q: "Is my money ever held by Bobi's Quote?",
    a: "No. Bobi's Quote never holds, moves, or has custody of your funds. All trades execute directly on your own broker account via a secure API connection — not a fund transfer. Your capital stays with your broker at all times.",
  },
  {
    q: "What's the difference between a signal and auto-trade?",
    a: "A signal is a complete trade plan — entry, stop loss, TP1, TP2, and risk-to-reward — that you can act on manually. Auto-trade takes that signal and places the order on your broker without you doing anything. Both use the same signal. Auto-trade just removes the manual step.",
  },
  {
    q: "How is billing handled?",
    a: "Subscriptions are handled securely. You can subscribe, upgrade, downgrade, or cancel at any time with no contracts or lock-in. A free tier lets you explore signals and the setup monitor before connecting any broker account.",
  },
  {
    q: "What pairs does Bobi's Quote cover?",
    a: "The signal engine covers 6 instruments across major forex, gold (XAU/USD), and US indices including US100, US30, and US500. Each instrument runs an independent signal pipeline.",
  },
  {
    q: "What happens if my internet connection drops?",
    a: "The signal engine and trade management run on our servers, not on your device. Open positions continue to be tracked and managed regardless of your connection status. You're notified via push when any trade closes.",
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
          <p className="bfx-sub">Straight answers — about how the engine works, your money, and what to expect.</p>
        </div>
        <div className="bfx-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`bfx-faq-item${open === i ? " bfx-faq-open" : ""}`}>
              <button
                className="bfx-faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
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
