import React from 'react';
import { motion } from 'framer-motion';

function FeaturedWorks() {
  const works = [
    {
      title: "Cyberpunk Dreams",
      category: "VFX Composition",
      image: "/works/cyberpunk.jpg",
      link: "/portfolio/cyberpunk"
    },
    {
      title: "Digital Decay",
      category: "Glitch Art",
      image: "/works/decay.jpg",
      link: "/portfolio/decay"
    },
    {
      title: "Neural Networks",
      category: "Generative Art",
      image: "/works/neural.jpg",
      link: "/portfolio/neural"
    }
  ];

  return (
    <section className="py-20 bg-base-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="section-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-gray-400">{work.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorks; 