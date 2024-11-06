import React from 'react';
import ProductCard from '../shop/ProductCard';

function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      title: "Featured Glitch Art",
      price: 29.99,
      category: "Glitch Art",
      gumroadLink: "https://gumroad.com/your-product-1"
    },
    // Add more featured products...
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