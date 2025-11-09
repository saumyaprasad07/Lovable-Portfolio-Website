import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsTools from "@/components/SkillsTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SkillsTools />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
