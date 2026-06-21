import React from 'react';
import { motion } from 'framer-motion';

// Custom hand-crafted Flork SVGs to guarantee perfect transparency and high quality!

const FlorkHeart = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.2))' }}>
    <path d="M 25 100 C 20 40, 30 20, 60 25 C 85 30, 85 50, 75 100 Z" fill="white" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="45" r="3" fill="#111" />
    <circle cx="70" cy="45" r="3" fill="#111" />
    <path d="M 50 55 Q 60 60 70 55" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <ellipse cx="40" cy="52" rx="6" ry="3.5" fill="#ffb3c6" opacity="0.8" />
    <path d="M 40 75 Q 60 80 80 65" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 80 65 C 80 50, 100 50, 95 65 L 80 80 L 65 65 C 60 50, 80 50, 80 65 Z" fill="#ff0a54" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

const FlorkHappy = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.2))' }}>
    <path d="M 25 100 C 20 40, 30 20, 60 25 C 85 30, 85 50, 75 100 Z" fill="white" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 45 45 Q 50 40 55 45" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 65 45 Q 70 40 75 45" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 50 55 Q 60 65 70 55" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <ellipse cx="40" cy="52" rx="6" ry="3.5" fill="#ffb3c6" opacity="0.8" />
    <ellipse cx="80" cy="52" rx="6" ry="3.5" fill="#ffb3c6" opacity="0.8" />
    <path d="M 35 70 Q 20 60 10 50" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 85 70 Q 100 60 90 50" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const FlorkLoveEyes = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.2))' }}>
    <path d="M 25 100 C 20 40, 30 20, 60 25 C 85 30, 85 50, 75 100 Z" fill="white" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 50 45 C 50 35, 65 35, 55 50 L 50 55 L 45 50 C 35 35, 50 35, 50 45 Z" fill="#ff0a54" stroke="#111" strokeWidth="2" strokeLinejoin="round" />
    <path d="M 72 45 C 72 35, 87 35, 77 50 L 72 55 L 67 50 C 57 35, 72 35, 72 45 Z" fill="#ff0a54" stroke="#111" strokeWidth="2" strokeLinejoin="round" />
    <path d="M 50 62 Q 60 68 70 62" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 40 85 Q 60 75 80 85" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const FlorkFlower = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.2))' }}>
    <path d="M 25 100 C 20 40, 30 20, 60 25 C 85 30, 85 50, 75 100 Z" fill="white" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="45" r="3" fill="#111" />
    <circle cx="70" cy="45" r="3" fill="#111" />
    <path d="M 50 55 Q 60 60 70 55" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 40 75 L 80 60" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Flower */}
    <circle cx="85" cy="55" r="8" fill="#ffd1dc" stroke="#111" strokeWidth="1.5" />
    <circle cx="75" cy="50" r="8" fill="#ffd1dc" stroke="#111" strokeWidth="1.5" />
    <circle cx="80" cy="65" r="8" fill="#ffd1dc" stroke="#111" strokeWidth="1.5" />
    <circle cx="90" cy="60" r="8" fill="#ffd1dc" stroke="#111" strokeWidth="1.5" />
    <circle cx="82.5" cy="57.5" r="4" fill="#d4af37" stroke="#111" strokeWidth="1.5" />
  </svg>
);


const Stickers = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
      {/* Sticker 1 - Top Left */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-2 md:top-32 md:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 opacity-90 md:opacity-100"
      >
        <FlorkHeart className="w-full h-full" />
      </motion.div>

      {/* Sticker 2 - Middle Right near Timeline */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] right-2 md:right-16 w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 transform scale-x-[-1] opacity-90 md:opacity-100"
      >
        <FlorkLoveEyes className="w-full h-full" />
      </motion.div>

      {/* Sticker 3 - Middle Left near Reasons */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
        className="absolute top-[55%] left-2 md:left-12 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 opacity-90 md:opacity-100"
      >
        <FlorkFlower className="w-full h-full" />
      </motion.div>

      {/* Sticker 4 - Bottom Right near Button */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [2, -4, 2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 right-4 md:right-20 w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 transform scale-x-[-1] opacity-90 md:opacity-100"
      >
        <FlorkHappy className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default Stickers;
