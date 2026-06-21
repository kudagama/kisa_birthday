import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Premium SVG Emojis for Love and Kisses
const PREMIUM_ICONS = {
  kissMark: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f48b.svg",
  heart: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/2764.svg",
  sparklingHeart: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f496.svg",
  twoHearts: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f495.svg",
  growingHeart: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f497.svg",
};

const iconKeys = Object.keys(PREMIUM_ICONS);

const FloatingLove = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Spawn a random love element every 1.5 seconds
    const interval = setInterval(() => {
      const randomIconKey = iconKeys[Math.floor(Math.random() * iconKeys.length)];
      const newElement = {
        id: Date.now(),
        icon: PREMIUM_ICONS[randomIconKey],
        x: Math.random() * 90 + 5, // 5% to 95% across the screen
        duration: Math.random() * 6 + 6, // 6 to 12 seconds to float up slowly
        scale: Math.random() * 0.5 + 0.8, // randomize size
        rotation: Math.random() * 40 - 20, // slight random rotation
      };
      setElements(prev => [...prev.slice(-15), newElement]); // Keep max 15 on screen
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {elements.map(el => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0, scale: 0, y: 50, rotate: el.rotation }}
          animate={{ opacity: [0, 0.8, 0], scale: el.scale, y: -1000, rotate: el.rotation + (Math.random() * 20 - 10) }} 
          transition={{ duration: el.duration, ease: "easeOut" }}
          className="absolute w-10 h-10 md:w-14 md:h-14 drop-shadow-xl"
          style={{ left: `${el.x}vw`, bottom: '-10vh' }}
        >
          <img src={el.icon} alt="Love" className="w-full h-full object-contain" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLove;
