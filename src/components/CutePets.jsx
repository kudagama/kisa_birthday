import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Using high-quality premium vector SVGs (Twemoji) instead of default OS text emojis
const PREMIUM_ICONS = {
  catRunning: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f408.svg",
  dogRunning: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f415.svg",
  catFace: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f431.svg",
  dogFace: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f436.svg",
  kissFace: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f618.svg",
  kissMark: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f48b.svg",
  heart: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f496.svg",
  paw: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f43e.svg"
};

const CutePets = () => {
  // A cat running left to right
  const catAnimation = {
    x: ['-10vw', '110vw'],
    y: [0, -15, 0, -15, 0], // bouncing
    transition: {
      x: { repeat: Infinity, duration: 12, ease: "linear" },
      y: { repeat: Infinity, duration: 0.4, ease: "easeInOut" }
    }
  };

  // A dog running right to left
  const dogAnimation = {
    x: ['110vw', '-10vw'],
    y: [0, -20, 0, -20, 0],
    transition: {
      x: { repeat: Infinity, duration: 10, ease: "linear", delay: 2 },
      y: { repeat: Infinity, duration: 0.35, ease: "easeInOut" }
    }
  };

  const [kisses, setKisses] = useState([]);

  useEffect(() => {
    // Spawn a kiss every 3 seconds
    const interval = setInterval(() => {
      const newKiss = {
        id: Date.now(),
        x: Math.random() * 80 + 10, 
        y: Math.random() * 80 + 10, 
      };
      setKisses(prev => [...prev.slice(-5), newKiss]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      
      {/* Running Cat Vector */}
      <motion.div 
        animate={catAnimation}
        className="absolute bottom-4 w-16 h-16 drop-shadow-xl"
      >
        <img src={PREMIUM_ICONS.catRunning} alt="Cat" className="w-full h-full object-contain" />
      </motion.div>

      {/* Running Dog Vector */}
      <motion.div 
        animate={dogAnimation}
        className="absolute bottom-16 w-20 h-20 drop-shadow-xl"
        style={{ transform: "scaleX(-1)" }} // Flip dog to face left
      >
        <img src={PREMIUM_ICONS.dogRunning} alt="Dog" className="w-full h-full object-contain" />
      </motion.div>
      
      {/* Peeking cat sending kisses from the left side */}
      <motion.div
        animate={{
          x: [-80, 10, 10, -80],
          rotate: [0, 15, 15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute left-[-20px] top-[35%] flex items-center gap-2 drop-shadow-xl"
      >
        <img src={PREMIUM_ICONS.catFace} alt="Cat face" className="w-20 h-20" />
        <motion.div
          animate={{ opacity: [0, 1, 0], x: [0, 40], y: [0, -30], scale: [0.5, 1.5] }}
          transition={{ repeat: Infinity, duration: 8, delay: 5.5 }}
          className="w-12 h-12"
        >
          <img src={PREMIUM_ICONS.kissFace} alt="Kiss" className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* Peeking dog sending hearts from the right side */}
      <motion.div
        animate={{
          x: [80, -10, -10, 80],
          rotate: [0, -15, -15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute right-[-20px] top-[65%] flex flex-row-reverse items-center gap-2 drop-shadow-xl"
      >
        <img src={PREMIUM_ICONS.dogFace} alt="Dog face" className="w-24 h-24" />
        <motion.div
          animate={{ opacity: [0, 1, 0], x: [0, -40], y: [0, -30], scale: [0.5, 1.5] }}
          transition={{ repeat: Infinity, duration: 9, delay: 3.5 }}
          className="w-12 h-12"
        >
          <img src={PREMIUM_ICONS.heart} alt="Heart" className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* Floating Kisses all around */}
      {kisses.map(kiss => (
        <motion.div
          key={kiss.id}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2], y: -80 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute w-12 h-12 drop-shadow-lg"
          style={{ left: `${kiss.x}vw`, top: `${kiss.y}vh` }}
        >
          <img src={PREMIUM_ICONS.kissMark} alt="Kiss Mark" className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default CutePets;
