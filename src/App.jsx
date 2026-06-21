import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import CountdownTimeline from './components/CountdownTimeline';
import PolaroidGallery from './components/PolaroidGallery';
import ReasonsSection from './components/ReasonsSection';
import QuoteSection from './components/QuoteSection';
import SecretMessageModal from './components/SecretMessageModal';
import MusicPlayer from './components/MusicPlayer';
import CutePets from './components/CutePets';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-cream font-sans overflow-x-hidden relative">
      <MusicPlayer />
      <CutePets />
      
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32">
        <HeroSection />
        
        <CountdownTimeline />
        
        <ReasonsSection />
        
        <PolaroidGallery />
        
        <QuoteSection />
        
        <div className="flex justify-center mt-16 mb-24">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold to-soft-pink text-dark-bg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,209,220,0.6)]"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-bg animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Click for a Secret Note
            </span>
          </button>
        </div>
      </main>

      <SecretMessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
