import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import screenshot1 from "@/assets/screenshots/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshots/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshots/screenshot-3.jpg";
import screenshot4 from "@/assets/screenshots/screenshot-4.jpg";
import screenshot5 from "@/assets/screenshots/screenshot-5.jpg";
import screenshot6 from "@/assets/screenshots/screenshot-6.jpg";

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center justify-center">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center py-16 lg:py-24 gap-12 lg:gap-16">
          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Trade Smarter, Not Harder
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Master Your{" "}
              <span className="text-gradient-primary">Trading</span>{" "}
              Journey
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Track, analyze, and improve your trades with powerful analytics.
              BobiTrades is your personal trading journal designed to help you
              become a consistently profitable trader.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Fast Logging</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Analytics</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
                <Shield className="w-4 h-4 text-trust" />
                <span className="text-sm text-muted-foreground">Secure Data</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download Free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </motion.div>

          {/* App Screenshots Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-6xl"
          >
            <div className="relative">
              {/* Glow behind screenshots */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              
              {/* Screenshots Grid */}
              <div className="relative grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 shadow-card bg-card/50 backdrop-blur-sm">
                      <img
                        src={screenshot}
                        alt={`BobiTrades App Screenshot ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
