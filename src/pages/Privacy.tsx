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
              Last updated: January 21, 2026
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                BobiTrades ("we", "our", or "us") operates the BobiTrades mobile
                application (the "App"). This Privacy Policy explains how we
                collect, use, and protect your information.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-display font-medium text-foreground">
                  a. Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Email address</li>
                  <li>Username or profile name</li>
                  <li>Authentication identifiers (if you sign in)</li>
                </ul>

                <h3 className="text-xl font-display font-medium text-foreground">
                  b. Trading & App Data
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Trade entries you manually log</li>
                  <li>Performance analytics</li>
                  <li>App usage data (features used, session duration)</li>
                </ul>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-foreground font-medium">Important:</p>
                  <p className="text-muted-foreground">
                    We do not access or control your brokerage or trading
                    accounts directly unless explicitly stated.
                  </p>
                </div>

                <h3 className="text-xl font-display font-medium text-foreground">
                  c. Automatically Collected Data
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information (OS version, app version)</li>
                  <li>Crash logs and performance data</li>
                  <li>Anonymous analytics</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain app functionality</li>
                  <li>Generate trading analytics and reports</li>
                  <li>Improve app performance and user experience</li>
                  <li>Communicate important updates or support messages</li>
                  <li>Ensure security and prevent abuse</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  3. Data Storage & Security
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Your data is stored securely using industry-standard
                    practices
                  </li>
                  <li>
                    We take reasonable steps to protect your data from
                    unauthorized access
                  </li>
                  <li>
                    No system is 100% secure, but we continuously improve our
                    safeguards
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  4. Data Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    We do not sell your personal data.
                  </strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may share data only when:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Required by law</li>
                  <li>Necessary to protect our rights or users</li>
                  <li>
                    Using trusted third-party services (analytics, hosting)
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  5. Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The app may use third-party services such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Analytics providers</li>
                  <li>Error tracking tools</li>
                  <li>Cloud storage services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  These services have their own privacy policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  6. Your Rights
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
                    href="mailto:amdevfred@gmail.com"
                    className="text-primary hover:text-primary-soft transition-colors"
                  >
                    amdevfred@gmail.com
                  </a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  7. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  BobiTrades is not intended for users under 13. We do not
                  knowingly collect data from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  8. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted within the app or on our website.
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
                    href="mailto:amdevfred@gmail.com"
                    className="text-primary hover:text-primary-soft transition-colors"
                  >
                    amdevfred@gmail.com
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
