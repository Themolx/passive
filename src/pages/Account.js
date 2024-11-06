import React from 'react';
import { motion } from 'framer-motion';

function Account() {
  const purchases = [
    {
      id: 1,
      title: "Cyberpunk Glitch Effects",
      date: "2024-03-20",
      price: 29.99,
      downloadLink: "#"
    }
    // Add more purchases...
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-12">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Purchase History</h2>
          <div className="space-y-4">
            {purchases.map(purchase => (
              <div key={purchase.id} className="bg-[#111111] p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">{purchase.title}</h3>
                    <p className="text-gray-400 text-sm">{purchase.date}</p>
                  </div>
                  <span className="font-bold">${purchase.price}</span>
                </div>
                <a
                  href={purchase.downloadLink}
                  className="text-white/80 hover:text-white flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl h-fit">
          <h2 className="text-2xl font-bold mb-6">Support</h2>
          <p className="text-gray-400 mb-4">Need help with your purchase?</p>
          <a
            href="mailto:support@example.com"
            className="block w-full text-center bg-white text-black py-3 rounded-full 
                     font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Account; 