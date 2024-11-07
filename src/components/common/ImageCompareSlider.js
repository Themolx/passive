import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function ImageCompareSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full) */}
      <img
        src={afterImage}
        alt="After Effect"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Effect"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -ml-1 w-2 bg-white cursor-ew-resize">
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" transform="rotate(180 12 12)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
        After
      </div>
    </div>
  );
}

export default ImageCompareSlider; 