import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/shop/ProductCard';
import { getProductThumb } from '../utils/placeholders';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      title: "Cyberpunk Glitch Effects",
      price: 29.99,
      category: "After Effects",
      thumbnail: getProductThumb(0)
    },
    {
      id: 2,
      title: "DaVinci Color Presets",
      price: 49.99,
      category: "DaVinci Resolve",
      thumbnail: getProductThumb(1)
    },
    {
      id: 3,
      title: "Neon Light Effects Pack",
      price: 39.99,
      category: "After Effects",
      thumbnail: getProductThumb(2)
    },
    {
      id: 4,
      title: "Film Grain Package",
      price: 19.99,
      category: "Visual Effects",
      thumbnail: getProductThumb(3)
    },
    {
      id: 5,
      title: "Modern Transitions",
      price: 34.99,
      category: "DaVinci Resolve",
      thumbnail: getProductThumb(4)
    },
    {
      id: 6,
      title: "Glitch Transitions",
      price: 24.99,
      category: "After Effects",
      thumbnail: getProductThumb(5)
    }
  ];

  const categories = ['all', 'After Effects', 'DaVinci Resolve', 'Visual Effects'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-12">Shop</h1>
      
      {/* Category Filter */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors
                      ${selectedCategory === category 
                        ? 'bg-white text-black' 
                        : 'border border-white/10 hover:bg-white/5'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
          .map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
      </div>
    </motion.div>
  );
}

export default Shop; 