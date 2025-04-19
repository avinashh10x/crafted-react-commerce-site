
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
