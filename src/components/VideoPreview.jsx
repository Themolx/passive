import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoPreview = ({ src, isPlaying, onPlayPause }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => setIsLoaded(true));
      videoRef.current.addEventListener('timeupdate', () => {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && isLoaded) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isLoaded]);

  return (
    <div className="video-preview-container">
      <motion.div 
        className="video-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0.5 }}
      >
        <video 
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          className="preview-video"
          onClick={onPlayPause}
        />
        {!isLoaded && (
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        )}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPreview;
