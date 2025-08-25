import React from 'react';
import { motion } from 'framer-motion';

const PremiumDivider = ({ className = "", variant = "default" }) => {
  const variants = {
    default: {
      line: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
      glow: "bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50"
    },
    gradient: {
      line: "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30",
      glow: "bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-pink-500/70"
    },
    neon: {
      line: "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent",
      glow: "bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-pink-400/60"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`relative h-24 overflow-hidden ${className}`}>
      {/* Main divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`absolute inset-0 h-px ${currentVariant.line} transform -skew-y-3`}
      />
      
      {/* Glow effect */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`absolute inset-0 h-1 ${currentVariant.glow} blur-sm transform -skew-y-3`}
      />
      
      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-blue-400/30 rounded-full"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-purple-400/30 transform rotate-45"
      />
      
      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-pink-400/30 transform rotate-45"
      />
    </div>
  );
};

export default PremiumDivider;
