import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import InvestmentPlans from "@/components/InvestmentPlans";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
    <HeroSection />
  </section>

  <section id="features">
    <FeaturesSection />
  </section>

  <section id="about">
    <AboutSection />
  </section>
        <StatsSection />
        <section id="plans">
    <InvestmentPlans />
  </section>

  <section id="roadmap">
    <RoadmapSection />
  </section>
        <TeamSection />
        <section id="faq">
    <FAQSection />
  </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
