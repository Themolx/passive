import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function VideoHero() {
  const [glitchActive, setGlitchActive] = useState(false);
  
  // Trigger glitch effect randomly
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const skills = [
    "VFX Artist",
    "Motion Designer",
    "Technical Director",
    "Creative Coder"
  ];

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-200
            ${glitchActive ? 'opacity-70' : 'opacity-50'}`}
        >
          <source src="/path-to-your-showreel.mp4" type="video/mp4" />
        </video>
        
        {/* Glitch Overlay */}
        <AnimatePresence>
          {glitchActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                       mix-blend-screen pointer-events-none"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                animation: 'glitch 0.2s infinite'
              }}
            />
          )}
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            className="mb-6 flex justify-center gap-4 text-sm font-medium text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <span key={skill} className="relative">
                {index > 0 && <span className="mx-2 opacity-50">•</span>}
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-6 relative
              ${glitchActive ? 'glitch-text' : ''}`}
            data-text="Professional VFX Assets"
          >
            Professional VFX Assets
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Elevate your projects with high-quality visual effects, motion design assets,
            and creative tools. Crafted with precision for professional workflows.
          </motion.p>
          
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-white text-black rounded-full font-medium
                       hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Browse Products
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 border border-white/20 rounded-full
                       hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default VideoHero; 