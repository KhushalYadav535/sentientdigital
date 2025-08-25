import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Shield, Brain } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [progress, setProgress] = useState(0);

  const icons = [Zap, Globe, Shield, Brain];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(iconInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <motion.div
                key={currentIcon}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {React.createElement(icons[currentIcon], { 
                  className: "w-8 h-8 text-white" 
                })}
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Sentient Digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 mb-8"
          >
            Loading Next-Gen Experience...
          </motion.p>

          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-gray-400 mt-4"
          >
            {progress}% Complete
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
