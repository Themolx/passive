import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlitchButton from '../common/GlitchButton';

function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [buttonGlitch, setButtonGlitch] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 4000 + 2000);

    const buttonGlitchInterval = setInterval(() => {
      setButtonGlitch(true);
      setTimeout(() => setButtonGlitch(false), 200);
    }, Math.random() * 3000 + 2000);

    const unsubscribeScroll = scrollY.onChange((latest) => {
      if (latest > 0 && latest < window.innerHeight) {
        setGlitchActive(true);
        setButtonGlitch(true);
        setTimeout(() => {
          setGlitchActive(false);
          setButtonGlitch(false);
        }, 150);
      }
    });

    return () => {
      clearInterval(glitchInterval);
      clearInterval(buttonGlitchInterval);
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 gap-4 p-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-500 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Main heading with glitch effect */}
        <motion.h1 
          className={`text-7xl md:text-8xl font-bold mb-8 tracking-tight ${glitchActive ? 'glitch-text' : ''}`}
          data-text="Digital Art & VFX"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digital Art & VFX
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Creating immersive visual experiences through advanced compositing,
          creative coding, and artistic innovation
        </motion.p>

        {/* Enhanced buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlitchButton 
            to="/portfolio" 
            className="px-8 py-4 bg-white text-black rounded-lg font-medium 
                     overflow-hidden transition-transform hover:scale-105"
          >
            View Portfolio
          </GlitchButton>
          
          <GlitchButton 
            to="/shop" 
            className="px-8 py-4 bg-white text-black rounded-full font-medium
                     hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Browse Products
          </GlitchButton>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;