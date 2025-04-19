
import { useState } from 'react';
import { ShoppingCart, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import axios from 'axios';

// Mock data for dishes
const initialDishes = [
  {
    id: 1,
    name: 'Kathi roll',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg',
    description: 'Food provides essential nutrients for overall health and well-being.',
    price: 150,
    salePrice: 150,
    rating: 4,
    category: 3, // Rolls
  },
  {
    id: 2,
    name: 'Lasagna Rolls',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043',
    description: 'Food provides essential nutrients for overall health and well-being.',
    price: 189,
    salePrice: 189,
    rating: 4,
    category: 3, // Rolls
  },
  {
    id: 3,
    name: 'Paneer Roll',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
    description: 'Food provides essential nutrients for overall health and well-being.',
    price: 225,
    salePrice: 225,
    rating: 4,
    category: 3, // Rolls
  },
  {
    id: 4,
    name: 'Chicken Kathi roll',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f',
    description: 'Food provides essential nutrients for overall health and well-being.',
    price: 295,
    salePrice: 295,
    rating: 4,
    category: 3, // Rolls
  },
  // Additional dishes for other categories
  {
    id: 5,
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    description: 'Crispy romaine lettuce with Caesar dressing and parmesan.',
    price: 175,
    salePrice: 160,
    rating: 5,
    category: 1, // Salad
  },
  {
    id: 6,
    name: 'Chocolate Mousse',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
    description: 'Rich and creamy chocolate dessert topped with berries.',
    price: 210,
    salePrice: 195,
    rating: 5,
    category: 2, // Desserts
  },
  {
    id: 7,
    name: 'Club Sandwich',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821',
    description: 'Triple-decker sandwich with chicken, bacon, and veggies.',
    price: 245,
    salePrice: 230,
    rating: 4,
    category: 4, // Sandwiches
  },
  {
    id: 8,
    name: 'Red Velvet Cake',
    image: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1',
    description: 'Classic red velvet cake with cream cheese frosting.',
    price: 320,
    salePrice: 300,
    rating: 5,
    category: 5, // Cake
  },
];

const FeaturedDishes = ({ selectedCategory, addToCart }) => {
  const [dishes, setDishes] = useState(initialDishes);
  const [sortOption, setSortOption] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const fetchDishes = async () => {
    try {
      const response = await axios('http://localhost:4000/api/food/list/'); // Replace with your API endpoint
      // const data = await response.json();
      console.log(response.data);
      setDishes(response.data.data); // Assuming the API returns an array of dishes
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  }


  // Filter dishes based on selected category
  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : dishes;

  // Function to handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    let sortedDishes = [...dishes];

    switch (option) {
      case 'price-low':
        sortedDishes.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'price-high':
        sortedDishes.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'rating':
        sortedDishes.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (by id)
        sortedDishes.sort((a, b) => a.id - b.id);
    }

    setDishes(sortedDishes);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star-filled" : "text-gray-300"}>★</span>
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" onClick={fetchDishes}>Top dishes near you</h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
            >
              <SlidersHorizontal size={18} />
              <span className="hidden sm:inline">Filters</span>
            </button>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50"
            >
              <ArrowUpDown size={18} />
              <span className="hidden sm:inline">Sort</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-white p-4 rounded shadow-md mb-6">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Sort by:</label>
                <select
                  value={sortOption}
                  onChange={(e) => handleSort(e.target.value)}
                  className="border rounded p-2 w-full"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Additional filter options can be added here */}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="food-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/39/8f/d8/398fd8b7-30e1-b648-dd7f-d5f06c931aec/AppIcon-0-0-1x_U007ephone-0-1-0-sRGB-85-220.png/1200x630wa.png';
                  }}
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{dish.name}</h3>
                <div className="flex mb-2 rating">
                  {renderStars(dish.rating)}
                </div>
                <p className="text-gray-600 text-sm mb-3">{dish.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-semibold">₹{dish.salePrice}</p>
                  </div>

                  {dish.price !== dish.salePrice && (
                    <div className="line-through text-gray-400">
                      ₹{dish.price}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => addToCart(dish)}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded flex items-center justify-center gap-2"
                >
                  <span>Buy Now</span>
                  <span>₹{dish.salePrice}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No dishes found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDishes;
