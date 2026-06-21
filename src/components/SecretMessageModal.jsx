import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 0.05 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed * 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, startTyping, text, speed]);

  return <span>{displayedText}</span>;
};

const SecretMessageModal = ({ isOpen, onClose }) => {
  const message = `My Dearest Kisara,

Words can never fully capture how much you mean to me, but today, of all days, I wanted to try. 

From the moment you walked into my life, everything changed for the better. Your smile is my favorite sight, your laugh is my favorite sound, and your happiness is my greatest priority.

You inspire me every single day with your kindness, your strength, and your beautiful heart. I am so incredibly lucky to call you mine. 

Happy Birthday to the love of my life. I promise to spend this year, and every year after, making sure you know exactly how special you are.

Forever yours,
Anuuuuuuu
`;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-dark-surface border border-rose-gold/30 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(183,110,121,0.2)] scrollbar-hide"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-cream/50 hover:text-rose-gold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-rose-gold mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="font-heading text-lg md:text-xl leading-loose text-cream/90 whitespace-pre-wrap">
              {isOpen && <TypewriterText text={message} delay={0.3} speed={0.03} />}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SecretMessageModal;
