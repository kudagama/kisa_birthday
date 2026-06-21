import React from 'react';
import { motion } from 'framer-motion';

const PolaroidGallery = () => {
  // Placeholders for future images. 
  // You can replace the src with your own image URLs later.
  const photos = [
    { id: 1, src: "/kisara-1.jpg", caption: "Beautiful Smile" },
    { id: 2, src: "/kisara-2.jpg", caption: "My Favorite Person" },
    { id: 3, src: "/kisara-3.jpg", caption: "Perfect Moments" },
    { id: 4, src: "/kisara-4.jpg", caption: "That Cute Pose" },
    { id: 5, src: "/kisara-5.jpg", caption: "Always Gorgeous" },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-cream mb-4">A Million Beautiful Moments</h2>
        <p className="text-cream/60 text-lg font-light">And so many more to come...</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0, 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(255, 209, 220, 0.2), 0 10px 10px -5px rgba(255, 209, 220, 0.1)"
            }}
            className="bg-white p-3 md:p-4 pb-12 md:pb-16 rounded-xl shadow-xl w-64 md:w-72 relative cursor-pointer group"
          >
            <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-gray-100 mb-4 relative">
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter sepia-[0.2] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="font-heading text-dark-bg text-center text-lg absolute bottom-4 w-full left-0 px-4">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PolaroidGallery;
