
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import HomePage from './HomePage';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tomatoCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart data:', error);
      }
    }
  }, []);
  
  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tomatoCart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Add item to cart
  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // If item exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        toast.success(`Added another ${item.name} to your cart`);
        return updatedItems;
      } else {
        // If item doesn't exist, add it with quantity 1
        toast.success(`${item.name} added to your cart`);
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  // Update item quantity in cart
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === itemId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from your cart`);
      }
      return prevItems.filter(item => item.id !== itemId);
    });
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.info('Your cart has been cleared');
  };
  
  return (
    <HomePage 
      cartItems={cartItems}
      addToCart={addToCart}
    />
  );
};

export default Index;
