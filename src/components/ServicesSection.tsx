
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Abhyanga",
    description: "Full body massage with herbal oils to improve circulation and promote relaxation."
  },
  {
    id: 2,
    title: "Shirodhara",
    description: "Continuous flow of warm oil on the forehead to calm the mind and nervous system."
  },
  {
    id: 3,
    title: "Panchakarma",
    description: "Five-fold detoxification therapy to eliminate toxins and restore balance."
  },
  {
    id: 4,
    title: "Nasya",
    description: "Nasal administration of herbal oils to clear the head and sinuses."
  },
  {
    id: 5,
    title: "Basti",
    description: "Herbal enema therapy to cleanse and nourish the colon."
  },
  {
    id: 6,
    title: "Ayurvedic Consultation",
    description: "Personalized health assessment and treatment plan based on your body constitution."
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-ayurveda-beige">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the ancient healing traditions of Ayurveda through our authentic and effective therapies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services">
            <Button className="bg-ayurveda-green hover:bg-ayurveda-green/90 text-white">
              Learn More About Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
