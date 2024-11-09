import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Example = () => {
  const [activeDemo, setActiveDemo] = useState(null);
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const demos = [
    {
      title: "Framer Motion Demo 🎨",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      content: (
        <div className="flex flex-wrap gap-8 justify-center">
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

          {/* Active Blob */}
          <motion.div
            className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[42%_58%_70%_30%] flex items-center justify-center cursor-pointer"
            animate={{
              borderRadius: isOpen 
                ? ["50% 50% 50% 50%"]
                : [
                    "42% 58% 70% 30%",
                    "30% 60% 70% 40%",
                    "60% 40% 30% 70%",
                    "42% 58% 70% 30%"
                  ],
              rotate: isOpen ? 360 : 0,
              scale: isOpen ? 1.2 : 1
            }}
            onClick={() => setIsOpen(!isOpen)}
            transition={{
              duration: isOpen ? 0.8 : 8,
              repeat: isOpen ? 0 : Infinity,
              repeatType: "reverse"
            }}
          >
            <motion.span 
              className="text-white font-bold"
              animate={{
                scale: isOpen ? 1.2 : 1
              }}
            >
              {isOpen ? "Active!" : "Click me"}
            </motion.span>
          </motion.div>
        </div>
      )
    },
    {
      title: "Chain Reaction 🔄",
      color: "bg-gradient-to-r from-blue-500 to-teal-500",
      content: (
        <div className="grid grid-cols-4 gap-2 p-4">
          {[...Array(16)].map((_, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            
            return (
              <motion.div
                key={i}
                className="aspect-square bg-white/20 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={async () => {
                  controls.start(`cell${i}`, {
                    scale: [1, 1.4, 1],
                    rotate: 360,
                    transition: { duration: 0.5 }
                  });

                  const neighbors = [];
                  if (row > 0) neighbors.push(i - 4);
                  if (row < 3) neighbors.push(i + 4);
                  if (col > 0) neighbors.push(i - 1);
                  if (col < 3) neighbors.push(i + 1);

                  neighbors.forEach((n, index) => {
                    controls.start(`cell${n}`, {
                      scale: [1, 1.2, 1],
                      rotate: 180,
                      transition: { 
                        duration: 0.3,
                        delay: 0.1 * (index + 1)
                      }
                    });
                  });
                }}
                animate={controls}
                custom={`cell${i}`}
              />
            );
          })}
        </div>
      )
    },
    {
      title: "Particle Field 🌟",
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
      <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-2xl">
        {demos.map((demo, index) => (
          <motion.button
            key={index}
            className={`${demo.color} p-6 rounded-xl text-white font-bold text-lg`}
            whileHover={{ scale: 1.02 }}
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
            className={`${demos[activeDemo].color} p-8 rounded-xl w-full max-w-2xl`}
          >
            {demos[activeDemo].content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 