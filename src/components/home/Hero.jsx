import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/video/mix sundaes.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 2.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Attempt to unmute video after it starts playing
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptUnmute = () => {
      video.muted = false;
      video.play().catch(() => {});
    };

    // Try to unmute after a short delay
    const timer = setTimeout(attemptUnmute, 500);
    
    // Also try on user interaction
    const handleInteraction = () => {
      attemptUnmute();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[#fafafa] overflow-hidden flex flex-col font-['Inter'] pt-12 md:pt-20">
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft radial glow behind image to help blending */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-100"></div>
      </div>

      {/* Floating Sweet Icons */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[15%] left-[8%] text-5xl md:text-6xl filter drop-shadow-xl opacity-80">🍦</motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute top-[65%] left-[5%] text-4xl md:text-5xl filter drop-shadow-xl opacity-70">🍧</motion.div>
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="absolute top-[20%] right-[45%] text-5xl md:text-6xl filter drop-shadow-xl opacity-60">🍨</motion.div>
        <motion.div animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[25%] right-[50%] text-4xl md:text-5xl filter drop-shadow-xl opacity-80">🍒</motion.div>
        <motion.div animate={{ y: [0, -35, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }} className="absolute top-[10%] right-[10%] text-4xl md:text-5xl filter drop-shadow-xl opacity-70">🍓</motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full gap-12 lg:gap-8 pb-32">
        
        {/* Left: Elegant Typography */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 mb-6 text-white font-bold tracking-widest text-xs md:text-sm uppercase bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2.5 rounded-full shadow-lg shadow-green-600/20 border border-green-400/50">
            100% Vegetarian
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-[5.5rem] text-[#2d1b2e] leading-[1.1] font-extrabold mb-6">
            <span className="sr-only">100% Natural and Vegetarian Ice Cream in Bangalore</span>
            Scoop into <br/>
            <span className="italic font-normal text-[#dca120]">Pure Happiness</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-slate-600 text-lg md:text-xl max-w-md font-medium leading-relaxed mb-10">
            Made with real ingredients, crafted with love. Taste the joy in every single scoop.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link to="/flavours" className="inline-block group relative overflow-hidden bg-pink-600 text-white px-10 py-4 rounded-full hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-pink-500/30">
              <span className="relative z-10 font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                Explore Flavours <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Large Image (hero.jpg) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center relative z-20"
        >
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative w-full flex justify-center items-center"
          >
            {/* Premium Golden Frame Container */}
            <div className="relative p-3 bg-white/40 backdrop-blur-sm rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-2 border-white/60">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dca120]/30 to-transparent rounded-[3rem] -z-10" />
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white bg-white relative">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  autoPlay
                  muted={true}
                  loop
                  playsInline
                  preload="auto"
                  className="w-full max-w-[500px] object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Improved Bottom Divider matching the flow */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* Layered waves transitioning smoothly into the next section's white background */}
        <svg className="relative block w-full h-[100px] md:h-[180px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#fef3c7" fillOpacity="0.6" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ffffff" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
