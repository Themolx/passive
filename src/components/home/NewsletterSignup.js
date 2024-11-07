import React from 'react';
import { motion } from 'framer-motion';

function NewsletterSignup() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get notified about new products, tutorials, and VFX resources
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 bg-white/5 border border-purple-500/20 rounded-full
                     focus:outline-none focus:border-purple-500/40 flex-grow max-w-md"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-black rounded-full font-medium
                     hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default NewsletterSignup; 