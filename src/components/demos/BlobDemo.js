import { motion } from 'framer-motion';
import { useState } from 'react';

export const BlobDemo = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {/* Basic Blob */}
      <motion.div
        className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[42%_58%_70%_30%] flex items-center justify-center"
        animate={{
          borderRadius: [
            "42% 58% 70% 30%",
            "30% 60% 70% 40%",
            "60% 40% 30% 70%",
            "42% 58% 70% 30%"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-white font-bold">Basic Blob</span>
      </motion.div>

      {/* Interactive Blob */}
      <motion.div
        className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[42%_58%_70%_30%] flex items-center justify-center"
        animate={{
          borderRadius: [
            "42% 58% 70% 30%",
            "30% 60% 70% 40%",
            "60% 40% 30% 70%",
            "42% 58% 70% 30%"
          ]
        }}
        whileHover={{
          scale: 1.1,
          rotate: 15,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.span 
          className="text-white font-bold"
          whileHover={{ scale: 1.2 }}
        >
          Hover Me
        </motion.span>
      </motion.div>

      {/* Morphing Button */}
      <motion.button
        className="relative w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{
          borderRadius: isActive
            ? ["42% 58% 70% 30%", "35% 65% 60% 40%", "50% 50% 50% 50%"]
            : ["42% 58% 70% 30%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
          rotate: isActive ? 360 : 0,
          scale: isActive ? 1.2 : 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsActive(!isActive)}
        transition={{
          duration: isActive ? 0.8 : 8,
          ease: "easeInOut",
          repeat: isActive ? 0 : Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 mix-blend-overlay"
          animate={{
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          className="relative flex h-full items-center justify-center text-white font-bold"
          animate={{
            scale: isActive ? 1.2 : 1
          }}
        >
          {isActive ? "Active!" : "Click me"}
        </motion.span>
      </motion.button>
    </div>
  );
}; 