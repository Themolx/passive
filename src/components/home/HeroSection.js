import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlitchButton from '../common/GlitchButton';

function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 4000 + 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Glitch Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/path-to-your-showreel.mp4" type="video/mp4" />
        </video>
        
        <AnimatePresence>
          {glitchActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                       mix-blend-screen pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.span
          className="text-xl md:text-2xl text-purple-400 font-medium block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Martin Tomek
        </motion.span>

        <motion.h1 
          className={`text-7xl md:text-8xl font-bold mb-8 ${glitchActive ? 'glitch-text' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Digital Art & VFX
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Professional VFX assets and tutorials for creators
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlitchButton 
            to="/shop" 
            className="px-8 py-4 bg-white text-black rounded-full font-medium
                     hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Browse Products
          </GlitchButton>
          
          <GlitchButton 
            to="/blog" 
            className="px-8 py-4 bg-white text-black rounded-full font-medium
                     hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Blog Posts
          </GlitchButton>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;