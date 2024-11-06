import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPlaceholderImage } from '../../utils/placeholders';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Cart panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111111] z-50
                     border-l border-white/10 p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center mt-12">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-white/10 pb-4">
                    <img 
                      src={item.thumbnail || getPlaceholderImage(80, 80, 'Product')} 
                      alt={item.title} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-400">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Cart; 