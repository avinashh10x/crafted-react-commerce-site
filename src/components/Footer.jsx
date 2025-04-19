
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="/images/tomato-logo-white.png" 
                alt="Tomato Logo"
                className="h-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x60?text=Tomato';
                }}
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Culpa delectus nihil consectetur, ex incidunt dolorem illo dolore possimus, omni sapiente sunt officiis ad exercitationem! Facad molestias site
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Delivery</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400">+91 987-654-3210</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400">contact@tomato.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 text-center">
            Copyright 2023 © Tomato.com - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
