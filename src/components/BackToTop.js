import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 neon-glow"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
