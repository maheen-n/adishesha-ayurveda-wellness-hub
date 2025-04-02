
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-black py-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Aadisesha Ayurvedics is a GMP certified Ayurvedic medicine manufacturing firm located at
                Madappally village, approximately 7km from Changanassery Town, Kottayam
                District, Kerala. We specialize in creating all classical preparations and 5 patent products
                which are developed from our traditional thaliyolas.
              </p>
              <p>
                What began as a small kitchen pharmacy at Kandankary, a small village of Kuttanadu Thaluk, 
                Alappuzha District, more than three decades ago has now grown into a trusted name in Ayurvedic 
                healthcare. The ancestors of Aadisesha are Edassery Vaidyas, who served as court
                physicians to the Chempakassery Dynasty, rulers of Ambalappuzha natturajyam.
              </p>
              <p>
                Edassery vaidyas gained renown for their ability to cure many diseases that
                were considered incurable, earning recognition and rewards from the king for their
                clinical excellence. This rich heritage of healing knowledge has been carefully preserved 
                and passed down through generations, forming the foundation of Aadisesha Ayurvedics today.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-ayurveda-beige">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Aadisesha Ayurvedics, we believe in the holistic approach of Ayurveda that treats 
                  the root cause of ailments rather than just the symptoms. Our philosophy is centered 
                  around the restoration of balance between mind, body, and spirit to achieve optimal health.
                </p>
                <p>
                  We are committed to preserving the authentic Ayurvedic traditions while incorporating 
                  modern technology to ensure the highest quality and efficacy of our products. Each formulation 
                  is prepared with meticulous attention to detail, following the ancient texts and guidelines.
                </p>
                <p>
                  Our mission is to make the benefits of Ayurveda accessible to all, promoting wellness 
                  and preventive healthcare through our products and services. We strive to educate and 
                  empower individuals to take charge of their health naturally.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/fec09247-9697-49a3-bcf0-20d949a9959e.png" 
                alt="Ayurvedic preparation" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-ayurveda-beige flex items-center justify-center">
                <span className="text-7xl text-ayurveda-green">V</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Vijay Kumar</h3>
              <p className="text-ayurveda-green mb-2">Chief Ayurvedic Physician</p>
              <p className="text-gray-600">
                With over 25 years of experience in Ayurvedic medicine, Dr. Kumar leads our team of practitioners.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-ayurveda-beige flex items-center justify-center">
                <span className="text-7xl text-ayurveda-green">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Sujatha Menon</h3>
              <p className="text-ayurveda-green mb-2">Product Development Head</p>
              <p className="text-gray-600">
                Dr. Menon specializes in formulating our unique Ayurvedic products, combining tradition with innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-ayurveda-beige flex items-center justify-center">
                <span className="text-7xl text-ayurveda-green">R</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Rajesh Nair</h3>
              <p className="text-ayurveda-green mb-2">Panchakarma Specialist</p>
              <p className="text-gray-600">
                An expert in traditional Panchakarma therapies, Dr. Nair oversees our treatment programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
