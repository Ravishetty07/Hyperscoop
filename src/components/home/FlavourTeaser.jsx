import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

// Images
import tenderCoconutImg from '../../assets/images/flavours/natural/tender-coconut.jpg';
import belgiumChocolateImg from '../../assets/images/flavours/premium/belgium-chocolate.png';
import mangoImg from '../../assets/images/flavours/natural/mango.jpg';
import strawberryCheesecakeImg from '../../assets/images/flavours/premium/strawberry-cheesecake.png';

const FlavourCard = ({ flavour, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 60 }}
    className="h-full"
  >
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.03}
      transitionSpeed={400}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(236,72,153,0.3)] transition-all duration-300 border-2 border-pink-50 cursor-pointer h-full flex flex-col relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
      
      <div className="relative h-64 overflow-hidden p-6 flex items-center justify-center">
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-pink-100/50 group-hover:bg-pink-100/80 transition-colors duration-500 z-0 rounded-[2.5rem] m-2" />
        
        {/* The Image */}
        <img 
          src={flavour.image} 
          alt={flavour.name} 
          className="w-[85%] h-[85%] object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 drop-shadow-2xl mix-blend-multiply relative z-10"
        />
      </div>
      
      <div className="p-8 text-center flex-grow flex flex-col justify-center bg-white relative z-20">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100">
          <span className="text-xl">✨</span>
        </div>
        <h4 className="text-2xl font-['Fredoka'] text-slate-800 mb-3">{flavour.name}</h4>
        <p className="text-slate-500 text-sm font-['Quicksand'] font-medium leading-relaxed">{flavour.tagline}</p>
      </div>
    </Tilt>
  </motion.div>
);

const FlavourTeaser = () => {
  const teaserFlavours = [
    {
      id: 'tender-coconut',
      name: 'Tender Coconut',
      tagline: 'Fresh and refreshing.',
      image: tenderCoconutImg
    },
    {
      id: 'belgium-chocolate',
      name: 'Belgium Chocolate',
      tagline: 'Deep, dark, and decadent.',
      image: belgiumChocolateImg
    },
    {
      id: 'mango',
      name: 'Mango',
      tagline: 'The king of fruits.',
      image: mangoImg
    },
    {
      id: 'strawberry-cheesecake',
      name: 'Strawberry Cheesecake',
      tagline: 'A dessert in a scoop.',
      image: strawberryCheesecakeImg
    }
  ];

  return (
    <section className="relative py-28 bg-white font-['Quicksand']">
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-4 bg-pink-50 inline-block px-5 py-2 rounded-full shadow-sm border border-pink-100">
              Our Bestsellers
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-['Fredoka'] text-slate-800 mb-6 mt-6 leading-tight"
          >
            Taste the Magic
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            From our 100% natural classics to our decadent premium line, discover your new favorite flavour.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {teaserFlavours.map((flavour, index) => (
            <FlavourCard key={flavour.id} flavour={flavour} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/flavours" 
            className="group inline-flex items-center justify-center px-10 py-5 bg-pink-600 text-white rounded-full font-bold text-sm tracking-widest hover:bg-pink-700 transition-all shadow-xl shadow-pink-500/30 transform hover:-translate-y-1 duration-300"
          >
            View All Flavours
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FlavourTeaser;
