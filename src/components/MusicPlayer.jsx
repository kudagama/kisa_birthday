import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  // Autoplay is set to true so it starts when the site is revealed
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Using the local MP3 file that you placed in the public folder
  const audioSrc = "/One_Direction_-_Night_Changes_Acoustic_Version_Life_Music_(mp3.pm).mp3";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Attempt to play, and if the browser blocks it, gracefully pause the UI state
        audioRef.current.play().catch(e => {
          console.log("Audio play failed (likely browser autoplay policy):", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group flex items-center gap-3">
      
      {/* Standard HTML5 Audio */}
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      
      {/* Tooltip */}
      <div className="bg-dark-surface/90 text-cream text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-rose-gold/20 hidden md:block">
        {isPlaying ? "Pause Music" : "Play Music"}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-surface/80 backdrop-blur-md border border-rose-gold/30 flex items-center justify-center shadow-lg text-rose-gold relative"
      >
        {isPlaying ? (
          <Pause size={20} className="fill-rose-gold md:w-6 md:h-6" />
        ) : (
          <Play size={20} className="ml-1 fill-rose-gold md:w-6 md:h-6" />
        )}
        
        {/* Pulsing effect when playing */}
        {isPlaying && (
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 rounded-full bg-rose-gold/20 pointer-events-none"
          />
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
