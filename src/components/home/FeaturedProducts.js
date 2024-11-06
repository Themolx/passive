import React from 'react';
import ProductCard from '../shop/ProductCard';

function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 'glitch-fx-v2',
      title: "GLITCH FX V2",
      description: "Professional analog-created glitch effects pack",
      price: 99.99,
      salePrice: 59.99,
      category: "Glitch Art",
      thumbnail: "/assets/Final_Photo_v1.png",
      software: ["After Effects", "Premiere Pro"],
      link: "/shop/products/glitch-fx-v2"
    },
    {
      id: 'advanced-compositing',
      title: "Advanced Compositing",
      description: "Professional VFX compositing techniques",
      price: 199.99,
      salePrice: 149.99,
      category: "tutorial",
      thumbnail: "/products/tutorials/compositing.jpg",
      software: ["After Effects", "Nuke"],
      link: "/shop/tutorials/advanced-compositing"
    },
    {
      id: 'glitch-art-fundamentals',
      title: "Glitch Art Fundamentals",
      description: "Master the art of creating authentic glitch effects",
      price: 79.99,
      salePrice: 49.99,
      category: "tutorial",
      thumbnail: "/products/tutorials/glitch-art.jpg",
      software: ["After Effects", "TouchDesigner"],
      link: "/shop/tutorials/glitch-art-fundamentals"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts; 