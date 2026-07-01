import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const FlavourCard = ({ flavour, onOpen }) => {
  const colorMap = {
    pink: 'rgba(236, 72, 153, 0.3)',
    green: 'rgba(249, 115, 22, 0.25)',
    amber: 'rgba(251, 146, 60, 0.3)'
  };

  return (
    <motion.div className="h-full">
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.03}
        transitionSpeed={400}
        className="h-full"
      >
        <motion.div
          className="group relative h-full rounded-[2.5rem] p-4 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-pink-50 bg-white"
          whileHover={{
            boxShadow: `0 30px 60px -15px ${colorMap[flavour.color] || 'rgba(236,72,153,0.3)'}`,
          }}
          transition={{ duration: 0.3 }}
          onClick={onOpen}
        >
          <div className="absolute inset-0 bg-pink-50/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.img
              layoutId={flavour.id}
              src={flavour.image}
              alt={flavour.name}
              className="max-h-[90%] max-w-[90%] object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default FlavourCard;
