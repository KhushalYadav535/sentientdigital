import React from 'react';
import { motion } from 'framer-motion';

// Floating Gradient Orbs Component
export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
      />
      
      {/* Medium floating orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
      />
      
      {/* Small floating orb */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
      />
      
      {/* Bottom right orb */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"
      />
    </div>
  );
};

// Animated Background Grid Component
export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}>
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

// Premium Loading Spinner Component
export const PremiumSpinner = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${sizeClasses[size]} relative`}
      >
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        <motion.div
          animate={{
            borderTopColor: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
        />
      </motion.div>
    </div>
  );
};

// Animated Text Reveal Component
export const AnimatedTextReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Premium Card Hover Effect Component
export const PremiumCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className={`card-hover-effect glass-card rounded-2xl p-8 border border-white/10 hover:border-white/20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Animated Counter Component
export const AnimatedCounter = ({ end, duration = 2, className = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className={`font-bold ${className}`}>
      {count}+
    </span>
  );
};

// Premium Button Component
export const PremiumButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className = "",
  icon = null 
}) => {
  const variants = {
    primary: "btn-premium",
    secondary: "btn-secondary",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} ${className} group flex items-center gap-2 font-semibold rounded-full transition-all duration-300`}
    >
      {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

// Animated Section Divider Component
export const AnimatedDivider = ({ className = "" }) => {
  return (
    <div className={`section-divider ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
};

// Premium Image Component with Hover Effects
export const PremiumImage = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`image-hover-effect ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

// Animated Progress Bar Component
export const AnimatedProgressBar = ({ progress, className = "" }) => {
  return (
    <div className={`w-full bg-white/10 rounded-full h-2 overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      />
    </div>
  );
};

// Premium Badge Component
export const PremiumBadge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30",
    success: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30",
    warning: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30",
    error: "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border-red-500/30"
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default {
  FloatingOrbs,
  AnimatedGrid,
  PremiumSpinner,
  AnimatedTextReveal,
  PremiumCard,
  AnimatedCounter,
  PremiumButton,
  AnimatedDivider,
  PremiumImage,
  AnimatedProgressBar,
  PremiumBadge
};
