
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { calendar } from "lucide-react";
import { toast } from "sonner";

const serviceCategories = [
  {
    id: 1,
    name: "Detoxification Therapies",
    description: "Comprehensive cleansing procedures to eliminate toxins and restore balance to the body.",
    services: [
      {
        id: "panchakarma",
        name: "Panchakarma",
        duration: "7-21 days",
        price: "₹15,000 - ₹45,000",
        description: "A complete detoxification program that includes five therapeutic procedures to eliminate toxins from the body. The treatment is personalized based on your body constitution and specific health concerns.",
        benefits: [
          "Deep cleansing of body tissues",
          "Removal of accumulated toxins",
          "Restoration of metabolic balance",
          "Rejuvenation of body and mind",
          "Prevention of disease and promotion of longevity"
        ]
      },
      {
        id: "virechana",
        name: "Virechana (Therapeutic Purgation)",
        duration: "3-7 days",
        price: "₹8,000 - ₹12,000",
        description: "A specialized treatment that involves therapeutic purgation to eliminate excess Pitta dosha from the body. The procedure includes preparation with internal oleation, followed by administration of herbal purgatives.",
        benefits: [
          "Balances Pitta dosha",
          "Improves digestion and metabolism",
          "Clears toxins from liver and gallbladder",
          "Benefits skin conditions and inflammatory disorders",
          "Enhances clarity of mind"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Relaxation & Rejuvenation",
    description: "Therapeutic treatments designed to promote deep relaxation and revitalization of the body and mind.",
    services: [
      {
        id: "abhyanga",
        name: "Abhyanga (Full Body Massage)",
        duration: "60-90 minutes",
        price: "₹2,500 - ₹3,500",
        description: "A synchronized full-body massage performed with warm herbal oils specifically selected for your body type. The treatment involves rhythmic, long strokes to balance the doshas and promote well-being.",
        benefits: [
          "Improves blood circulation",
          "Nourishes and softens the skin",
          "Reduces stress and anxiety",
          "Promotes better sleep",
          "Enhances muscle tone and strength"
        ]
      },
      {
        id: "shirodhara",
        name: "Shirodhara",
        duration: "45-60 minutes",
        price: "₹3,000 - ₹4,000",
        description: "A deeply relaxing treatment involving a continuous stream of warm herbal oil poured onto the forehead. This therapy calms the central nervous system and induces a meditative state.",
        benefits: [
          "Calms the mind and reduces anxiety",
          "Improves sleep quality",
          "Relieves headaches and migraines",
          "Enhances mental clarity",
          "Nourishes the hair and scalp"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Therapeutic Treatments",
    description: "Specialized treatments targeting specific health concerns and promoting healing.",
    services: [
      {
        id: "nasya",
        name: "Nasya (Nasal Administration)",
        duration: "30-45 minutes",
        price: "₹1,800 - ₹2,500",
        description: "A therapeutic treatment involving administration of herbal oils or powders through the nasal passages. The treatment begins with a gentle facial massage and steam application to prepare the nasal passages.",
        benefits: [
          "Clears sinus congestion",
          "Relieves headaches",
          "Improves voice quality",
          "Enhances sensory perception",
          "Benefits conditions related to ears, nose, and throat"
        ]
      },
      {
        id: "kati-basti",
        name: "Kati Basti",
        duration: "45-60 minutes",
        price: "₹2,200 - ₹3,000",
        description: "A specialized treatment for lower back pain where a dam is created on the lower back using dough, and warm medicated oil is poured and retained in the affected area for a specific period.",
        benefits: [
          "Relieves chronic lower back pain",
          "Strengthens the spine",
          "Reduces inflammation in the spinal region",
          "Improves mobility",
          "Benefits those with disc problems and sciatica"
        ]
      }
    ]
  }
];

const Services = () => {
  const bookAppointment = () => {
    toast.success("Your appointment request has been received. We will contact you shortly to confirm.");
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-black py-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Experience authentic Ayurvedic treatments administered by our expert practitioners to restore balance and promote wellness.
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Authentic Ayurvedic Therapies</h2>
            <p className="text-gray-600">
              Our treatments are administered by skilled therapists with years of experience in traditional Ayurvedic practices. 
              Each therapy is tailored to your specific body constitution (dosha) and health needs.
            </p>
          </div>
          
          <div className="space-y-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-ayurveda-beige rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <Card key={service.id} className="overflow-hidden">
                        <Accordion type="single" collapsible>
                          <AccordionItem value={service.id}>
                            <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50">
                              <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                                <span className="font-bold">{service.name}</span>
                                <div className="flex flex-col md:flex-row md:gap-4 text-sm text-gray-500">
                                  <span>Duration: {service.duration}</span>
                                  <span className="hidden md:block">|</span>
                                  <span>Price: {service.price}</span>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4">
                              <p className="mb-4 text-gray-600">{service.description}</p>
                              <h4 className="font-medium mb-2">Benefits:</h4>
                              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                                {service.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
                              </ul>
                              <Button 
                                onClick={bookAppointment}
                                className="bg-ayurveda-green hover:bg-ayurveda-green/90 text-white"
                              >
                                <calendar className="mr-2 h-4 w-4" />
                                Book Appointment
                              </Button>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-ayurveda-beige">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How should I prepare for an Ayurvedic treatment?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend arriving 15 minutes before your appointment time. Wear comfortable, loose clothing that you don't mind getting oil on. Avoid heavy meals 1-2 hours before the treatment. For best results, try to stay relaxed and avoid strenuous activities for the remainder of the day after your treatment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Are Ayurvedic treatments safe for everyone?
                </AccordionTrigger>
                <AccordionContent>
                  While Ayurvedic treatments are generally safe, certain conditions such as pregnancy, serious heart conditions, or acute illnesses may require special consideration. During your initial consultation, our physicians will conduct a thorough assessment to determine which treatments are best suited for your specific health needs and conditions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How long will it take to see results from Ayurvedic treatments?
                </AccordionTrigger>
                <AccordionContent>
                  The timeframe for results varies depending on the condition being treated, your body constitution, and how closely you follow the recommended treatment plan. Some people experience immediate relief, while chronic conditions may require consistent treatment over a period of weeks or months. Our physicians will provide you with a realistic timeline based on your specific situation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Do I need a consultation before booking a treatment?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we recommend an initial consultation with our Ayurvedic physician before undergoing any treatments. This allows us to understand your health concerns, assess your body constitution (dosha), and create a personalized treatment plan that will be most effective for your specific needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can Ayurvedic treatments be combined with my current medical treatments?
                </AccordionTrigger>
                <AccordionContent>
                  In many cases, Ayurvedic treatments can complement conventional medical treatments. However, it's important to inform both your conventional doctor and our Ayurvedic physician about all treatments and medications you are currently receiving. This ensures that your care is coordinated and that there are no potential interactions between different treatment approaches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
