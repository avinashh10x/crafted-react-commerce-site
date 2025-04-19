
import { useState } from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const CartPage = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return (
    <div>
      <Header 
        cartItemCount={cartItems.length} 
        openLoginModal={() => setIsAuthModalOpen(true)}
      />
      
      <div className="min-h-[60vh]">
        <Cart 
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default CartPage;
