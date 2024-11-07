import React from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../../components/common/GlitchButton';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ImageCompareSlider from '../../components/common/ImageCompareSlider';

function TransitionPack() {
  const features = [
    "50+ Professional Transitions",
    "4K Resolution",
    "Drag & Drop Ready",
    "Customizable Duration",
    "Easy Color Controls",
    "Project Files Included"
  ];

  const software = [
    { name: "After Effects", version: "CC 2020+" },
    { name: "DaVinci Resolve", version: "17+" }
  ];

  const includedFiles = [
    "After Effects Transitions (.mogrt)",
    "DaVinci Resolve Transitions (.drx)",
    "Source Files",
    "PDF Documentation",
    "Video Tutorial"
  ];

  const transitionTypes = [
    {
      title: "Glitch Transitions",
      description: "Digital artifacts and data corruption effects",
      image: "/assets/Transitions/glitch.jpg"
    },
    {
      title: "Distortion Transitions",
      description: "Warping and morphing between scenes",
      image: "/assets/Transitions/distort.jpg"
    },
    {
      title: "RGB Split Transitions",
      description: "Color channel separation effects",
      image: "/assets/Transitions/rgb.jpg"
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'TRANSITION PACK', path: null }
  ];

  const product = {
    id: 'transition-pack',
    category: 'transitions',
    // ... rest of the existing properties
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0A] py-24"
    >
      <div className="bg-purple-600 text-white py-3 px-4 text-center mb-12">
        <p className="text-lg font-bold">
          NEW RELEASE - 30% OFF LAUNCH PRICE 🎉
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TRANSITION PACK - Professional Video Transitions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              High-quality transitions for After Effects and DaVinci Resolve. Perfect for music videos, 
              commercials, and dynamic edits. Easy to use with customizable duration and colors.
            </p>
            <div className="flex gap-4">
              <GlitchButton
                to="https://vfxmartin8.gumroad.com/l/transitions"
                className="px-8 py-4 bg-white text-black rounded-full font-medium
                         hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Buy Now - $39.99
              </GlitchButton>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="/assets/Transitions/hero.jpg" 
              alt="Transition Pack Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Preview</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/Transitions/preview.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Transition Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transitionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#111111] rounded-xl overflow-hidden"
              >
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-400">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {includedFiles.map((file, index) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-xl border border-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{file}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
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

export default TransitionPack; 