import { motion } from 'framer-motion';

export const DragDemo = () => {
  return (
    <div className="h-[400px] relative bg-black/20 rounded-xl p-8 overflow-hidden">
      {/* Basic Drag */}
      <motion.div
        className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50
        }}
      >
        Drag me!
      </motion.div>

      {/* Elastic Drag */}
      <motion.div
        className="w-32 h-32 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing absolute top-8 right-8"
        drag
        dragElastic={0.2}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 300,
          bottom: 300
        }}
        whileDrag={{
          scale: 1.1,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
        }}
      >
        Elastic
      </motion.div>

      {/* Axis Lock */}
      <motion.div
        className="w-64 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing absolute bottom-8 left-8"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 500
        }}
        whileDrag={{ cursor: "grabbing" }}
        whileHover={{ cursor: "grab" }}
      >
        Horizontal Only
      </motion.div>
    </div>
  );
}; 