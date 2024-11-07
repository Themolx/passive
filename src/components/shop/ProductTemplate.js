function ProductTemplate({ product }) {
  const buyButton = (
    <a
      href={product.gumroadUrl || "https://vfxmartin8.gumroad.com/l/jbkrp"}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 bg-white text-black rounded-full font-medium
                hover:bg-gray-100 transition-all transform hover:scale-105"
    >
      Buy Now - ${product.salePrice}
    </a>
  );

  return (
    // ... rest of the template
  );
} 