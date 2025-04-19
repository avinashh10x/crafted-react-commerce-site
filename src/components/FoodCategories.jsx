
import { useState } from 'react';

const categories = [
  { id: 1, name: 'Salad', image: '/images/categories/salad.png' },
  { id: 2, name: 'Desserts', image: '/images/categories/desserts.png' },
  { id: 3, name: 'Rolls', image: '/images/categories/rolls.png' },
  { id: 4, name: 'Sandwiches', image: '/images/categories/sandwiches.png' },
  { id: 5, name: 'Cake', image: '/images/categories/cake.png' },
  { id: 6, name: 'Pure veg', image: '/images/categories/pureveg.png' },
];

const FoodCategories = ({ onSelectCategory, selectedCategory }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Explore our menu</h2>
        <p className="text-gray-600 mb-8 max-w-4xl">
          Embark on a culinary journey with our diverse menu, featuring a tempting selection of dishes to satisfy every craving. Whether you prefer bold flavors or comforting classics, each dish is crafted with fresh ingredients for an unforgettable experience.
        </p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`category-item cursor-pointer flex flex-col items-center ${selectedCategory === category.id ? 'ring-2 ring-primary rounded-lg' : ''}`}
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden mb-2">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/100?text=${category.name}`;
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
