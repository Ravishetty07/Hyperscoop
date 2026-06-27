import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, rotateY: 15, z: -500 }}
      animate={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -15, z: -500 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="perspective-1000 w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
