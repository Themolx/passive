import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../components/common/GlitchButton';

function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'glitch', name: 'Glitch Effects' },
    { id: 'vfx', name: 'VFX Templates' },
    { id: 'tools', name: 'Custom Tools' },
    { id: 'presets', name: 'Presets' }
  ];

  const products = [
    {
      id: 1,
      title: "Cyberpunk Glitch Pack",
      description: "A comprehensive collection of high-end glitch effects for your cyberpunk-themed projects.",
      price: 49.99,
      category: "glitch",
      thumbnail: "/products/cyberpunk-glitch.jpg",
      gumroadUrl: "https://gumroad.com/l/cyberpunk-glitch",
      features: [
        "50+ Unique Effects",
        "4K Resolution",
        "After Effects Project",
        "Video Tutorial"
      ],
      software: ["After Effects", "Premiere Pro"]
    },
    // Add more products...
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0A] py-24"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Digital Assets Shop</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional VFX assets, presets, and tools for creators
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Product Image */}
              <div className="aspect-video relative overflow-hidden group">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Includes:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software Compatibility */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.software.map(sw => (
                    <span key={sw} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                      {sw}
                    </span>
                  ))}
                </div>

                {/* Price and Buy Button */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">${product.price}</span>
                  <GlitchButton
                    href={product.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black rounded-full font-medium 
                             hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    Buy Now
                  </GlitchButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Add FAQ items here */}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Shop;