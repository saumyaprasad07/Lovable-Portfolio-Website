import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import RecommendationsComponent from "@/components/Recommendations";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Recommendations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Recommendations | Saumya Prasad</title>
        <meta 
          name="description" 
          content="Read professional recommendations and testimonials from colleagues and collaborators who have worked with Saumya Prasad." 
        />
        <meta name="keywords" content="recommendations, testimonials, professional endorsements, references, data science, machine learning" />
        <link rel="canonical" href="https://yourdomain.com/recommendations" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <RecommendationsComponent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Recommendations;
