import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Particles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate 20 random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    type: Math.random() > 0.5 ? 'heart' : 'circle',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.type === 'circle' ? 'rounded-full bg-rose-gold' : 'text-soft-pink'}`}
          style={{
            width: p.type === 'circle' ? p.size : 'auto',
            height: p.type === 'circle' ? p.size : 'auto',
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.type === 'heart' ? `${p.size + 10}px` : undefined,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, mousePosition.x * 2, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.type === 'heart' && '❤'}
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 w-full overflow-hidden">
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-rose-gold/30 text-rose-gold text-sm tracking-widest uppercase font-medium bg-rose-gold/5 backdrop-blur-sm">
            To My Favorite Person
          </span>
        </motion.div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream via-soft-pink to-rose-gold text-glow mb-4 md:mb-6 leading-tight">
          Happy Birthday Manika,<br /> Kisara!
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Today is all about you. A celebration of the most amazing, gorgeous, and loving person in my world.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-rose-gold/70 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-rose-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
