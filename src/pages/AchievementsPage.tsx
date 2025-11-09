import Navigation from "@/components/Navigation";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const AchievementsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Achievements />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AchievementsPage;
