import React from 'react';
import ProductTemplate from './ProductTemplate';

function AdvancedCompositing() {
  const product = {
    title: "ADVANCED COMPOSITING MASTERCLASS",
    description: "Master professional VFX compositing techniques with industry-standard tools and workflows. Learn from experienced professionals and elevate your skills.",
    price: 199.99,
    salePrice: 149.99,
    thumbnail: "/assets/Glitch/1.png",
    features: [
      "12+ Hours of Content",
      "Project Files Included",
      "Lifetime Access",
      "Certificate",
      "Industry Standard Workflows",
      "Real Project Examples"
    ],
    software: [
      "After Effects CC 2020+",
      "Nuke Studio 13+",
      "Mocha Pro",
      "DaVinci Resolve 17+"
    ]
  };

  return <ProductTemplate product={product} />;
}

export default AdvancedCompositing; 