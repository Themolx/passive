import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FeatureHighlight({ feature }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-black/30 rounded-lg p-6 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-xl font-bold">{feature.key}</span>
        </div>
        <p className="text-lg">{feature.description}</p>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-4"
          >
            <img 
              src={feature.gif} 
              alt={feature.description}
              className="rounded-lg w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 