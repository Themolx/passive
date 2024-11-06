import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProductDetail() {
  const { productId } = useParams();

  // Mock product data - replace with actual data fetching
  const product = {
    id: productId,
    title: "Cyberpunk Glitch Effects",
    price: 29.99,
    description: "Professional glitch effects pack for After Effects...",
    requirements: [
      "After Effects CC 2020 or later",
      "1920x1080 resolution",
      "No plugins required"
    ],
    previewVideo: "/path/to/preview.mp4"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="aspect-video rounded-2xl overflow-hidden mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          >
            <source src={product.previewVideo} type="video/mp4" />
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-400 mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {product.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#111111] p-6 rounded-2xl h-fit">
            <div className="text-3xl font-bold mb-6">${product.price}</div>
            <button className="w-full bg-white text-black py-3 rounded-full font-medium 
                           hover:bg-gray-100 transition-colors mb-4">
              Add to Cart
            </button>
            <button className="w-full border border-white/10 py-3 rounded-full 
                           hover:bg-white/5 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetail; 