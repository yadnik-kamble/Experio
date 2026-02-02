import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PopularSection from "../components/PopularSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-blue-100 to-cyan-100">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PopularSection />
      <Footer />
    </div>
  );
};

export default Home;
