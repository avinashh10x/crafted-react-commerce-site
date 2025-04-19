
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative">
      <div 
        className="hero-section bg-cover bg-center w-full h-[500px] flex items-center justify-start p-8"
        style={{ backgroundImage: "url('/lovable-uploads/c7e3e62b-823b-42a8-a1b7-c8b12ee7bfc8.png')" }}
      >
        <div className="overlay absolute inset-0"></div>
        <div className="container relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white mb-4">
              Order your favourite food here
            </h1>
            <p className="text-gray-200 mb-6">
              Choose from a diverse menu, featuring a tempting selection of dishes that will satisfy every craving. Whether you prefer bold flavors or comforting classics, each dish is crafted with fresh ingredients for an unforgettable experience.
            </p>
            <Link 
              to="/menu" 
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
