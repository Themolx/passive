import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AePanelDemo = () => {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [weekNumber, setWeekNumber] = useState(1);
  const [status, setStatus] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  // Simulated logos data
  const kauflandLogos = [
    { id: 1, name: "Kaufland Logo Main" },
    { id: 2, name: "Kaufland Logo Alt" },
    { id: 3, name: "Kaufland Icon" }
  ];

  const formatWeekNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  const handleImportLogo = (logoName) => {
    setStatus(`Importing ${logoName}...`);
    setTimeout(() => setStatus(''), 2000);
  };

  const handleRenderClick = () => {
    setShowDialog(true);
  };

  const handleConfirmRender = () => {
    setShowDialog(false);
    setStatus('✨ Render started');
    setTimeout(() => {
      setStatus('');
      setWeekNumber(prev => prev + 1);
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto bg-[#2D2D2D] p-6 rounded-xl shadow-xl">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl mb-6 text-[#E4E4E4]"
      >
        Kaufland Assets Library
      </motion.h2>

      {/* Render Queue Button */}
      <motion.button
        whileHover={{ scale: 1.02, backgroundColor: '#43A047' }}
        whileTap={{ scale: 0.98 }}
        onClick={handleRenderClick}
        className="w-full p-3 mb-4 rounded-lg bg-[#4CAF50] text-white flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <span>🎬</span>
          Deliver the Week!
        </span>
        <span>▼</span>
      </motion.button>

      {/* Library Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsLibraryOpen(!isLibraryOpen)}
        className="w-full p-3 mb-4 rounded-lg bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white"
      >
        {isLibraryOpen ? 'Close Library' : 'Open Logo Library'}
      </motion.button>

      {/* Logo Library Panel */}
      <AnimatePresence>
        {isLibraryOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-4"
          >
            <div className="bg-[#363636] rounded-lg p-4 mt-2">
              {kauflandLogos.map((logo) => (
                <motion.button
                  key={logo.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleImportLogo(logo.name)}
                  className="w-full p-3 mb-2 rounded-lg bg-[#2D2D2D] text-white border border-white/10 flex items-center gap-2"
                >
                  <span className="w-6 h-6 bg-[#FF416C] rounded flex items-center justify-center text-xs">
                    L
                  </span>
                  {logo.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Messages */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-3 rounded-lg ${
              status.includes('Error')
                ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                : 'bg-green-500/10 text-green-400 border border-green-500/20'
            } flex items-center gap-2`}
          >
            <motion.span
              animate={{ 
                rotate: status.includes('✨') ? [0, 360] : 0,
                scale: status.includes('✨') ? [1, 1.2, 1] : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {status.includes('Error') ? '⚠️' : '✨'}
            </motion.span>
            {status}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#2D2D2D] p-6 rounded-xl max-w-sm w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl text-white mb-4">Confirm Render</h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400">Week Number:</span>
                <input
                  type="number"
                  value={formatWeekNumber(weekNumber)}
                  onChange={(e) => setWeekNumber(Math.max(1, parseInt(e.target.value) || 1))}
                  className="bg-[#363636] border border-green-500/30 rounded p-2 text-green-400 w-20 text-center"
                />
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirmRender}
                  className="flex-1 p-3 rounded-lg bg-green-500 text-white"
                >
                  Confirm
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowDialog(false)}
                  className="flex-1 p-3 rounded-lg bg-gray-600 text-white"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AePanelDemo;
