import React, { useState, useRef, useCallback } from 'react';

const ImageCompareSlider = ({ 
  beforeSrc,
  afterSrc,
  isVideo = false,
  beforeLabel = "Before",
  afterLabel = "After"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleMove = useCallback((clientX) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  const MediaElement = ({ src, isAfter = false }) => {
    if (isVideo) {
      return (
        <div className="absolute inset-0">
          <video
            ref={isAfter ? afterVideoRef : beforeVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => isAfter ? setAfterLoaded(true) : setBeforeLoaded(true)}
            onError={(e) => {
              console.error(`Video failed to load: ${src}`, e);
              setError(`Failed to load ${isAfter ? 'after' : 'before'} video`);
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {(!isAfter && !beforeLoaded) || (isAfter && !afterLoaded) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-white flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2" />
                <div>Loading video...</div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <img
        src={src}
        alt={isAfter ? "After Effect" : "Before Effect"}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  };

  if (error) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20 flex flex-col items-center justify-center">
        <div className="text-red-500 mb-2">{error}</div>
        <div className="text-sm text-gray-400">
          Paths: {beforeSrc} | {afterSrc}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={sliderRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <MediaElement src={afterSrc} isAfter={true} />
      
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <MediaElement src={beforeSrc} />
      </div>

      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -ml-1 w-2 bg-white">
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" transform="rotate(180 12 12)"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
        {afterLabel}
      </div>
    </div>
  );
};

export default ImageCompareSlider; 