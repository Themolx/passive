import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlitchButton from '../common/GlitchButton';

function CallToAction({ title, description, linkText, to }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/5 rounded-xl p-8 mt-16 border border-purple-500/10"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <GlitchButton
        to={to}
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium 
                 hover:bg-gray-100 transition-colors"
      >
        {linkText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </GlitchButton>
    </motion.div>
  );
}

export default CallToAction; 