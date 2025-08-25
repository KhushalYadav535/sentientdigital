import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, MessageCircle, Phone, Mail, Star } from 'lucide-react';

const PremiumFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  const actions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'from-green-500 to-emerald-500',
      action: () => window.open('https://wa.me/1234567890', '_blank')
    },
    {
      icon: Phone,
      label: 'Call Us',
      color: 'from-blue-500 to-cyan-500',
      action: () => window.open('tel:+1234567890', '_blank')
    },
    {
      icon: Mail,
      label: 'Email',
      color: 'from-purple-500 to-pink-500',
      action: () => window.open('mailto:info@sentientdigital.com', '_blank')
    },
    {
      icon: Star,
      label: 'Rate Us',
      color: 'from-yellow-500 to-orange-500',
      action: () => window.open('#', '_blank')
    }
  ];

  const handleMainButtonClick = () => {
    setIsOpen(!isOpen);
    
    // Create particle effect
    if (!isOpen) {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: 50,
        y: 50,
        angle: (i * 30) * (Math.PI / 180),
        speed: 3 + Math.random() * 2
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
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
              x: particle.x + Math.cos(particle.angle) * 80,
              y: particle.y + Math.sin(particle.angle) * 80,
              opacity: 0,
              scale: 0
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none"
          />
        ))}
      </AnimatePresence>

      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-4">
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                onClick={action.action}
                className={`
                  group relative w-14 h-14 bg-gradient-to-r ${action.color} 
                  rounded-full text-white shadow-lg hover:shadow-xl 
                  transition-all duration-300 flex items-center justify-center
                  hover:scale-110 transform
                `}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50"
                  style={{
                    background: `linear-gradient(45deg, ${action.color.split(' ')[2]}, ${action.color.split(' ')[4]})`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <action.icon className="w-6 h-6 relative z-10" />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap"
                >
                  {action.label}
                </motion.div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={handleMainButtonClick}
        className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50"
          style={{
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8 relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-8 h-8 relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border-2 border-white/30"
        />
      </motion.button>
    </div>
  );
};

export default PremiumFloatingButton;
