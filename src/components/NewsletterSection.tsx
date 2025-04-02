
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // In a real implementation, you would send this to your backend
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };
  
  return (
    <section className="section-padding bg-ayurveda-green text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive the latest updates on our products, 
            special offers, and Ayurvedic health tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black"
              required
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="bg-white text-ayurveda-green hover:bg-ayurveda-cream"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
