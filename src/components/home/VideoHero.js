import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPlaceholderImage } from '../../utils/placeholders';

function VideoHero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#111111]">
        <img
          src={getPlaceholderImage(1920, 1080, 'Showreel')}
          alt="Showreel"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional VFX Assets
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium effects for After Effects & DaVinci Resolve
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="bg-white text-black px-8 py-4 rounded-full 
                       font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default VideoHero; 