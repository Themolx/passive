import React from 'react';
import ProductTemplate from './ProductTemplate';
import GlitchButton from '../../components/common/GlitchButton';

function ResolumeEffectsPack() {
  const product = {
    id: 'resolume-fx-pack',
    category: 'resolume',
    title: "RESOLUME FX PACK - PROFESSIONAL EFFECTS",
    description: "Take your live visuals to the next level with this comprehensive collection of real-time effects and transitions designed specifically for Resolume Arena and Avenue.",
    price: 79.99,
    salePrice: 49.99,
    thumbnail: "/assets/resolume-fx-preview.png",
    gumroadUrl: "https://vfxmartin8.gumroad.com/l/resolume-fx",
    features: [
      "50+ Professional Effects",
      "Real-time Performance",
      "Custom GLSL Shaders",
      "Easy Installation",
      "Project Files Included",
      "Video Tutorial"
    ],
    software: [
      "Resolume Arena 7+",
      "Resolume Avenue 7+"
    ],
    details: [
      "Optimized for Live Performance",
      "Compatible with All Resolutions",
      "Low CPU/GPU Impact",
      "Regular Updates"
    ]
  };

  return (
    <ProductTemplate product={product}>
      <div className="flex gap-4">
        <GlitchButton
          to="https://vfxmartin8.gumroad.com/l/resolume-fx"
          className="px-8 py-4 bg-white text-black rounded-full font-medium
                   hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Buy Now - $49.99
        </GlitchButton>
      </div>
    </ProductTemplate>
  );
}

export default ResolumeEffectsPack; 