import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FinalCTA = () => {
  const handleContact = (method) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#FDFBEE' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
            ¿Listo para tu Escape Patagónico?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Reserva ahora y vive una experiencia inolvidable en nuestras cabañas. 
            Te esperamos para crear recuerdos que durarán toda la vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => handleContact('whatsapp')}
              className="text-white px-6 py-4 text-base rounded-full flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-200 min-w-fit"
              style={{
                backgroundColor: '#8B7355',
                border: '2px solid #8B7355',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#A0886B';
                e.target.style.borderColor = '#A0886B';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8B7355';
                e.target.style.borderColor = '#8B7355';
              }}
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">
                WhatsApp: +54911 XXXX-XXXX
              </span>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleContact('phone')}
                className="text-white px-4 py-4 text-base rounded-full flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-200 min-w-fit"
                style={{
                  backgroundColor: '#B8860B',
                  border: '2px solid #B8860B',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#DAA520';
                  e.target.style.borderColor = '#DAA520';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#B8860B';
                  e.target.style.borderColor = '#B8860B';
                }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  (0294) 444-XXXX
                </span>
              </Button>
              
              <Button 
                onClick={() => handleContact('email')}
                className="text-white px-4 py-4 text-base rounded-full flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-200 min-w-fit"
                style={{
                  backgroundColor: '#CD853F',
                  border: '2px solid #CD853F',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#DEB887';
                  e.target.style.borderColor = '#DEB887';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#CD853F';
                  e.target.style.borderColor = '#CD853F';
                }}
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  info@posadadelarcangel.com
                </span>
              </Button>
            </div>
          </div>

          <motion.div 
            className="mt-12 p-6 rounded-2xl border-2"
            style={{
              background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 100%)',
              borderColor: '#D2B48C'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-medium" style={{ color: '#8B4513' }}>
              <span className="font-bold text-lg" style={{ color: '#654321' }}>¡Oferta especial!</span> 
              <br className="sm:hidden" />
              <span className="sm:ml-2">Reserva con 30 días de anticipación y obtén un 15% de descuento en tu estadía.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;