import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = '54911XXXX-XXXX'; // Reemplazar con el número real
    const message = encodeURIComponent('Hola! Me interesa reservar en Posada del Arcángel. ¿Podrían darme más información?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+54294444-XXXX', '_self'); // Reemplazar con el número real
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 space-y-3"
          >
            {/* Botón WhatsApp */}
            <motion.button
              onClick={handleWhatsApp}
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
              style={{
                backgroundColor: '#25D366',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.button>

            {/* Botón Teléfono */}
            <motion.button
              onClick={handlePhone}
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
              style={{
                backgroundColor: '#8B7355',
                boxShadow: '0 4px 12px rgba(139, 115, 85, 0.3)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-7 h-7 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal de toggle */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
        style={{
          backgroundColor: '#B8860B',
          boxShadow: '0 4px 16px rgba(184, 134, 11, 0.3)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 1 }}
            className="absolute bottom-0 right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            ¡Contáctanos!
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
