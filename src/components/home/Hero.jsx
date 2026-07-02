import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/video/mix_sundaes.mp4';
import heroPoster from '../../assets/images/flavours/all/_DSC8166-Edit.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => { });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            Scoop into <br />
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
          className="w-full lg:w-1/2 flex items-center justify-center relative z-20 mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-[460px] mx-auto flex justify-center items-center">
            {/* Premium Golden Frame Container */}
            <div className="relative w-full p-2 sm:p-3 bg-white/40 backdrop-blur-sm rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-2 border-white/60">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dca120]/30 to-transparent rounded-[2rem] sm:rounded-[3rem] -z-10" />
              <div className="rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-2 sm:border-4 border-white bg-white relative group aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center w-full cursor-pointer" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src={heroVideo}
                  poster={heroPoster}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Premium Play/Pause and Sound Buttons */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex gap-2 sm:gap-3 z-30 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-xl hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                    )}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-xl hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
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
