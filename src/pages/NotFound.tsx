
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ayurveda-beige">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-ayurveda-green mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="max-w-md mx-auto text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-ayurveda-green hover:bg-ayurveda-green/90 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
