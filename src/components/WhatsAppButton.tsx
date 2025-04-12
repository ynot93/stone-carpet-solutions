import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/254722688664', '_blank');
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      onClick={handleClick}
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;