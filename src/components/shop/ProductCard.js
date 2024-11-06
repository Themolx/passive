import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlitchButton from '../common/GlitchButton';

function ProductCard({ product, badge }) {
  const [isHovered, setIsHovered] = useState(false);

  const isTutorial = product.category === 'tutorial';

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-[#111111]"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
            {badge}
          </span>
        </div>
      )}

      <Link to={product.link}>
        <div className="aspect-video relative overflow-hidden">
          {isHovered ? (
            <div className="w-full h-full bg-[#1a1a1a] animate-pulse flex items-center justify-center">
              <span className="text-white/50">View Details</span>
            </div>
          ) : (
            <img 
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link to={product.link}>
          <h3 className="text-xl font-medium mb-2 hover:text-purple-400 transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        
        {/* Software compatibility */}
        {product.software && product.software.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.software.map(sw => (
              <span key={sw} className="px-2 py-1 bg-white/5 rounded-full text-xs">
                {sw}
              </span>
            ))}
          </div>
        )}

        {/* Tutorial Features */}
        {isTutorial && product.features && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${product.salePrice}</span>
            {product.price !== product.salePrice && (
              <span className="text-sm text-gray-400 line-through">${product.price}</span>
            )}
          </div>
          <GlitchButton 
            to={product.link}
            className="px-6 py-2 bg-white text-black rounded-full font-medium
                     hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {isTutorial ? 'Learn More' : 'View Details'}
          </GlitchButton>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard; 