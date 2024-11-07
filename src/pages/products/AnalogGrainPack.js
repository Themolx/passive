import React from 'react';
import ProductTemplate from './ProductTemplate';
import GlitchButton from '../../components/common/GlitchButton';

function AnalogGrainPack() {
  const product = {
    id: 'analog-grain-pack',
    category: 'texture',
    title: "ANALOG GRAIN PACK - AUTHENTIC FILM NOISE",
    description: "Real film grain scans and analog noise textures for authentic vintage looks. Created from genuine 8mm and 16mm film sources.",
    price: 59.99,
    salePrice: 39.99,
    thumbnail: "/assets/analog-grain-preview.png",
    gumroadUrl: "https://vfxmartin8.gumroad.com/l/analog-grain",
    features: [
      "4K Resolution",
      "100+ Grain Textures",
      "Real Film Scans",
      "8mm & 16mm Sources",
      "ProRes Format",
      "Seamless Loops"
    ],
    software: [
      "After Effects CC 2020+",
      "Premiere Pro CC 2020+",
      "DaVinci Resolve 17+",
      "Final Cut Pro 10.4+"
    ]
  };

  return (
    <ProductTemplate product={product}>
      <div className="flex gap-4">
        <GlitchButton
          to="https://vfxmartin8.gumroad.com/l/analog-grain"
          className="px-8 py-4 bg-white text-black rounded-full font-medium
                   hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Buy Now - $39.99
        </GlitchButton>
      </div>
    </ProductTemplate>
  );
}

export default AnalogGrainPack;