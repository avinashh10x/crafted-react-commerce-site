
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header = ({ cartItemCount, openLoginModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="logo text-2xl font-bold">
          Tomato
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden ml-auto mr-4" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            home
          </Link>
          <Link to="/menu" className="text-sm font-medium hover:text-primary">
            menu
          </Link>
          <Link to="/mobile-app" className="text-sm font-medium hover:text-primary">
            mobile-app
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">
            contact us
          </Link>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-primary">
            <Search size={20} />
          </button>
          <Link to="/cart" className="hover:text-primary relative">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button 
            onClick={openLoginModal}
            className="hover:text-primary"
          >
            <User size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            <div className="container py-4 flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                home
              </Link>
              <Link to="/menu" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                menu
              </Link>
              <Link to="/mobile-app" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                mobile-app
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
