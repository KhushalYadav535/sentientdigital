import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+1234567890',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@sentientdigital.com',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-5 h-5" />
                <span className="absolute right-14 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
