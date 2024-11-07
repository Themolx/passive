import React from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../../components/common/GlitchButton';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ImageCompareSlider from '../../components/common/ImageCompareSlider';

function GlitchPackV2() {
  const features = [
    "100% Analog-Created Effects",
    "4K Resolution",
    "200+ Unique Effects",
    "Real CRT Captures",
    "Organic Distortions",
    "Project Files Included"
  ];

  const software = [
    { name: "After Effects", version: "CC 2020+" },
    { name: "Premiere Pro", version: "CC 2020+" },
    { name: "DaVinci Resolve", version: "17+" },
    { name: "Final Cut Pro", version: "10.4+" }
  ];

  const includedFiles = [
    "Main Effects Library (.mogrt)",
    "Source Footage (ProRes 422)",
    "Project Files (.aep)",
    "PDF Documentation",
    "Video Tutorials"
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'GLITCH FX V2', path: null }
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
              GLITCH FX V2 - Real Analog Hardware Effects
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Created using genuine analog hardware and CRT monitors, each effect is uniquely organic 
              and impossible to replicate with digital algorithms alone.
            </p>
            <div className="flex gap-4">
              <GlitchButton
                to="https://vfxmartin8.gumroad.com/l/jbkrp"
                className="px-8 py-4 bg-white text-black rounded-full font-medium
                         hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Buy Now - $59.99
              </GlitchButton>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="/assets/Final_Photo_v1.png" 
              alt="Analog Hardware Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">See the Difference</h2>
          <div className="max-w-4xl mx-auto">
            <ImageCompareSlider
              beforeImage="/assets/Glitch/before.jpg"
              afterImage="/assets/Glitch/after.jpg"
            />
            <p className="text-gray-400 text-center mt-4">
              Drag the slider to compare the original footage with the applied effect
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Created with Real Hardware</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#111111] rounded-xl overflow-hidden"
              >
                <img 
                  src={`/assets/Glitch/process_${index}.jpg`}
                  alt={`Analog Process ${index}`}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {index === 1 ? "CRT Signal Processing" : 
                     index === 2 ? "Analog Distortion" : 
                     "Hardware Capture"}
                  </h3>
                  <p className="text-gray-400">
                    {index === 1 ? "Authentic CRT monitor distortions and signal degradation" :
                     index === 2 ? "Custom-built analog circuit boards for unique effects" :
                     "Professional grade capture system for pristine quality"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
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

        <section>
          <h2 className="text-3xl font-bold mb-8">Software Compatibility</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {software.map(({ name, version }) => (
              <div key={name} className="bg-[#111111] p-6 rounded-xl text-center">
                <h3 className="font-bold mb-2">{name}</h3>
                <p className="text-sm text-gray-400">{version}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default GlitchPackV2; 