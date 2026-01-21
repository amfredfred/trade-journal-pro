import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free to download",
  "No credit card required",
  "Full analytics included",
];

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient-accent">Trading?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download BobiTrades today and start your journey to becoming a more
            disciplined, profitable trader.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="accent" size="xl" asChild>
            <a
              href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Get BobiTrades Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          {/* Google Play badge */}
          <div className="mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-16 mx-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
