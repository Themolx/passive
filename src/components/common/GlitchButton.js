import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function GlitchButton({ children, to, href, className = '', onClick, ...props }) {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% chance to glitch
        triggerGlitch();
      }
    }, 1000);

    return () => clearInterval(glitchInterval);
  }, []);

  const baseClassName = `${className} ${isGlitching ? 'glitch-text' : ''}`;

  if (to) {
    return (
      <Link 
        to={to}
        className={baseClassName}
        onMouseEnter={triggerGlitch}
        data-text={children}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href}
        className={baseClassName}
        onMouseEnter={triggerGlitch}
        data-text={children}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={baseClassName}
      onClick={(e) => {
        triggerGlitch();
        onClick?.(e);
      }}
      data-text={children}
      {...props}
    >
      {children}
    </button>
  );
}

export default GlitchButton; 