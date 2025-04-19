
import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Salad',
    image: 'https://www.simplyrecipes.com/thmb/3pCkcqFdeULd0V24-eKRUeSkOh8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg',
  },
  {
    id: 2,
    name: 'Desserts',
    image: 'https://www.allrecipes.com/thmb/0Yo0i3FZzwjZfFdrjBlSjcb4GhI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20338-strawberry-pretzel-salad-DDMFS-beauty-4x3-BG-31829-cd5fe0cf5f724c9ab67fb754d242c10d.jpg',
  },
  {
    id: 3,
    name: 'Rolls',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg',
  },
  {
    id: 4,
    name: 'Sandwiches',
    image: 'https://recipesblob.oetker.in/assets/f7ea4ac65c534c1492d156dfac9db2ad/1272x764/sandwichetojpg.webp',
  },
  {
    id: 5,
    name: 'Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Pure veg',
    image: 'https://www.coffeebeanvilla.com/wp-content/uploads/2018/11/9-1024x720.jpg',
  },
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
                  className="w-full h-full object-cover"
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
