import React from 'react';
import { Link } from 'react-router-dom';
import FlavourCard from '../flavours/FlavourCard';

// Images
import dsc8166Edit from '../../assets/images/flavours/all/_DSC8166-Edit.jpg';
import dsc8482 from '../../assets/images/flavours/all/_DSC8482.jpg';
import dsc8641 from '../../assets/images/flavours/all/_DSC8641.jpg';
import dsc8653 from '../../assets/images/flavours/all/_DSC8653.jpg';

const FlavourTeaser = () => {
  const teaserFlavours = [
    {
      id: 'tender-coconut',
      name: 'Tender Coconut',
      image: dsc8166Edit,
    },
    {
      id: 'belgium-chocolate',
      name: 'Belgium Chocolate',
      image: dsc8482,
    },
    {
      id: 'mango',
      name: 'Mango',
      image: dsc8641,
    },
    {
      id: 'strawberry-cheesecake',
      name: 'Strawberry Cheesecake',
      image: dsc8653,
    }
  ];

  return (
    <section className="relative py-28 bg-white font-['Quicksand']">
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div>
            <span className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-4 bg-pink-50 inline-block px-5 py-2 rounded-full shadow-sm border border-pink-100">
              Our Bestsellers
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-['Fredoka'] text-slate-800 mb-6 mt-6 leading-tight">
            Taste the Magic
          </h2>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Discover a wide range of handcrafted ice cream flavours made with fresh, high-quality ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {teaserFlavours.map((flavour) => (
            <FlavourCard key={flavour.id} flavour={flavour} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/flavours"
            className="group inline-flex items-center justify-center px-10 py-5 bg-pink-600 text-white rounded-full font-bold text-sm tracking-widest hover:bg-pink-700 transition-all shadow-xl shadow-pink-500/30 transform hover:-translate-y-1 duration-300"
          >
            View All Flavours
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlavourTeaser;
