
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Kochi",
    comment: "I've been using Adishesha's Ayurvedic products for over a year now, and the difference in my overall well-being is remarkable. Their Triphala powder has completely transformed my digestive health."
  },
  {
    id: 2,
    name: "Priya Menon",
    location: "Trivandrum",
    comment: "The Panchakarma treatment I received at Adishesha was truly life-changing. The therapists were knowledgeable, and the facility was clean and peaceful. I've recommended them to all my friends."
  },
  {
    id: 3,
    name: "Thomas Mathew",
    location: "Kottayam",
    comment: "As someone who was skeptical about Ayurvedic medicine, I'm now a true believer after trying Adishesha's products. Their Ashwagandha capsules have significantly reduced my stress levels."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our valued customers about their experiences with our products and services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic text-gray-700">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
