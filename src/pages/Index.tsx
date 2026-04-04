import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import BrokerStrip from "@/components/landing/BrokerStrip";
import Backtest from "@/components/landing/Backtest";
import TVStrip from "@/components/landing/TVStrip";
import Pricing from "@/components/landing/Pricing";
import MobileApp from "@/components/landing/MobileApp";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div style={{ background: "#0d0c0a", minHeight: "100vh" }}>
    <Header />
    <Hero />
    <StatsBar />
    <HowItWorks />
    <Features />
    <BrokerStrip />
    <Backtest />
    <TVStrip />
    <Pricing />
    <MobileApp />
    <CTA />
    <Footer />
  </div>
);

export default Index;
