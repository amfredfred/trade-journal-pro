import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective Date: March 2025
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, and protect your personal information when you use the App. By using the App you agree to the practices described here.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-display font-medium text-foreground">
                  1.1 Account Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you register, we collect your email address and any profile information you provide. This is used solely to manage your account and deliver the service.
                </p>

                <h3 className="text-xl font-display font-medium text-foreground">
                  1.2 Trading Account Connectivity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not store your broker username or password. When you connect a trading account, authentication is handled via a secure third-party API (MetaAPI). We store only a tokenised account reference required to communicate with that API on your behalf.
                </p>

                <h3 className="text-xl font-display font-medium text-foreground">
                  1.3 Usage Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect anonymised usage data (e.g. features used, session duration) to improve the App. This data is not linked to your identity and is never sold to third parties.
                </p>

                <h3 className="text-xl font-display font-medium text-foreground">
                  1.4 Push Notification Tokens
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you enable push notifications, we store your device push token to deliver trade idea alerts to your device. This token is used solely for that purpose.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain the App and its features.</li>
                  <li>To deliver trade idea notifications for your subscribed symbols.</li>
                  <li>To execute automated trades on your connected account when you have explicitly enabled auto trading.</li>
                  <li>To manage your subscription and process payments (handled by the app store; we do not store card details).</li>
                  <li>To respond to support requests.</li>
                  <li>To improve the App through anonymised analytics.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  3. Auto Trading & Account Data
                </h2>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-foreground font-medium">
                    Auto trading is opt-in only. We will never initiate trades on your connected account unless you have explicitly enabled auto trading in the App settings.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We do not access your account beyond what is required to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Read your current account balance to calculate position size (1% fixed risk).</li>
                  <li>Place and manage trades when auto trading is enabled.</li>
                  <li>Monitor open positions related to our signals.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can revoke account access at any time by disconnecting your account from within the App or directly from your broker platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  4. Data Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    We do not sell, rent, or share your personal data with third parties for marketing purposes.
                  </strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may share data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>MetaAPI — to facilitate trading account connectivity (subject to their own privacy policy).</li>
                  <li>Cloud infrastructure providers — to host the App backend (data is stored with industry-standard encryption).</li>
                  <li>Legal authorities — only if required by applicable law.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  6. Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request access to your data</li>
                  <li>Request data correction or deletion</li>
                  <li>Stop using the app at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To request data deletion, contact us at:{" "}
                  <a
                    href="mailto:support@bobitrades.com"
                    className="text-primary hover:text-primary-soft transition-colors"
                  >
                    support@bobitrades.com
                  </a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>Request deletion of your data.</li>
                  <li>Object to or restrict certain processing.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise any of these rights, please contact us through the support section of the App.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  8. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes via the App or email. Continued use of the App after changes are published constitutes acceptance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, contact us
                  at:{" "}
                  <a
                    href="mailto:support@bobitrades.com"
                    className="text-primary hover:text-primary-soft transition-colors"
                  >
                    support@bobitrades.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
