import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import coneLogo from '../../assets/images/logo/cone-removebg-preview.png';
import brandLogo from '../../assets/images/logo/image-removebg-preview (1).png';

const Preloader = ({ onLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial assets
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoaded) setTimeout(onLoaded, 800); // Callback after exit animation
    }, 1500);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-pink-50 flex flex-col items-center justify-center overflow-hidden perspective-1000"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8">
            <motion.img
              src={coneLogo}
              alt="Loading ice cream cone"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              className="w-full h-full object-contain"
            />
          </div>

          <motion.img
            src={brandLogo}
            alt="Loading brand logo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="w-48 md:w-60 h-auto object-contain mx-auto"
          />
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.2, duration: 1.3, ease: "linear" }}
            className="h-1 bg-pink-400 mt-4 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
