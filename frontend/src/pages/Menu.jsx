
import { useState } from 'react';
import Header from '../components/Header';
import FoodCategories from '../components/FoodCategories';
import FeaturedDishes from '../components/FeaturedDishes';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const Menu = ({ cartItems, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return (
    <div>
      <Header 
        cartItemCount={cartItems.length} 
        openLoginModal={() => setIsAuthModalOpen(true)}
      />
      
      <div className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-white/80 max-w-2xl">
            Explore our diverse selection of dishes crafted with fresh ingredients and expert culinary techniques.
          </p>
        </div>
      </div>
      
      <FoodCategories 
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      
      <FeaturedDishes 
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default Menu;
