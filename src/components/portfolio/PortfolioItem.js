import React from 'react';

function PortfolioItem({ work }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{work.title}</h3>
        <p className="text-gray-600">{work.category}</p>
      </div>
    </div>
  );
}

export default PortfolioItem; 