import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Forex Trader",
    content:
      "BobiTrades completely changed how I approach trading. Being able to see my patterns and mistakes in data form has helped me cut my losses significantly.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Crypto Trader",
    content:
      "The analytics are incredible. I never realized how much my emotional trading was costing me until I started journaling with this app.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Stock Trader",
    content:
      "Simple, fast, and effective. I can log a trade in seconds and the insights I get are genuinely useful. Best trading journal I've used.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />

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
            Loved by{" "}
            <span className="text-gradient-primary">Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of traders who have improved their performance with
            BobiTrades.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
