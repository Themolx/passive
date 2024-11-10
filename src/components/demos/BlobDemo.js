import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDrag } from "react-use-gesture";

export const BlobDemo = () => {
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  // Handle draggable blobs
  const bind = useDrag(({ offset: [x, y] }) => {
    controls.start({
      x,
      y,
      transition: { type: "spring", stiffness: 400, damping: 40 }
    });
  });

  return (
    <div className="min-h-screen flex flex-wrap gap-8 justify-center items-center p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      {/* Draggable Blob */}
      <motion.div
        {...bind()}
        className="w-64 h-64 relative cursor-grab rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
        animate={controls}
        whileTap={{ cursor: "grabbing", scale: 1.02 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
          Drag Me
        </span>
      </motion.div>

      {/* Simple Interactive Blob */}
      <motion.div
        className="w-64 h-64 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-white font-semibold text-lg">
          Hover Me
        </span>
      </motion.div>

      {/* Simple Button Blob */}
      <motion.button
        className="w-64 h-64 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full cursor-pointer shadow-lg"
        onClick={() => setIsActive(!isActive)}
        whileHover={{ scale: 1.55 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-white font-semibold text-lg">
          {isActive ? "Active" : "Click Me"}
        </span>
      </motion.button>
    </div>
  );
}; 