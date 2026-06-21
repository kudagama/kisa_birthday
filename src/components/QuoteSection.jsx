import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="py-24 relative flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-gold/5 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl text-center relative z-10 px-6"
      >
        <svg className="w-12 h-12 md:w-16 md:h-16 text-rose-gold/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        
        <p className="text-2xl md:text-4xl lg:text-5xl font-heading text-cream italic leading-snug text-glow">
          "I look at you and see the rest of my life in front of my eyes."
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-rose-gold/60" />
          <span className="text-rose-gold tracking-widest uppercase text-sm font-medium">Forever</span>
          <div className="w-12 h-[1px] bg-rose-gold/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
