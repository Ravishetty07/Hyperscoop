import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          {/* Animated 3D-styled SVG Path for Cone Filling */}
          <div className="relative w-32 h-32 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <linearGradient id="coneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#faedcd" />
                  <stop offset="100%" stopColor="#d4a373" />
                </linearGradient>
                <radialGradient id="scoopGradient" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#fbcfe8" />
                  <stop offset="100%" stopColor="#db2777" />
                </radialGradient>
              </defs>
              
              {/* Cone Base (Drawn first) */}
              <motion.path
                d="M30 45 L50 90 L70 45 Z"
                fill="none"
                stroke="#d4a373"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.path
                d="M30 45 L50 90 L70 45 Z"
                fill="url(#coneGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              />

              {/* Grid pattern on cone */}
              <motion.path
                d="M35 55 L65 55 M40 65 L60 65 M45 75 L55 75"
                fill="none"
                stroke="#d4a373"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />

              {/* Scoop Filling (Drawn second) */}
              <motion.path
                d="M25 45 C25 20, 75 20, 75 45 C75 55, 25 55, 25 45 Z"
                fill="none"
                stroke="#ec4899"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              />
              <motion.path
                d="M25 45 C25 20, 75 20, 75 45 C75 55, 25 55, 25 45 Z"
                fill="url(#scoopGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
              />
            </svg>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl font-extrabold text-pink-500 tracking-wider"
          >
            HYPERSCOOP
          </motion.h2>
          
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
