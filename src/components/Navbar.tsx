
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute w-full z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/98711330-677a-4f24-b2d1-f4177152b77c.png" 
            alt="Adishesha Ayurvedics Logo" 
            className="h-16 w-16"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-white hover:text-ayurveda-cream transition duration-300 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-ayurveda-cream transition duration-300 font-medium">
            About Us
          </Link>
          <Link to="/products" className="text-white hover:text-ayurveda-cream transition duration-300 font-medium">
            Products
          </Link>
          <Link to="/services" className="text-white hover:text-ayurveda-cream transition duration-300 font-medium">
            Services
          </Link>
          <Link to="/contact" className="bg-ayurveda-green text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
            Contact Us
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full">
          <div className="flex flex-col space-y-3 p-4">
            <Link 
              to="/" 
              className="text-white hover:text-ayurveda-cream py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-ayurveda-cream py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-ayurveda-cream py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-ayurveda-cream py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-ayurveda-cream py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
