import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnvelopeReveal = ({ onOpenComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    
    // Start fading out the entire overlay after the letter pops out
    setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Completely unmount and reveal site
    setTimeout(() => {
      onOpenComplete();
    }, 2800); 
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleOpen}
        >
          <motion.div 
            animate={isOpened ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cream font-heading text-xl md:text-3xl mb-16 text-glow tracking-wide text-center px-4"
          >
            {isOpened ? "Opening..." : "You have a special delivery. Tap to open!"}
          </motion.div>

          <motion.div 
            className="relative w-80 h-52 md:w-[450px] md:h-[300px]"
            animate={isOpened ? { scale: 1.5, opacity: 0, y: 100 } : { scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
          >
            {/* Back of envelope */}
            <div className="absolute inset-0 bg-[#8c4652] rounded-md shadow-[0_0_40px_rgba(183,110,121,0.3)]" />

            {/* Letter inside */}
            <motion.div 
              className="absolute left-6 right-6 bottom-2 bg-[#fdfbf7] rounded-sm shadow-inner flex flex-col items-center justify-center border border-gray-200"
              initial={{ height: "95%", y: 0 }}
              animate={isOpened ? { height: "160%", y: "-60%" } : { height: "95%", y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-heading text-rose-gold text-2xl md:text-4xl font-bold mb-2">For Kisara</span>
              <span className="text-3xl">❤️</span>
            </motion.div>

            {/* Front folded flaps */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md" viewBox="0 0 100 66" preserveAspectRatio="none">
              {/* Left flap */}
              <polygon points="0,0 50,33 0,66" fill="#b76e79" stroke="#a65d68" strokeWidth="0.5" />
              {/* Right flap */}
              <polygon points="100,0 50,33 100,66" fill="#b76e79" stroke="#a65d68" strokeWidth="0.5" />
              {/* Bottom flap */}
              <polygon points="0,66 50,33 100,66" fill="#c88390" stroke="#b76e79" strokeWidth="0.5" />
            </svg>

            {/* Top Flap (opens up) */}
            <motion.svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none drop-shadow-lg"
              viewBox="0 0 100 66" 
              preserveAspectRatio="none"
              style={{ transformOrigin: "top" }}
              initial={{ rotateX: 0 }}
              animate={isOpened ? { rotateX: 180, zIndex: -1 } : { rotateX: 0, zIndex: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <polygon points="0,0 50,35 100,0" fill="#d08f9c" stroke="#b76e79" strokeWidth="0.5" />
            </motion.svg>
            
            {/* Wax seal */}
            <motion.div 
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-[20%] w-16 h-16 bg-red-700 rounded-full flex items-center justify-center shadow-xl border-2 border-red-900 z-20 cursor-pointer"
              animate={isOpened ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-cream text-2xl drop-shadow-md">💌</span>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeReveal;
