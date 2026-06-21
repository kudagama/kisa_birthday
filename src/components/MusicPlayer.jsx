import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Replace this URL with your romantic background track later.
  // Using a soft placeholder track for demonstration if needed.
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/10/25/audio_517d698f24.mp3?filename=romantic-piano-12345.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={audioSrc} loop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-14 h-14 rounded-full bg-dark-surface/80 backdrop-blur-md border border-rose-gold/30 flex items-center justify-center shadow-lg text-rose-gold relative group"
      >
        {isPlaying ? (
          <Pause size={24} className="fill-rose-gold" />
        ) : (
          <Play size={24} className="ml-1 fill-rose-gold" />
        )}
        
        {/* Pulsing effect when playing */}
        {isPlaying && (
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 rounded-full bg-rose-gold/20"
          />
        )}
      </motion.button>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark-surface/90 text-cream text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-rose-gold/20">
        {isPlaying ? "Pause Music" : "Play Music"}
      </div>
    </div>
  );
};

export default MusicPlayer;
