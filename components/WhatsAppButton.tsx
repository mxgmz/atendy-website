'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip briefly
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Hola, quiero saber más sobre Atendy');
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 animate-bounce">
          <div className="bg-white rounded-lg shadow-xl p-3 max-w-xs">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
            <p className="text-sm text-gray-700 pr-4">
              ¿Tienes preguntas? <span className="font-semibold">¡Chatea con nosotros!</span>
            </p>
          </div>
          <div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 right-6"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center space-x-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:animate-pulse" />
        <span className="hidden sm:block font-medium pr-2">Chatea con nosotros</span>
      </button>
    </div>
  );
}
