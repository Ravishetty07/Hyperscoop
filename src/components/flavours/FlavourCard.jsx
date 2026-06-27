import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Sparkles, Leaf } from 'lucide-react';

const FlavourCard = ({ flavour, category, index }) => {
  const colorMap = {
    pink: 'rgba(236, 72, 153, 0.4)',
    green: 'rgba(249, 115, 22, 0.3)', // Map green to brand orange
    amber: 'rgba(251, 146, 60, 0.4)'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: (index % 10) * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="h-full"
    >
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.03}
        transitionSpeed={400}
        className="h-full"
      >
        <motion.div 
          className="group relative h-full rounded-[2.5rem] p-6 flex flex-col items-center justify-between cursor-pointer overflow-hidden border-2 border-pink-50 bg-white"
          whileHover={{ 
            boxShadow: `0 30px 60px -15px ${colorMap[flavour.color] || 'rgba(236,72,153,0.3)'}` 
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle Background Blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-50 rounded-full blur-3xl -z-10 group-hover:bg-orange-50 transition-colors duration-700"></div>

          {/* Category Badge */}
          <motion.div
            className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg z-20 ${category === 'natural' ? 'bg-orange-400' : 'bg-pink-500'}`}
            whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            title={category === 'natural' ? '100% Natural' : 'Premium'}
          >
            {category === 'natural' ? <Leaf size={18} /> : <Sparkles size={18} />}
          </motion.div>
          
          <div className="w-full flex justify-center items-center h-56 mb-8 mt-4 relative z-20">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-pink-100/30 group-hover:bg-pink-100/60 transition-colors duration-500 z-0 rounded-[2rem]" />
            
            <motion.img 
              src={flavour.image} 
              alt={flavour.name} 
              className="max-h-full max-w-[85%] object-contain filter drop-shadow-2xl mix-blend-multiply relative z-10"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15, y: -8, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>
          
          <div className="text-center relative z-20 w-full flex-grow flex flex-col justify-end bg-white">
            <h3 className="text-2xl font-['Fredoka'] text-slate-800 mb-3 leading-tight">{flavour.name}</h3>
            <p className="text-sm font-['Quicksand'] font-medium text-slate-500 leading-relaxed px-2">
              {flavour.description || "Experience the rich, creamy texture of our 100% vegetarian ice cream."}
            </p>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default FlavourCard;
