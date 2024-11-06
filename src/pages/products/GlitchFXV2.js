import React from 'react';
import ProductTemplate from './ProductTemplate';

function GlitchFXV2() {
  const product = {
    title: "GLITCH FX V2 - ANALOG DISTORTER",
    description: "Professional analog-created glitch effects pack with real CRT captures. Created using genuine analog hardware and CRT monitors.",
    price: 99.99,
    salePrice: 59.99,
    thumbnail: "/assets/Final_Photo_v1.png",
    features: [
      "100% Analog-Created Effects",
      "4K Resolution",
      "200+ Unique Effects",
      "Real CRT Captures",
      "Organic Distortions",
      "Project Files Included"
    ],
    software: [
      "After Effects CC 2020+",
      "Premiere Pro CC 2020+",
      "DaVinci Resolve 17+",
      "Final Cut Pro 10.4+"
    ]
  };

  return <ProductTemplate product={product} />;
}

export default GlitchFXV2; 