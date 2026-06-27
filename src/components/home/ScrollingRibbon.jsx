import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingRibbon = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress relative to this component's position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress into horizontal movement
  // Moving from positive X (right) to negative X (left)
  const x1 = useTransform(scrollYProgress, [0, 1], [200, -800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 200]);

  return (
    <section ref={containerRef} className="relative py-12 bg-[#fafafa] overflow-hidden flex flex-col gap-4 z-20 -mt-10">
      
      {/* Ribbon 1: Moves Left */}
      <div className="relative w-[110%] -left-[5%] h-16 md:h-20 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center shadow-lg -rotate-2">
        <motion.div 
          className="flex whitespace-nowrap text-white font-['Playfair_Display'] font-black text-3xl md:text-4xl uppercase tracking-[0.2em]"
          style={{ x: x1 }}
        >
          {Array(10).fill().map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6">HYPERSCOOP</span>
              <span className="mx-6 text-pink-200">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Ribbon 2: Moves Right */}
      <div className="relative w-[110%] -left-[5%] h-16 md:h-20 bg-gradient-to-r from-[#dca120] to-yellow-500 flex items-center shadow-lg rotate-2 -mt-6">
        <motion.div 
          className="flex whitespace-nowrap text-white font-['Playfair_Display'] font-black text-3xl md:text-4xl uppercase tracking-[0.2em]"
          style={{ x: x2 }}
        >
          {Array(10).fill().map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6">100% NATURAL</span>
              <span className="mx-6 text-yellow-100">✦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ScrollingRibbon;
