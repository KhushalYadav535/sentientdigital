import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ 
  children, 
  className = '', 
  gradient = 'from-blue-500 via-purple-500 to-indigo-500',
  animate = true 
}) => {
  const baseClasses = `bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold`;
  
  if (!animate) {
    return (
      <span className={`${baseClasses} ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
