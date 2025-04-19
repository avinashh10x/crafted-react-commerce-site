
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import { Check } from 'lucide-react';

const MobileApp = ({ cartItems }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const features = [
    "Exclusive app-only discounts and offers",
    "Faster ordering with saved addresses and payment methods",
    "Real-time order tracking and delivery updates",
    "Easy reordering of your favorite meals",
    "Personalized recommendations based on your preferences",
    "Loyalty program to earn points with every order"
  ];
  
  return (
    <div>
      <Header 
        cartItemCount={cartItems.length} 
        openLoginModal={() => setIsAuthModalOpen(true)}
      />
      
      <div className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mobile App</h1>
          <p className="text-white/80 max-w-2xl">
            Download our app for a better ordering experience on the go.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Experience Tomato on Mobile</h2>
            <p className="text-gray-600 mb-8">
              Our mobile app puts the power of Tomato in your pocket. Enjoy a seamless ordering experience with exclusive features designed to make your life easier.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-primary" size={16} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
              
              <a 
                href="#" 
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://via.placeholder.com/300x600?text=App+Screenshot"
                alt="Tomato app screenshot"
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary/10 w-64 h-64 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 bg-primary/10 w-32 h-32 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Download the App</h3>
              <p className="text-gray-600">
                Get the Tomato app from the App Store or Google Play Store for free.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Create Your Account</h3>
              <p className="text-gray-600">
                Sign up with your email or social media accounts in just a few seconds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Start Ordering</h3>
              <p className="text-gray-600">
                Browse the menu, add items to your cart, and enjoy your delicious food!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default MobileApp;
