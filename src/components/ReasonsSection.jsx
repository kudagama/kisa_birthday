import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const reasons = [
  { id: 1, title: "Your Beautiful Heart", text: "You care so deeply about everyone around you. Your kindness is my favorite thing about you." },
  { id: 2, title: "Your Perfect Smile", text: "Every time you smile, my whole world lights up. It's the most beautiful sight." },
  { id: 3, title: "The Way You Love", text: "You make me feel like the luckiest person alive just by being you. You are my home." },
];

const ReasonsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream to-rose-gold mb-4"
        >
          Things I Adore About You
        </motion.h2>
        <div className="w-24 h-1 bg-rose-gold/40 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-dark-surface/50 backdrop-blur-sm border border-rose-gold/20 p-8 rounded-2xl shadow-xl group hover:border-rose-gold/50 transition-colors"
          >
            <div className="mb-6 bg-rose-gold/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Heart className="text-rose-gold w-8 h-8 group-hover:fill-rose-gold transition-colors" />
            </div>
            <h3 className="text-xl font-heading text-cream mb-3">{reason.title}</h3>
            <p className="text-cream/60 font-light leading-relaxed">
              {reason.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
