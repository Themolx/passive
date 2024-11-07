import React from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../common/GlitchButton';

function SimilarProducts({ currentProductId, category }) {
  const allProducts = {
    glitch: [
      {
        id: 'glitch-fx-v2',
        title: "GLITCH FX V2 - ANALOG DISTORTER",
        description: "Professional analog-created glitch effects pack",
        price: 99.99,
        salePrice: 59.99,
        thumbnail: "/assets/Final_Photo_v1.png",
        link: "/shop/products/glitch-fx-v2"
      },
      {
        id: 'glitch-pack-v2',
        title: "GLITCH PACK V2",
        description: "Real hardware glitch effects collection",
        price: 99.99,
        salePrice: 59.99,
        thumbnail: "/assets/Glitch/1.png",
        link: "/shop/products/glitch-pack-v2"
      }
    ],
    transitions: [
      {
        id: 'transition-pack',
        title: "TRANSITION PACK",
        description: "Professional transitions for After Effects and DaVinci",
        price: 59.99,
        salePrice: 39.99,
        thumbnail: "/assets/Transitions/hero.jpg",
        link: "/shop/products/transition-pack"
      }
    ],
    resolume: [
      {
        id: 'resolume-fx-pack',
        title: "RESOLUME FX PACK",
        description: "Professional effects for Resolume Arena and Avenue",
        price: 79.99,
        salePrice: 49.99,
        thumbnail: "/assets/resolume-fx-preview.png",
        link: "/shop/products/resolume-fx-pack"
      }
    ],
    texture: [
      {
        id: 'analog-grain-pack',
        title: "ANALOG GRAIN PACK",
        description: "Authentic film grain and noise textures",
        price: 59.99,
        salePrice: 39.99,
        thumbnail: "/assets/analog-grain-preview.png",
        link: "/shop/products/analog-grain-pack"
      }
    ]
  };

  const similarProducts = allProducts[category]?.filter(p => p.id !== currentProductId) || [];

  if (similarProducts.length === 0) return null;

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold mb-8">Similar Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similarProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111111] rounded-xl overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 line-through">${product.price}</span>
                  <span className="text-white font-bold ml-2">${product.salePrice}</span>
                </div>
                <GlitchButton
                  to={product.link}
                  className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium
                           hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  View Details
                </GlitchButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SimilarProducts; 