import { motion } from 'framer-motion';

export function UnderConstruction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#1a1a1a] p-8 rounded-lg max-w-md text-center"
      >
        <h2 className="text-2xl font-bold mb-4">🚧 Under Construction</h2>
        <p className="text-gray-300 mb-6">
          This feature is currently being built. Check back soon!
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.history.back()}
          className="bg-purple-600 px-6 py-2 rounded-lg"
        >
          Go Back
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 