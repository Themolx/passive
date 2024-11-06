import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p>Your digital art and templates store.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/shop">Shop</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
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