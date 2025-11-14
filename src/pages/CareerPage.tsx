import Navigation from "@/components/Navigation";
import CareerTimeline from "@/components/CareerTimeline";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      <CareerTimeline />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CareerPage;
