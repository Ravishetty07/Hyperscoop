import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pineappleImg from '../../assets/images/logo/pinapple.jpeg';

const AboutPreview = () => {
  return (
    <section className="relative py-24 bg-[#fff8fa] overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,126.8,196.42,115.3,239.5,107.6,280.9,89.5,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl p-2 bg-white">
              <div className="rounded-[1.5rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply z-10" />
                <img 
                  src={pineappleImg} 
                  alt="Hyperscoop Ice Cream" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-3 bg-pink-100 inline-block px-4 py-1 rounded-full">Our Story</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d1b2e] mb-6 leading-[1.1]">
              Share a scoop,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Share a SMILE</span>
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
              We believe that joy is contagious. That's why we make our ice cream from fresh milk, cane sugar, and handpicked sun-ripe fruit. No additives, no preservatives, no artificial colours or flavouring. Just pure, natural delight.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              From the history of ice cream to our modern, guest-first parlours, everything we do is crafted to give you an outstanding experience.
            </p>
            
            <Link 
              to="/about"
              className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg border border-pink-100 hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Read our full story
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
