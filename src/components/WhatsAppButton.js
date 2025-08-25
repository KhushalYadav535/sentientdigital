import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to know more about your IT services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppButton;
