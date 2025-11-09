import Navigation from "@/components/Navigation";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Education />
      <Experience />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CareerPage;
