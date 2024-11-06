import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getProductThumb, placeholderVideo } from '../../utils/placeholders';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const thumbnail = product.thumbnail || getProductThumb(index);

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-[#111111]"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        {isHovered ? (
          <div className="w-full h-full bg-[#1a1a1a] animate-pulse flex items-center justify-center">
            <span className="text-white/50">Hover Preview</span>
          </div>
        ) : (
          <img 
            src={thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{product.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button className="bg-white text-black px-6 py-2 rounded-full 
                           font-medium hover:bg-gray-100 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard; 