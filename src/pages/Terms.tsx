import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
              Terms of Use
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: January 21, 2026
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                By using the BobiTrades app, you agree to these Terms of Use.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using BobiTrades, you confirm that you have
                  read, understood, and agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not agree, do not use the app.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  2. Purpose of the App
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  BobiTrades is a trading journal and analytics tool designed to
                  help users track and analyze their trades.
                </p>
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-foreground font-medium">
                    We do not provide financial, investment, or trading advice.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  3. No Financial Advice Disclaimer
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    All data, analytics, and insights are for educational and
                    informational purposes only
                  </li>
                  <li>
                    You are solely responsible for your trading decisions
                  </li>
                  <li>We are not liable for any financial losses</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  4. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate information</li>
                  <li>Keep your login credentials secure</li>
                  <li>Use the app legally and responsibly</li>
                  <li>Not misuse, reverse-engineer, or abuse the app</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  5. Account Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Suspend or terminate accounts that violate these terms
                  </li>
                  <li>Remove content that is abusive, illegal, or harmful</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, branding, logos, and software belong to
                  BobiTrades.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Copy or redistribute the app</li>
                  <li>Use branding without permission</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  BobiTrades is provided "as is".
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Trading losses</li>
                  <li>Data inaccuracies caused by user input</li>
                  <li>Service interruptions or technical issues</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  8. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms at any time. Continued use of the
                  app means you accept the updated Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws applicable in your
                  jurisdiction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  10. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions or support, contact us at:{" "}
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

export default Terms;
