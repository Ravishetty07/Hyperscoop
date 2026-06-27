import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeatureBadges from '../components/home/FeatureBadges';
import OnlineOrder from '../components/home/OnlineOrder';
import AboutPreview from '../components/home/AboutPreview';
import FlavourTeaser from '../components/home/FlavourTeaser';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hyperscoop | 100% Natural, 100% Vegetarian Ice Cream</title>
        <meta name="description" content="Scoop into pure happiness. Hyperscoop offers 100% natural and vegetarian ice cream with no artificial flavors." />
      </Helmet>
      
      <main className="overflow-hidden">
        <Hero />
        <FeatureBadges />
        <OnlineOrder />
        <AboutPreview />
        <FlavourTeaser />
        
        {/* CTA Banner with top wave */}
        <section className="relative py-32 bg-gradient-to-br from-pink-500 to-orange-400 text-white text-center overflow-hidden font-['Quicksand']">
          {/* Top Wave Divider transitioning from FlavourTeaser (bg-white) */}
          <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
              <path fill="#ffffff" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50"></div>

          <div className="container mx-auto px-4 md:px-8 relative z-20 pt-10 max-w-4xl">
            <span className="text-pink-100 font-bold tracking-widest uppercase mb-4 block">Ready for dessert?</span>
            <h2 className="text-5xl md:text-7xl font-['Fredoka'] mb-6 leading-tight drop-shadow-sm">
              Craving a Scoop?
            </h2>
            <p className="text-xl md:text-2xl text-pink-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Find your nearest Hyperscoop parlour or get in touch for bulk orders and event catering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-20">
              <a href="/shoppe" className="bg-white text-pink-600 px-12 py-5 rounded-full font-bold hover:bg-pink-50 transition-all shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 duration-300 text-lg tracking-wider">
                Find a Shoppe
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1 duration-300 text-lg tracking-wider backdrop-blur-sm">
                Contact Us
              </a>
            </div>
          </div>

          {/* Bottom Wave Divider transitioning to Footer (bg-pink-50) */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#fdf2f8" fillOpacity="0.6" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              <path fill="#fdf2f8" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
