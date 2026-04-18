import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features",     href: "#features"     },
    { label: "Backtest",     href: "#backtest"      },
    { label: "Pricing",      href: "#pricing"       },
    { label: "FAQ",          href: "#faq"           },
  ];
  return (
    <header className="bfx-nav">
      <Link to="/" className="bfx-nav-logo" aria-label="Bobi's Quote — home">
        <div className="bfx-logo-mark"><img src="/bobi-foreground.png" alt="Bobi's Quote logo" width={28} height={28} /></div>
        <span className="bfx-nav-brand">Bobi&apos;s Quote</span>
      </Link>
      <nav className="bfx-nav-links" aria-label="Main navigation">
        {nav.map(l => <a key={l.label} href={l.href} className="bfx-nav-link">{l.label}</a>)}
      </nav>
      <div className="bfx-nav-cta">
        <a href="https://app.bobisquote.com/login" className="bfx-btn-ghost" style={{ fontSize: 14 }}>Log in</a>
        <a href="https://app.bobisquote.com/login" className="bfx-btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Get started →</a>
      </div>
      <button className="bfx-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bfx-mobile-menu">
            {nav.map(l => <a key={l.label} href={l.href} className="bfx-mobile-link" onClick={() => setOpen(false)}>{l.label}</a>)}
            <div style={{ height: 1, background: "var(--border)", margin: "4px 0" }} />
            <Link to="/terms"   className="bfx-mobile-link" style={{ fontSize: 13, color: "var(--muted)" }} onClick={() => setOpen(false)}>Terms of Service</Link>
            <Link to="/privacy" className="bfx-mobile-link" style={{ fontSize: 13, color: "var(--muted)" }} onClick={() => setOpen(false)}>Privacy Policy</Link>
            <a href="https://app.bobisquote.com/login" className="bfx-mobile-cta-btn">Get started →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
