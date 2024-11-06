import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/20"
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="mb-6">
              <h1 className="text-2xl mb-2">
                👋 Hi, I'm <span className="text-yellow-400">Martin Tomek</span>.
              </h1>
              <h2 className="text-xl text-gray-300">
                I'm a <span className="font-semibold">VFX Artist</span> with <span className="text-purple-400">5+ years experience</span>.
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm currently specializing in <span className="underline decoration-purple-400">glitch art</span> and <span className="underline decoration-purple-400">visual effects</span>. 
                You might know me from my <Link to="/blog" className="text-purple-400 hover:text-purple-300">technical blog</Link> or 
                some of my <Link to="/shop" className="text-purple-400 hover:text-purple-300">digital assets</Link>.
              </p>
              <p>
                I love to create unique visual experiences through code and creativity, working with tools like 
                <span className="font-semibold"> After Effects</span>,
                <span className="font-semibold"> DaVinci Resolve</span>, and
                <span className="font-semibold"> TouchDesigner</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-white text-black rounded-full font-medium 
                         hover:bg-gray-100 transition-colors"
              >
                Latest Showreel
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-white/10 rounded-full 
                         hover:bg-white/5 transition-colors"
              >
                View Resume
              </Link>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 mt-8 justify-center md:justify-start"
            >
              {/* Add your social media links here */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;