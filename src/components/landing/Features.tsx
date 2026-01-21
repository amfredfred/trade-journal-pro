import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  TrendingUp,
  Lock,
  Smartphone,
  Target,
  Sparkles,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Account Summary",
    description:
      "Get instant AI-generated insights on your trading performance with total balance, win rate, profit factor, and P&L analytics at a glance.",
    color: "accent",
    highlight: true,
  },
  {
    icon: Brain,
    title: "AI Strategy Optimizer",
    description:
      "Create, manage, and optimize your trading strategies with AI-powered recommendations. Track active strategies with trading sessions and alerts.",
    color: "trust",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Trade Journaling",
    description:
      "Log every trade with detailed notes, entry/exit prices, emotions, and trade plans. Track your psychology before and after each trade.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get powerful insights with win rates, profit factors, drawdown analysis, best/worst trades, and custom performance metrics.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description:
      "Track your P&L over time with beautiful charts. Monitor peak and low balances, and visualize your trading calendar.",
    color: "trust",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set trading goals and track your progress. Stay motivated with achievement milestones and daily targets.",
    color: "primary",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your trading data is encrypted and stored securely. We never access your brokerage accounts directly.",
    color: "accent",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Designed for traders on the go. Log trades instantly right from your phone anytime, anywhere.",
    color: "trust",
  },
];

const Features = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "accent":
        return {
          bg: "bg-accent/10",
          icon: "text-accent",
          border: "group-hover:border-accent/50",
        };
      case "trust":
        return {
          bg: "bg-trust/10",
          icon: "text-trust",
          border: "group-hover:border-trust/50",
        };
      default:
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          border: "group-hover:border-primary/50",
        };
    }
  };

  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

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
            Everything You Need to{" "}
            <span className="text-gradient-primary">Trade Better</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            BobiTrades gives you the tools to understand your trading patterns,
            eliminate mistakes, and grow your profits consistently.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full p-6 lg:p-8 rounded-2xl bg-gradient-card border ${feature.highlight ? 'border-primary/40 ring-1 ring-primary/20' : 'border-border'} ${colors.border} transition-all duration-300 hover:shadow-card ${feature.highlight ? 'relative overflow-hidden' : ''}`}
                >
                  {feature.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-primary/20 to-transparent w-32 h-32 blur-2xl" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                      >
                        <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      {feature.highlight && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          AI-Powered
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
