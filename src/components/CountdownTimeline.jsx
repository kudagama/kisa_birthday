import React from 'react';
import { motion } from 'framer-motion';

const CountdownTimeline = () => {
  const formattedDate = "June 22nd";

  return (
    <section className="py-20 flex flex-col items-center justify-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl relative"
      >
        {/* Glow effect behind the box */}
        <div className="absolute inset-0 bg-rose-gold/20 blur-3xl rounded-full" />
        
        <div className="relative z-10 bg-dark-surface/50 backdrop-blur-md border border-rose-gold/20 rounded-3xl p-10 md:p-16 text-center box-glow overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent opacity-50" />
          
          <h2 className="text-sm tracking-[0.3em] text-rose-gold uppercase mb-4 font-medium">A Date to Remember</h2>
          
          <motion.div 
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255, 209, 220, 0.4)", 
                "0 0 25px rgba(255, 209, 220, 0.8)", 
                "0 0 10px rgba(255, 209, 220, 0.4)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-heading font-bold text-cream mb-6"
          >
            {formattedDate}
          </motion.div>
          
          <div className="w-16 h-[1px] bg-rose-gold/50 mx-auto mb-6" />
          
          <p className="text-cream/80 text-lg leading-relaxed font-light">
            Out of all the days in the year, this one is my absolute favorite. 
            Because it's the day the world became a brighter, more beautiful place.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimeline;
