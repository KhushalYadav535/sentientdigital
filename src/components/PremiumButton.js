import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className = "",
  icon = null,
  disabled = false,
  loading = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900",
    outline: "bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
    glow: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Create particle effect
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 50,
      y: 50,
      angle: (i * 45) * (Math.PI / 180),
      speed: 2 + Math.random() * 2
    }));
    setParticles(newParticles);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setParticles([]);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden group font-semibold rounded-full transition-all duration-300
        ${variants[variant]} ${sizes[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transform-gpu
      `}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: isHovered ? ['-100%', '100%'] : '-100%'
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      />

      {/* Particle effects */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.x, 
              y: particle.y, 
              opacity: 1, 
              scale: 1 
            }}
            animate={{
              x: particle.x + Math.cos(particle.angle) * 50,
              y: particle.y + Math.sin(particle.angle) * 50,
              opacity: 0,
              scale: 0
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
          />
        ))}
      </AnimatePresence>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1.5 : 0,
          opacity: isHovered ? 0 : 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
          />
        ) : (
          icon && (
            <motion.span
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.2 }}
              className="group-hover:scale-110 transition-transform"
            >
              {icon}
            </motion.span>
          )
        )}
        <span>{children}</span>
      </span>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === 'glow' 
            ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)' 
            : 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
        }}
      />
    </motion.button>
  );
};

// Specialized button variants
export const GlowButton = (props) => (
  <PremiumButton {...props} variant="glow" />
);

export const GradientButton = ({ gradient, ...props }) => (
  <PremiumButton 
    {...props} 
    className={`bg-gradient-to-r ${gradient} ${props.className || ''}`}
  />
);

export const NeonButton = (props) => (
  <PremiumButton 
    {...props} 
    className={`${props.className || ''} shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] border border-blue-400/50`}
  />
);

export default PremiumButton;
