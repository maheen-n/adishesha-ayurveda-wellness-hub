
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  imageSrc: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Ayurvedic Hair Oil",
    category: "hair",
    price: 599,
    description: "Traditional hair oil formulated with natural ingredients to promote hair growth and prevent hair loss.",
    benefits: ["Promotes hair growth", "Prevents premature graying", "Strengthens hair roots", "Reduces dandruff"],
    ingredients: ["Coconut Oil", "Brahmi", "Amla", "Bhringraj", "Neem"],
    usage: "Apply to scalp and hair, gently massage, and leave for 30 minutes before washing.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 2,
    name: "Chyawanprash",
    category: "supplements",
    price: 450,
    description: "Immunity-boosting ancient Ayurvedic formula made with herbs, spices, honey, and amla.",
    benefits: ["Boosts immunity", "Improves digestion", "Enhances respiratory health", "Increases energy"],
    ingredients: ["Amla", "Ashwagandha", "Honey", "Ghee", "Shatavari"],
    usage: "Take 1 teaspoon twice daily with warm milk or water.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  },
  {
    id: 3,
    name: "Triphala Powder",
    category: "supplements",
    price: 350,
    description: "Classic Ayurvedic formulation made from three fruits to support digestive health.",
    benefits: ["Improves digestion", "Cleanses the colon", "Reduces bloating", "Supports healthy elimination"],
    ingredients: ["Amalaki", "Bibhitaki", "Haritaki"],
    usage: "Mix 1 teaspoon in warm water and consume before bedtime.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 4,
    name: "Ashwagandha Capsules",
    category: "supplements",
    price: 499,
    description: "Natural stress-relieving adaptogen to support overall well-being and vitality.",
    benefits: ["Reduces stress and anxiety", "Improves sleep quality", "Enhances energy levels", "Supports immune function"],
    ingredients: ["Ashwagandha Root Extract"],
    usage: "Take 1 capsule twice daily after meals with warm water.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  },
  {
    id: 5,
    name: "Neem Face Pack",
    category: "skincare",
    price: 299,
    description: "Purifying face pack that deeply cleanses and treats acne-prone skin.",
    benefits: ["Treats acne", "Removes excess oil", "Brightens skin", "Reduces inflammation"],
    ingredients: ["Neem", "Fuller's Earth", "Turmeric", "Sandalwood"],
    usage: "Apply evenly on face, leave for 15-20 minutes, then rinse with cool water.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 6,
    name: "Kumkumadi Oil",
    category: "skincare",
    price: 799,
    description: "Luxurious facial oil for radiant and youthful skin.",
    benefits: ["Reduces dark spots", "Improves complexion", "Prevents early aging", "Nourishes skin"],
    ingredients: ["Saffron", "Sandalwood", "Rose", "Vetiver", "Sesame Oil"],
    usage: "Apply a few drops on clean face before bedtime, gently massage until absorbed.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  },
  {
    id: 7,
    name: "Joint Care Tablets",
    category: "wellness",
    price: 550,
    description: "Herbal supplement for supporting joint health and mobility.",
    benefits: ["Relieves joint pain", "Reduces inflammation", "Improves flexibility", "Strengthens joints"],
    ingredients: ["Shallaki", "Guggulu", "Ashwagandha", "Turmeric"],
    usage: "Take 1 tablet twice daily after meals with warm water.",
    imageSrc: "/lovable-uploads/dd224d87-a729-4aaf-b4b6-51fa30ffce46.png"
  },
  {
    id: 8,
    name: "Digestive Churna",
    category: "wellness",
    price: 320,
    description: "Traditional herbal powder blend to improve digestion and metabolism.",
    benefits: ["Enhances digestion", "Reduces acidity", "Prevents gas formation", "Balances appetite"],
    ingredients: ["Cumin", "Fennel", "Coriander", "Ginger", "Black Pepper"],
    usage: "Take ½ teaspoon after meals with warm water or buttermilk.",
    imageSrc: "/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png"
  },
];

const Categories = ["all", "supplements", "skincare", "hair", "wellness"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  const addToCart = (product: Product) => {
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-black py-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Discover our range of authentic Ayurvedic products, handcrafted using traditional methods and the finest natural ingredients.
          </p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-ayurveda-beige">
                {Categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
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
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="mb-3">
                        <h4 className="font-medium text-sm mb-1">Benefits:</h4>
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          {product.benefits.slice(0, 2).map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-medium text-ayurveda-green">₹{product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-ayurveda-green hover:bg-ayurveda-green/90 text-white"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
