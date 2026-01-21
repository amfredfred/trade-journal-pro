import { motion } from "framer-motion";
import { Download, Edit3, BarChart2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description:
      "Get BobiTrades free from the Google Play Store and create your account in seconds.",
  },
  {
    icon: Edit3,
    step: "02",
    title: "Log Your Trades",
    description:
      "Record every trade with entry/exit prices, position size, notes, and even screenshots.",
  },
  {
    icon: BarChart2,
    step: "03",
    title: "Analyze Performance",
    description:
      "Review detailed analytics to understand your win rate, risk-reward, and trading patterns.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Improve & Profit",
    description:
      "Use data-driven insights to refine your strategy and become a consistently profitable trader.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Get Started in{" "}
            <span className="text-gradient-accent">Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            BobiTrades makes it incredibly simple to start journaling your trades
            and improving your performance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                  <div className="w-full h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                </div>
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group hover:border-primary/50 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
