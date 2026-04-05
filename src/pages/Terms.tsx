import { Link } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{
      fontFamily: "'Syne', system-ui, sans-serif", fontSize: 20, fontWeight: 700,
      color: "#ffffff", marginBottom: 16, letterSpacing: "-0.02em",
      paddingBottom: 12, borderBottom: "1px solid #252525",
    }}>{title}</h2>
    <div style={{ color: "#888888", fontSize: 15, lineHeight: 1.8 }}>{children}</div>
  </div>
);

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 20 }}>
    <h3 style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 11, fontWeight: 600, color: "#00d68f", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{title}</h3>
    <div>{children}</div>
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
    <span style={{ color: "#00d68f", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginTop: 4, flexShrink: 0 }}>→</span>
    <span>{children}</span>
  </div>
);

const Warning = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: "rgba(0,214,143,.05)", border: "1px solid rgba(0,214,143,.18)", borderRadius: 10, padding: "16px 20px", marginBottom: 16, fontSize: 14, color: "#888888", lineHeight: 1.75 }}>
    {children}
  </div>
);

export default function Terms() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Instrument Sans','Segoe UI',system-ui,sans-serif" }}>
      {/* Nav strip */}
      <div style={{ padding: "0 40px", height: 64, display: "flex", alignItems: "center", borderBottom: "1px solid #1a1a1a", background: "rgba(10,10,10,.9)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)" }}>
        <Link to="/" className="bfx-nav-logo">
          <div className="bfx-logo-mark"><img src="/bobi-foreground.png" alt="BobiFX" /></div>
          <span className="bfx-nav-brand">BobiFX</span>
        </Link>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#555555", letterSpacing: "0.06em" }}>TERMS OF SERVICE</span>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 40px 100px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#00d68f", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "block", width: 24, height: 1, background: "#00d68f" }} />
            Legal
          </div>
          <h1 style={{ fontFamily: "'Syne',system-ui,sans-serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
            Terms of Service
          </h1>
          <p style={{ color: "#888888", fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            These Terms of Service ("Terms") govern your access to and use of BobiFX, including the web platform at <strong style={{ color: "#e0e0e0" }}>app.bobifx.com</strong>, the Android mobile application <strong style={{ color: "#e0e0e0" }}>BoBi Trades & Journal</strong>, and the public website at <strong style={{ color: "#e0e0e0" }}>bobifx.com</strong> (collectively, the "Service"). By creating an account or using the Service you agree to be bound by these Terms.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#555555" }}>Effective date: April 4, 2026</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#555555" }}>Last updated: April 4, 2026</span>
          </div>
        </div>

        {/* Risk warning banner */}
        <Warning>
          <strong style={{ color: "#00d68f", display: "block", marginBottom: 6, fontFamily: "'Syne',sans-serif", fontSize: 14 }}>⚠ Important Risk Disclosure</strong>
          Trading foreign exchange, CFDs, and other leveraged financial instruments involves a high degree of risk and may not be suitable for all investors. You may lose some or all of your invested capital. Past performance — including backtested results published on this website — does not guarantee future returns. The +944.67R backtest figure was generated through a walk-forward simulation on historical data and is not a guarantee of live trading performance. Never trade with money you cannot afford to lose. Seek independent financial advice if necessary.
        </Warning>

        <Section title="1. Acceptance of Terms">
          <p>By accessing or using the Service you confirm that you are at least 18 years old, have the legal capacity to enter into a binding agreement, and agree to these Terms and our <Link to="/privacy" style={{ color: "#00d68f", textDecoration: "none" }}>Privacy Policy</Link>. If you do not agree, you must not use the Service.</p>
        </Section>

        <Section title="2. Description of Service">
          <p style={{ marginBottom: 12 }}>BobiFX provides a suite of tools for retail and professional forex traders, including:</p>
          <Li><strong style={{ color: "#e0e0e0" }}>Live Signal Engine</strong> — Algorithmic detection of HTF supply and demand zones across 20 currency pairs; real-time entry signal generation with entry, SL, and TP levels</Li>
          <Li><strong style={{ color: "#e0e0e0" }}>Auto-Trade Execution</strong> — Automated trade placement, management, and closure on connected MT4, MT5, Match Trader, cTrader, or TradingView accounts via the MetaAPI service</Li>
          <Li><strong style={{ color: "#e0e0e0" }}>Trade Journal</strong> — Manual and auto-synced trade logging with notes, screenshots, strategy tags, and emotion tracking</Li>
          <Li><strong style={{ color: "#e0e0e0" }}>Analytics Suite</strong> — Equity curve, session heatmap, rolling performance, risk-of-ruin calculator, income projection, and monthly scorecard</Li>
          <Li><strong style={{ color: "#e0e0e0" }}>Trade Ideas</strong> — AI-scored setup suggestions ranked by signal quality, pair history, and session alignment</Li>
          <Li><strong style={{ color: "#e0e0e0" }}>Mobile App</strong> — Android companion app for push notifications, journal access, and live signal monitoring</Li>
          <p style={{ marginTop: 12 }}>The Service is an informational and automation tool only. BobiFX is not a licensed financial adviser, broker-dealer, investment adviser, or regulated financial institution. Nothing on the Service constitutes investment advice or a solicitation to trade.</p>
        </Section>

        <Section title="3. Account Registration">
          <Li>You must provide accurate information when registering. You are responsible for maintaining the confidentiality of your credentials.</Li>
          <Li>You are responsible for all activity that occurs under your account.</Li>
          <Li>You must notify us immediately at <a href="mailto:support@bobifx.com" style={{ color: "#00d68f", textDecoration: "none" }}>support@bobifx.com</a> if you suspect unauthorised access to your account.</Li>
          <Li>We reserve the right to suspend or terminate accounts that violate these Terms, are used for fraudulent activity, or pose a security risk.</Li>
        </Section>

        <Section title="4. Auto-Trade Feature — Important Limitations">
          <Warning>
            The Auto-Trade feature executes real trades on your live broker account using real money. You are solely responsible for all trading decisions, outcomes, and any financial losses that result from using this feature.
          </Warning>
          <Sub title="4.1 Your responsibilities">
            <Li>You must configure your risk parameters (lot sizing, max daily loss, stop-loss ratios, loss-guard circuit breakers) before enabling Auto-Trade. These settings are your responsibility.</Li>
            <Li>You must ensure your broker account is adequately funded and that margin requirements are met.</Li>
            <Li>You are responsible for monitoring your account. BobiFX does not guarantee uninterrupted service; network outages, broker API downtime, or system errors may prevent timely execution.</Li>
            <Li>You must comply with your broker's terms of service. Some prop firm or funded account rules prohibit automated trading — verify this before enabling the feature.</Li>
          </Sub>
          <Sub title="4.2 Limitations of liability">
            <Li>BobiFX and MetaAPI are separate services. We are not responsible for execution failures, latency, slippage, or rejections caused by MetaAPI or your broker.</Li>
            <Li>Signal-generated entries, SL levels, and TP levels are algorithmic outputs. They are not guaranteed to be profitable. Market conditions may cause signals to perform differently in live trading than in backtests.</Li>
            <Li>We do not accept liability for losses arising from: broker outages, internet connectivity issues, incorrect risk configuration set by the user, prop firm rule violations, or force majeure events.</Li>
          </Sub>
          <Sub title="4.3 Broker credentials">
            <p>You authorise BobiFX to store and use your broker login credentials solely for the purpose of connecting to and operating your trading account via MetaAPI. We will not access your account for any purpose other than executing the automated pipeline you have configured.</p>
          </Sub>
        </Section>

        <Section title="5. Subscriptions & Billing">
          <Sub title="5.1 Plans">
            <p style={{ marginBottom: 12 }}>BobiFX offers four tiers: Free, Basic, Pro, and Elite. Paid plans are priced per broker account. Current pricing is displayed on the <Link to="/#pricing" style={{ color: "#00d68f", textDecoration: "none" }}>Pricing</Link> page and within the app. We reserve the right to change prices with 30 days' notice.</p>
          </Sub>
          <Sub title="5.2 Billing">
            <Li>Subscriptions are billed monthly or annually depending on the option you select.</Li>
            <Li>Payments are processed by <strong style={{ color: "#e0e0e0" }}>Stripe</strong> via <strong style={{ color: "#e0e0e0" }}>RevenueCat</strong>. By subscribing you agree to RevenueCat's and Stripe's terms of service.</Li>
            <Li>Your subscription renews automatically at the end of each billing period unless you cancel before the renewal date.</Li>
          </Sub>
          <Sub title="5.3 Cancellation">
            <Li>You may cancel your subscription at any time from the Subscription page within the app or via the Manage Billing portal.</Li>
            <Li>Cancellation takes effect at the end of your current billing period. You retain access to paid features until then.</Li>
            <Li>We do not provide refunds for partial billing periods, except where required by applicable law.</Li>
          </Sub>
          <Sub title="5.4 Free tier">
            <p>The Free tier provides access to live signals, the zone map, the trade journal, and the economic calendar with no time limit. A payment method is not required to use the Free tier.</p>
          </Sub>
        </Section>

        <Section title="6. Acceptable Use">
          <p style={{ marginBottom: 12 }}>You agree not to:</p>
          <Li>Use the Service for any unlawful purpose or in violation of any applicable laws or regulations</Li>
          <Li>Attempt to reverse-engineer, decompile, or extract the source code of the signal engine or any proprietary component</Li>
          <Li>Resell, sublicense, or redistribute access to the Service or signal data to third parties</Li>
          <Li>Use automated scrapers, bots, or scripts to access the Service outside of officially provided APIs</Li>
          <Li>Interfere with or disrupt the integrity of the Service, servers, or networks</Li>
          <Li>Share your account credentials with other users (each account is for one individual)</Li>
          <Li>Attempt to circumvent subscription tier restrictions or payment requirements</Li>
        </Section>

        <Section title="7. Intellectual Property">
          <p style={{ marginBottom: 12 }}>All content, code, algorithms, signal logic, design, trademarks, and branding associated with BobiFX are owned by us or licensed to us. These Terms do not grant you any right to:</p>
          <Li>Use the BobiFX name, logo, or branding without our written permission</Li>
          <Li>Copy, adapt, or redistribute any part of the Service or its signal output</Li>
          <Li>Publish or publicly share signal data in a way that implies it is your own work or a separate product</Li>
          <p style={{ marginTop: 12 }}>You retain ownership of the trade data, journal entries, and screenshots you upload to the Service.</p>
        </Section>

        <Section title="8. Disclaimers">
          <Sub title="8.1 No financial advice">
            <p>The signal engine, trade ideas, analytics, and all other outputs of the Service are provided for informational and educational purposes only. They do not constitute investment advice, financial advice, trading advice, or any other type of advice. You should not make trading decisions based solely on signals or outputs from BobiFX without conducting your own analysis.</p>
          </Sub>
          <Sub title="8.2 Backtest results">
            <p>Historical backtest results, including the +944.67R figure, are simulated results based on historical market data. Simulated results have inherent limitations: they are computed with the benefit of hindsight, do not account for real broker slippage or spread variations, and cannot account for market impact. These results do not represent actual trading and should not be relied upon as a guarantee of future performance.</p>
          </Sub>
          <Sub title="8.3 Service availability">
            <p>We aim for high availability but do not guarantee uninterrupted access to the Service. Scheduled maintenance, unexpected outages, or third-party service disruptions (Supabase, MetaAPI, RevenueCat) may temporarily affect availability. We are not liable for losses resulting from service downtime.</p>
          </Sub>
          <Sub title="8.4 As-is provision">
            <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy of signals, or non-infringement.</p>
          </Sub>
        </Section>

        <Section title="9. Limitation of Liability">
          <p style={{ marginBottom: 12 }}>To the maximum extent permitted by applicable law, BobiFX and its owners, employees, and contractors shall not be liable for any:</p>
          <Li>Trading losses incurred through use of the Service, including losses from auto-trade execution</Li>
          <Li>Indirect, incidental, special, consequential, or punitive damages</Li>
          <Li>Loss of profits, revenue, data, or business opportunity</Li>
          <Li>Damages arising from third-party service failures (MetaAPI, Supabase, broker platforms, Stripe)</Li>
          <p style={{ marginTop: 12 }}>Our aggregate liability to you for any claim arising out of or relating to these Terms or the Service shall not exceed the total subscription fees you paid to us in the 12 months preceding the claim.</p>
        </Section>

        <Section title="10. Indemnification">
          <p>You agree to indemnify, defend, and hold harmless BobiFX and its affiliates from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your trading activity and any losses resulting from it; or (d) your violation of any applicable laws.</p>
        </Section>

        <Section title="11. Termination">
          <Li>You may terminate your account at any time by deleting it from Settings → Danger Zone within the app.</Li>
          <Li>We may suspend or terminate your access at any time, with or without notice, for violation of these Terms, non-payment, or for any reason at our sole discretion.</Li>
          <Li>Upon termination, your right to use the Service ceases immediately. Data deletion follows the schedule described in our Privacy Policy.</Li>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>We may update these Terms from time to time. Material changes will be communicated via an in-app notification or email at least 14 days before taking effect. Your continued use of the Service after changes become effective constitutes your acceptance. If you do not agree with the updated Terms, you must stop using the Service and may request account deletion.</p>
        </Section>

        <Section title="13. Governing Law & Disputes">
          <p>These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration or the competent courts of the jurisdiction in which BobiFX operates, depending on applicable law.</p>
        </Section>

        <Section title="14. Contact">
          <p style={{ marginBottom: 12 }}>For questions about these Terms:</p>
          <div style={{ background: "#111111", border: "1px solid #252525", borderRadius: 10, padding: "20px 24px" }}>
            <div style={{ fontFamily: "'Syne',system-ui,sans-serif", fontWeight: 700, fontSize: 15, color: "#ffffff", marginBottom: 8 }}>BobiFX</div>
            <div style={{ fontSize: 14, color: "#888888", marginBottom: 4 }}>Legal enquiries: <a href="mailto:legal@bobifx.com" style={{ color: "#00d68f", textDecoration: "none" }}>legal@bobifx.com</a></div>
            <div style={{ fontSize: 14, color: "#888888" }}>General support: <a href="mailto:support@bobifx.com" style={{ color: "#00d68f", textDecoration: "none" }}>support@bobifx.com</a></div>
          </div>
        </Section>

        <div style={{ paddingTop: 32, borderTop: "1px solid #1a1a1a", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#555555", textDecoration: "none" }}>← Back to BobiFX</Link>
          <Link to="/privacy" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#555555", textDecoration: "none" }}>Privacy Policy →</Link>
        </div>
      </div>
    </div>
  );
}