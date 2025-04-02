
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-lg text-gray-600">About Us</h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              Ayurvedic - Treatise<br />
              Tradition & Trust
            </h1>
            <div className="space-y-4">
              <p className="text-gray-700">
                A GMP certified Ayurvedic medicine manufacturing firm located at
                Madappally village, approx. 7km from Changanassery Town, Kottayam
                Dist, Kerala. We make all classical preparations and 5 patent products
                which are developed from our traditional thaliyolas.
              </p>
              <p className="text-gray-700">
                Aadisesha originated as a kitchen pharmacy at Kandankary, a small
                village of Kuttanadu Thaluk, Alappuzha Dist. before three decades. The
                ancestors of Aadisesha are Edassery Vaidyas, who were the court
                physicians of Chempakassery Dynasty, rulers of Ambalappuzha
                natturajyam. Edassery vaidyas were known for curing many diseases that
                were considered incurable and were rewarded by the king for their
                clinical excellence.
              </p>
            </div>
            <Link to="/about">
              <Button variant="default" className="bg-ayurveda-green hover:bg-ayurveda-green/90 text-white">
                Know more
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-0">
            <div className="col-span-2 sm:col-span-1">
              <img 
                src="/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png" 
                alt="Ayurvedic herbs and spices" 
                className="rounded-lg w-full h-56 object-cover"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <img 
                src="/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png" 
                alt="Ayurvedic preparation" 
                className="rounded-lg w-full h-56 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
