import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 20));
  }, [scrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="fixed w-full z-50 py-4"
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        backgroundColor: isScrolled ? 'rgba(15, 15, 15, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.span 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MT
            </motion.span>
          </Link>
          
          <div className="flex items-center gap-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Shop' },
              { path: '/blog', label: 'Blog' },
              { path: '/about', label: 'About' },
            ].map(({ path, label }) => (
              <motion.div
                key={path}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                <Link
                  to={path}
                  className={`nav-link ${isActive(path) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar; 