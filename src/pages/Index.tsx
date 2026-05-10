import Header        from "@/components/landing/Header";
import Hero          from "@/components/landing/Hero";
import StatsBar      from "@/components/landing/StatsBar";
import WhatItIs      from "@/components/landing/WhatItIs";
import HowItWorks    from "@/components/landing/HowItWorks";
import WhyUseIt      from "@/components/landing/WhyUseIt";
import Features      from "@/components/landing/Features";
import Backtest      from "@/components/landing/Backtest";
import WhoItsFor     from "@/components/landing/WhoItsFor";
import Pricing       from "@/components/landing/Pricing";
import FAQ           from "@/components/landing/FAQ";
import Footer        from "@/components/landing/Footer";

const Index = () => (
  <div className="bfx-page" style={{ background: "var(--bg)", minHeight: "100vh" }}>
    <Header />
    <Hero />
    <StatsBar />
    <WhatItIs />
    <HowItWorks />
    <WhyUseIt />
    <Features />
    <Backtest />
    <WhoItsFor />
    <Pricing />
    <FAQ />
    <Footer />
  </div>
);

export default Index;
