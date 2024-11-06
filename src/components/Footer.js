import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MT</h3>
            <p>Your digital art and templates store.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-purple-400 transition-colors">Shop</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: your@email.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 