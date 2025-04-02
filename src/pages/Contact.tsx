
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    toast.success("Your message has been sent. We'll get back to you shortly!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-black py-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for inquiries, appointments, or feedback.
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our products, treatments, or would like to schedule an appointment, 
                our team is here to help. Fill out the form and we'll get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-ayurveda-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      Door No: 13/82A,<br />
                      Madapally P.O,<br />
                      Changanacherry,<br />
                      Kottayam,<br />
                      Kerala, Pin- 686546
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-ayurveda-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+914467134127" className="hover:text-ayurveda-green transition-colors">
                        +91 4467134127
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-ayurveda-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:aadiseshaayurvedics@gmail.com" className="hover:text-ayurveda-green transition-colors">
                        aadiseshaayurvedics@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-ayurveda-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-ayurveda-beige p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Full Name*</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address*</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone Number</label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject*</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Your Message*</label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-ayurveda-green hover:bg-ayurveda-green/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8081351917674!2d76.532864!3d9.374542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea7f74567b%3A0x9c1c8956f324a1b8!2sMadappally%2C%20Kerala%20686546!5e0!3m2!1sen!2sin!4v1622160047842!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Adishesha Ayurvedics Location"
        ></iframe>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
