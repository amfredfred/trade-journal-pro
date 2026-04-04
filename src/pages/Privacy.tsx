import { Link } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{
      fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800,
      color: "#ede9e0", marginBottom: 16, letterSpacing: "-0.02em",
      paddingBottom: 12, borderBottom: "1px solid #2c2820",
    }}>{title}</h2>
    <div style={{ color: "#a09890", fontSize: 14, lineHeight: 1.85 }}>{children}</div>
  </div>
);

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 20 }}>
    <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 700, color: "#d4a432", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{title}</h3>
    <div>{children}</div>
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
    <span style={{ color: "#d4a432", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, marginTop: 3, flexShrink: 0 }}>→</span>
    <span>{children}</span>
  </div>
);

export default function Privacy() {
  return (
    <div style={{ background: "#0d0c0a", minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Nav strip */}
      <div style={{ padding: "0 40px", height: 64, display: "flex", alignItems: "center", borderBottom: "1px solid #2c2820", background: "rgba(13,12,10,.9)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 28, height: 28, background: "#d4a432", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: "#0d0c0a" }}>B</div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: "#ede9e0" }}>BobiFX</span>
        </Link>
        <span style={{ marginLeft: "auto", fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#7a7268" }}>Privacy Policy</span>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 40px 100px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#d4a432", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "block", width: 24, height: 1, background: "#d4a432" }} />
            Legal
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, color: "#ede9e0", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#a09890", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
            This Privacy Policy explains how BobiFX ("we", "us", "our") collects, uses, stores, and protects your personal information when you use our web platform at <strong style={{ color: "#ede9e0" }}>app.bobifx.com</strong>, our Android mobile application <strong style={{ color: "#ede9e0" }}>BoBi Trades & Journal</strong>, and our public website at <strong style={{ color: "#ede9e0" }}>bobifx.com</strong> (collectively, the "Service").
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#7a7268" }}>Effective date: April 4, 2026</span>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#7a7268" }}>Last updated: April 4, 2026</span>
          </div>
        </div>

        <Section title="1. Information We Collect">
          <Sub title="1.1 Account & Profile Data">
            <p style={{ marginBottom: 12 }}>When you create a BobiFX account, we collect:</p>
            <Li>Email address and password hash (managed by Supabase Auth)</Li>
            <Li>Display name and username (optional, set by you)</Li>
            <Li>Avatar image URL (optional)</Li>
            <Li>Timezone preference</Li>
            <Li>Subscription tier and RevenueCat App User ID</Li>
            <Li>Notification preferences and push token (for push alerts)</Li>
          </Sub>
          <Sub title="1.2 Broker & Trading Account Data">
            <p style={{ marginBottom: 12 }}>When you connect a broker account for live sync or auto-trade, we collect and securely store:</p>
            <Li>Broker login credentials (account number, password, server) — transmitted via HTTPS only, never over WebSocket</Li>
            <Li>MetaAPI account ID (a reference token used to communicate with your broker via the MetaAPI service)</Li>
            <Li>Account metadata: account name, type (prop / personal / demo), currency, broker platform (MT4, MT5, Match Trader, cTrader, or TradingView)</Li>
            <Li>Risk configuration: risk mode, risk percent, max daily loss, SL/TP ratios, loss-guard settings</Li>
            <Li>Synced balance, today's P&L, and trade count (refreshed in real time when connected)</Li>
          </Sub>
          <Sub title="1.3 Trade & Journal Data">
            <p style={{ marginBottom: 12 }}>All trade records you log manually or that are auto-synced from your broker are stored on our servers:</p>
            <Li>Symbol (e.g. EUR/USD, XAU/USD), direction (long/short), entry/exit price, lot size, stop loss, take profits</Li>
            <Li>Trade status, close reason, realised P&L, realised R:R</Li>
            <Li>Journal notes, strategy tags, conviction level, emotion tags, screenshots/images you attach</Li>
            <Li>Timestamps for every event (open, TP1, TP2, close)</Li>
          </Sub>
          <Sub title="1.4 Signal & Zone Data">
            <p style={{ marginBottom: 12 }}>We record which signal subscriptions you have active and your interaction with signals:</p>
            <Li>Your subscribed trading pairs and timeframe preferences</Li>
            <Li>Signal alert acknowledgements and notification delivery logs</Li>
          </Sub>
          <Sub title="1.5 Usage & Technical Data">
            <Li>WebSocket connection events and session timestamps</Li>
            <Li>Browser type, OS, and device identifiers (for session management)</Li>
            <Li>IP address at login (retained by Supabase Auth for security)</Li>
            <Li>Error logs and crash reports (used to diagnose and fix bugs)</Li>
          </Sub>
          <Sub title="1.6 Payment Data">
            <p>Subscription payments are processed by <strong style={{ color: "#ede9e0" }}>Stripe</strong> via <strong style={{ color: "#ede9e0" }}>RevenueCat</strong>. We never see or store your full card number, CVV, or bank details. We only receive a RevenueCat App User ID and the active entitlement tier returned by RevenueCat's API.</p>
          </Sub>
        </Section>

        <Section title="2. How We Use Your Information">
          <Li>Authenticate you and maintain your session</Li>
          <Li>Sync your broker accounts in real time and execute auto-trade instructions on your behalf</Li>
          <Li>Deliver live signal alerts, zone notifications, and trade execution push notifications to your devices</Li>
          <Li>Calculate analytics: equity curve, win rate, profit factor, session heatmap, risk-of-ruin, rolling performance</Li>
          <Li>Process subscription payments and apply feature tier gating (Free / Basic / Pro / Elite)</Li>
          <Li>Send account-level notifications: drawdown warnings, profit target alerts, strategy reminders (if enabled)</Li>
          <Li>Diagnose bugs, monitor service health, and improve the platform</Li>
          <Li>Respond to support requests</Li>
          <p style={{ marginTop: 16 }}>We do <strong style={{ color: "#ede9e0" }}>not</strong> use your trading data to train AI models, sell to advertisers, or share with third parties for marketing purposes.</p>
        </Section>

        <Section title="3. Data Storage & Security">
          <Sub title="3.1 Infrastructure">
            <Li>User authentication and session tokens are managed by <strong style={{ color: "#ede9e0" }}>Supabase</strong> (hosted on AWS, SOC 2 compliant)</Li>
            <Li>Application data (profiles, trades, signals, accounts) is stored in a PostgreSQL database hosted on a cloud provider in a secure environment</Li>
            <Li>All data in transit is encrypted via TLS 1.2+</Li>
            <Li>Broker credentials are stored encrypted at rest and are transmitted only over HTTPS — never via WebSocket or any unencrypted channel</Li>
          </Sub>
          <Sub title="3.2 Retention">
            <Li>Active account data is retained for the lifetime of your account</Li>
            <Li>If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it by law (e.g. billing records)</Li>
            <Li>Notification delivery logs are automatically purged after 90 days</Li>
          </Sub>
          <Sub title="3.3 Access Controls">
            <Li>Access to production databases is restricted to authorised engineers via multi-factor authentication</Li>
            <Li>No employee or contractor can view your broker credentials in plaintext</Li>
          </Sub>
        </Section>

        <Section title="4. Third-Party Services">
          <p style={{ marginBottom: 16 }}>We share minimal data with the following third parties to operate the Service:</p>
          <div style={{ background: "#171511", border: "1px solid #2c2820", borderRadius: 8, overflow: "hidden", marginBottom: 16 }}>
            {[
              { name: "Supabase", purpose: "User authentication, session management", data: "Email, password hash, IP at login" },
              { name: "MetaAPI", purpose: "Real-time broker connection and trade execution", data: "Broker login credentials, account instructions" },
              { name: "RevenueCat", purpose: "Subscription management and entitlement verification", data: "App User ID, purchase tokens" },
              { name: "Stripe", purpose: "Payment processing", data: "Payment card data (processed directly by Stripe)" },
              { name: "Firebase / FCM", purpose: "Android and web push notifications", data: "Device push token" },
              { name: "TradingView", purpose: "Optional companion indicator (separate product)", data: "None — no data is shared" },
            ].map((r, i) => (
              <div key={r.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 16, padding: "12px 16px", borderBottom: i < 5 ? "1px solid #2c2820" : "none", fontSize: 12 }}>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600, color: "#d4a432" }}>{r.name}</div>
                <div style={{ color: "#a09890" }}>{r.purpose}</div>
                <div style={{ color: "#7a7268" }}>{r.data}</div>
              </div>
            ))}
          </div>
          <p>We do not sell, rent, or trade your personal information to any third party.</p>
        </Section>

        <Section title="5. Your Rights">
          <p style={{ marginBottom: 16 }}>Depending on your location, you may have the following rights regarding your personal data:</p>
          <Li><strong style={{ color: "#ede9e0" }}>Access</strong> — Request a copy of the data we hold about you</Li>
          <Li><strong style={{ color: "#ede9e0" }}>Correction</strong> — Ask us to correct inaccurate data</Li>
          <Li><strong style={{ color: "#ede9e0" }}>Deletion</strong> — Request deletion of your account and associated data</Li>
          <Li><strong style={{ color: "#ede9e0" }}>Portability</strong> — Request an export of your trade journal data in CSV format</Li>
          <Li><strong style={{ color: "#ede9e0" }}>Opt-out of notifications</strong> — Disable push alerts at any time in Settings → Notifications</Li>
          <Li><strong style={{ color: "#ede9e0" }}>Disconnect your broker</strong> — Remove MetaAPI credentials at any time in Settings → Accounts</Li>
          <p style={{ marginTop: 16 }}>To exercise any of these rights, contact us at <a href="mailto:privacy@bobifx.com" style={{ color: "#d4a432", textDecoration: "none" }}>privacy@bobifx.com</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="6. Cookies & Local Storage">
          <p style={{ marginBottom: 12 }}>The web platform uses browser localStorage and sessionStorage to:</p>
          <Li>Persist your Supabase authentication session so you remain logged in across page refreshes</Li>
          <Li>Cache your active account ID and UI preferences (theme, guide checklist state)</Li>
          <p style={{ marginTop: 12 }}>We do not use third-party advertising cookies. No cross-site tracking.</p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>The Service is not directed to children under 18 years of age. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us with personal data, contact us immediately at <a href="mailto:privacy@bobifx.com" style={{ color: "#d4a432", textDecoration: "none" }}>privacy@bobifx.com</a>.</p>
        </Section>

        <Section title="8. International Data Transfers">
          <p>BobiFX operates globally. Your data may be processed in countries outside your own, including the United States, where Supabase and RevenueCat infrastructure is hosted. We ensure appropriate safeguards are in place for all international transfers in accordance with applicable data protection laws.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via an in-app notification or email. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the Service after changes are posted constitutes your acceptance of the revised policy.</p>
        </Section>

        <Section title="10. Contact">
          <p style={{ marginBottom: 12 }}>For privacy-related enquiries, data access requests, or to report a concern:</p>
          <div style={{ background: "#171511", border: "1px solid #2c2820", borderRadius: 8, padding: "20px 24px" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "#ede9e0", marginBottom: 8 }}>BobiFX</div>
            <div style={{ fontSize: 13, color: "#a09890", marginBottom: 4 }}>Privacy enquiries: <a href="mailto:privacy@bobifx.com" style={{ color: "#d4a432", textDecoration: "none" }}>privacy@bobifx.com</a></div>
            <div style={{ fontSize: 13, color: "#a09890" }}>General support: <a href="mailto:support@bobifx.com" style={{ color: "#d4a432", textDecoration: "none" }}>support@bobifx.com</a></div>
          </div>
        </Section>

        <div style={{ paddingTop: 32, borderTop: "1px solid #2c2820", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: "#7a7268", textDecoration: "none" }}>← Back to BobiFX</Link>
          <Link to="/terms" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: "#7a7268", textDecoration: "none" }}>Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}
