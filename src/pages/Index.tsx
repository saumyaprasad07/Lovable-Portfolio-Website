import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Publications from "@/components/Publications";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Publications />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
