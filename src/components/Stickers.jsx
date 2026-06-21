import React from 'react';
import { motion } from 'framer-motion';

const Stickers = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Sticker 1 - Top Left */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-4 md:top-32 md:left-10 w-24 h-24 md:w-32 md:h-32 opacity-90 drop-shadow-lg"
      >
        <img src="/sticker-1.png" alt="Cute Sticker" className="w-full h-full object-contain" />
      </motion.div>

      {/* Sticker 2 - Middle Right near Timeline */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] right-4 md:right-16 w-28 h-28 md:w-36 md:h-36 opacity-90 drop-shadow-lg"
      >
        <img src="/sticker-2.png" alt="Cute Sticker" className="w-full h-full object-contain" />
      </motion.div>

      {/* Sticker 3 - Middle Left near Reasons */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
        className="absolute top-[55%] left-4 md:left-12 w-24 h-24 md:w-32 md:h-32 opacity-90 drop-shadow-lg"
      >
        <img src="/sticker-3.png" alt="Cute Sticker" className="w-full h-full object-contain transform scale-x-[-1]" />
      </motion.div>

      {/* Sticker 4 - Bottom Right near Button */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [2, -4, 2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 right-8 md:right-20 w-24 h-24 md:w-32 md:h-32 opacity-90 drop-shadow-lg"
      >
        <img src="/sticker-4.png" alt="Cute Sticker" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Stickers;
