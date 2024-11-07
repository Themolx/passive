import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/shop/ProductCard';
import GlitchButton from '../components/common/GlitchButton';

function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'glitch-fx-v2',
      title: "GLITCH FX V2 - ANALOG DISTORTER",
      description: "Professional analog-created glitch effects pack with real CRT captures.",
      price: 99.99,
      salePrice: 59.99,
      category: "glitch",
      thumbnail: "/assets/Final_Photo_v1.png",
      badge: "Best Seller",
      software: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      link: "/shop/products/glitch-fx-v2"
    },
    {
      id: 'advanced-compositing',
      title: "ADVANCED COMPOSITING MASTERCLASS",
      description: "Learn professional VFX compositing techniques from industry experts.",
      price: 199.99,
      salePrice: 149.99,
      category: "tutorial",
      thumbnail: "/assets/Glitch/1.png",
      badge: "New Course",
      software: ["After Effects", "Nuke"],
      features: [
        "12+ Hours of Content",
        "Project Files Included",
        "Lifetime Access",
        "Certificate"
      ],
      link: "/shop/tutorials/advanced-compositing"
    },
    {
      id: 'glitch-art-fundamentals',
      title: "GLITCH ART FUNDAMENTALS",
      description: "Master the art of creating authentic glitch effects using both digital and analog techniques.",
      price: 79.99,
      salePrice: 49.99,
      category: "tutorial",
      thumbnail: "/assets/Glitch/1.png",
      software: ["After Effects", "TouchDesigner"],
      features: [
        "8+ Hours of Content",
        "Hardware Tutorials",
        "Practice Projects",
        "Community Access"
      ],
      link: "/shop/tutorials/glitch-art-fundamentals"
    },
    {
      id: 'resolume-fx-pack',
      title: "RESOLUME FX PACK - PROFESSIONAL EFFECTS",
      description: "High-quality real-time effects and transitions for Resolume Arena and Avenue.",
      price: 79.99,
      salePrice: 49.99,
      category: "resolume",
      thumbnail: "/assets/resolume-fx-preview.png",
      badge: "New Release",
      software: ["Resolume Arena", "Resolume Avenue"],
      features: [
        "50+ Professional Effects",
        "Real-time Performance",
        "Custom GLSL Shaders",
        "Easy Installation",
        "Project Files Included",
        "Video Tutorial"
      ],
      link: "/shop/products/resolume-fx-pack"
    },
    {
      id: 'analog-grain-pack',
      title: "ANALOG GRAIN PACK - AUTHENTIC FILM NOISE",
      description: "Real film grain scans and analog noise textures for authentic vintage looks.",
      price: 59.99,
      salePrice: 39.99,
      category: "texture",
      thumbnail: "/assets/analog-grain-preview.png",
      badge: "Best Seller",
      software: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Final Cut Pro"],
      features: [
        "4K Resolution",
        "100+ Grain Textures",
        "Real Film Scans",
        "8mm & 16mm Sources",
        "ProRes Format",
        "Seamless Loops"
      ],
      link: "/shop/products/analog-grain-pack"
    },
    {
      id: 'transition-pack',
      title: "TRANSITION PACK",
      description: "Professional transitions for After Effects and DaVinci Resolve",
      price: 59.99,
      salePrice: 39.99,
      category: "transitions",
      thumbnail: "/assets/Transitions/hero.jpg",
      badge: "New",
      software: ["After Effects", "DaVinci Resolve"],
      features: [
        "50+ Transitions",
        "4K Resolution",
        "Easy to Customize",
        "Both AE & Resolve"
      ],
      link: "/shop/products/transition-pack"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'glitch', name: 'Glitch Effects' },
    { id: 'transitions', name: 'Transitions' },
    { id: 'resolume', name: 'Resolume FX' },
    { id: 'texture', name: 'Textures & Grain' },
    { id: 'tutorial', name: 'Tutorials' }
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Digital Assets & Tutorials</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Level up your skills with professional VFX assets and in-depth tutorials
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Shop;