import React from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../../components/common/GlitchButton';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function ProductTemplate({ product }) {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.title, path: null }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0A] py-24"
    >
      <div className="bg-purple-600 text-white py-3 px-4 text-center mb-12">
        <p className="text-lg font-bold">
          PRE-BLACK FRIDAY - 40% OFF (NO CODE NEEDED) 🎉
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {product.description}
            </p>
            <div className="flex gap-4">
              <GlitchButton
                className="px-8 py-4 bg-white text-black rounded-full font-medium"
              >
                Buy Now - ${product.salePrice}
              </GlitchButton>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={product.thumbnail || "/assets/Glitch/1.png"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-xl border border-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Software Compatibility */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Software Compatibility</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.software.map((sw) => (
              <div key={sw} className="bg-[#111111] p-6 rounded-xl text-center">
                <h3 className="font-bold mb-2">{sw}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default ProductTemplate; 