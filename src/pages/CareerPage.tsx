import Navigation from "@/components/Navigation";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            My Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A path of continuous learning, growth, and impactful experiences in data analytics and business intelligence
          </p>
        </div>
      </section>

      <Education />
      <Experience />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CareerPage;
