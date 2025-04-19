
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FoodCategories from '../components/FoodCategories';
import FeaturedDishes from '../components/FeaturedDishes';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const HomePage = ({ cartItems, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return (
    <div>
      <Header 
        cartItemCount={cartItems.length} 
        openLoginModal={() => setIsAuthModalOpen(true)}
      />
      
      <HeroSection />
      
      <FoodCategories 
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      
      <FeaturedDishes 
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
      
      <DownloadApp />
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
