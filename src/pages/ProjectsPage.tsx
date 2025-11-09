import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectsPage;
