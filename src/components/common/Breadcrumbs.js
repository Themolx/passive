import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs({ items }) {
  return (
    <nav className="flex space-x-2 text-sm text-gray-400 mb-8">
      {items.map((item, index) => (
        <div key={item.path || item.label} className="flex items-center space-x-2">
          {index > 0 && <span>/</span>}
          {item.path ? (
            <Link to={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs; 