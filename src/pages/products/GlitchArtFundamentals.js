import React from 'react';
import ProductTemplate from './ProductTemplate';

function GlitchArtFundamentals() {
  const product = {
    title: "GLITCH ART FUNDAMENTALS",
    description: "Learn the art and science of creating authentic glitch effects using both digital and analog techniques. From basic principles to advanced hardware manipulation.",
    price: 79.99,
    salePrice: 49.99,
    thumbnail: "/assets/Glitch/1.png",
    features: [
      "8+ Hours of Content",
      "Hardware Tutorials",
      "Practice Projects",
      "Community Access",
      "Live Sessions",
      "Resource Pack"
    ],
    software: [
      "After Effects CC 2020+",
      "TouchDesigner",
      "Processing",
      "Custom Hardware"
    ]
  };

  return <ProductTemplate product={product} />;
}

export default GlitchArtFundamentals; 