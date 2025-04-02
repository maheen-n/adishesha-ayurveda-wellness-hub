
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/98711330-677a-4f24-b2d1-f4177152b77c.png" 
                alt="Adishesha Ayurvedics Logo" 
                className="h-20 w-20"
              />
              <h3 className="text-xl md:text-2xl font-bold ml-2 uppercase">AADISESHA AYURVEDICS</h3>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-ayurveda-lightGreen transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ayurveda-lightGreen transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ayurveda-lightGreen transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-ayurveda-lightGreen transition duration-300">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-6 w-6 text-ayurveda-lightGreen flex-shrink-0" />
                <p>
                  Door No: 13/82A,<br />
                  Madapally P.O,<br />
                  Changanacherry,<br />
                  Kottayam,<br />
                  Kerala, Pin- 686546
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-6 w-6 text-ayurveda-lightGreen" />
                <a href="mailto:aadiseshaayurvedics@gmail.com" className="hover:text-ayurveda-lightGreen">
                  aadiseshaayurvedics@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-6 w-6 text-ayurveda-lightGreen" />
                <a href="tel:+914467134127" className="hover:text-ayurveda-lightGreen">
                  +91 4467134127
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Adishesha Ayurvedics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
