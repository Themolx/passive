import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Example = () => {
  const [activeDemo, setActiveDemo] = useState(null);
  const controls = useAnimation();

  const demos = [
    {
      title: "Drag Playground 🎯",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      content: (
        <div className="flex flex-wrap gap-8 justify-center min-h-[400px] relative bg-black/20 rounded-xl p-8">
          {/* Basic Drag */}
          <motion.div
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100
            }}
            className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
            whileDrag={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold">Drag Me!</span>
          </motion.div>

          {/* Elastic Drag */}
          <motion.div
            drag
            dragElastic={0.5}
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100
            }}
            className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
            whileDrag={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold">Elastic!</span>
          </motion.div>

          {/* Axis Lock Drag */}
          <motion.div
            drag="x"
            dragConstraints={{
              left: -100,
              right: 100
            }}
            className="w-32 h-32 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
            whileDrag={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold">X-Axis Only</span>
          </motion.div>
        </div>
      )
    },
    {
      title: "Morphing Cards 🃏",
      color: "bg-gradient-to-r from-indigo-500 to-blue-500",
      content: (
        <div className="flex justify-center items-center p-8 min-h-[400px] relative">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-32 h-48 absolute"
              initial={{ rotate: 0, x: 0 }}
              animate={{
                rotate: [-5 + i * 2.5, 5 + i * 2.5],
                y: [0, -5, 0],
                borderRadius: ["16px", "40% 60% 60% 40% / 60% 30% 70% 40%", "16px"],
                background: [
                  "linear-gradient(45deg, #4f46e5, #818cf8)",
                  "linear-gradient(45deg, #7c3aed, #4f46e5)",
                  "linear-gradient(45deg, #4f46e5, #818cf8)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              whileHover={{
                y: -50,
                rotate: 0,
                borderRadius: "16px",
                transition: { duration: 0.2 }
              }}
              style={{
                zIndex: i
              }}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center text-white font-bold"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2
                }}
              >
                {i + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Particle Field ✨",
      color: "bg-gradient-to-r from-green-500 to-yellow-500",
      content: (
        <div className="relative h-[300px] bg-black/20 rounded-lg overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 300 - 150],
                scale: [1, Math.random() + 0.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              whileHover={{
                scale: 2,
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            />
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        {demos.map((demo, index) => (
          <motion.button
            key={index}
            className={`${demo.color} p-6 rounded-xl text-white font-bold text-lg shadow-lg`}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveDemo(activeDemo === index ? null : index)}
          >
            {demo.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeDemo !== null && (
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${demos[activeDemo].color} p-8 rounded-xl w-full max-w-4xl shadow-2xl`}
          >
            {demos[activeDemo].content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 