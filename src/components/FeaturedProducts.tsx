
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Ayurvedic Hair Oil",
    price: 599,
    description: "Traditional hair oil formulated with natural ingredients to promote hair growth and prevent hair loss.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 2,
    name: "Chyawanprash",
    price: 450,
    description: "Immunity-boosting ancient Ayurvedic formula made with herbs, spices, honey, and amla.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  },
  {
    id: 3,
    name: "Triphala Powder",
    price: 350,
    description: "Classic Ayurvedic formulation made from three fruits to support digestive health.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 4,
    name: "Ashwagandha Capsules",
    price: 499,
    description: "Natural stress-relieving adaptogen to support overall well-being and vitality.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Products</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our premium range of authentic Ayurvedic products, handcrafted using traditional methods and the finest natural ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48">
                <img 
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="font-medium text-ayurveda-green">₹{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-ayurveda-green hover:bg-ayurveda-green/90 text-white">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline" className="border-ayurveda-green text-ayurveda-green hover:bg-ayurveda-green hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
