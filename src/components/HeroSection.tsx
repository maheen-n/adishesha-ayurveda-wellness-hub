
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-section h-screen flex items-center justify-center text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Aadisesha</h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Ayurvedics</h1>
        <p className="text-xl md:text-2xl mb-8">Ayurveda is the Science of Life</p>
        <Link to="/products">
          <Button size="lg" className="bg-ayurveda-green hover:bg-ayurveda-green/90 text-white px-8 py-6 text-lg">
            Discover Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
