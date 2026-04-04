import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Bobi<span className="text-primary">Trades</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-4">
              Your personal trading journal and analytics companion. Track,
              analyze, and improve your trading performance.
            </p>
            <a
              href="mailto:amdevfred@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-soft transition-colors"
            >
              <Mail className="w-4 h-4" />
              amdevfred@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BobiTrades. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ for traders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
