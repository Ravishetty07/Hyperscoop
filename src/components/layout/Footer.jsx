import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import logoHyper from '../../assets/images/logo/logohyper.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Global CTA Banner */}
      <section className="relative py-32 bg-gradient-to-br from-pink-500 to-orange-400 text-white text-center overflow-hidden font-['Quicksand']">
        {/* Top Wave Divider transitioning from page background (#fafafa default) */}
        <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
            <path fill="#fafafa" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
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
            <Link to="/shoppe" className="bg-white text-pink-600 px-12 py-5 rounded-full font-bold hover:bg-pink-50 transition-all shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 duration-300 text-lg tracking-wider">
              Find a Shoppe
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1 duration-300 text-lg tracking-wider backdrop-blur-sm">
              Contact Us
            </Link>
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

      <footer className="bg-pink-50 pt-16 pb-8 font-['Quicksand'] relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link to="/" className="mb-6 block transition-transform hover:scale-105 flex items-center gap-3">
              <img src={logoHyper} alt="Hyperscoop mark" className="h-12 w-auto" />
              <img src={logo} alt="Hyperscoop Logo" className="h-14 object-contain drop-shadow-sm mix-blend-multiply" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Fredoka'] font-bold text-xl mb-6 text-slate-800">Quick Links</h4>
            <ul className="space-y-3 font-bold text-slate-600">
              <li><Link to="/" className="hover:text-pink-600 transition-colors flex items-center gap-2"><span className="text-pink-600 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0"></span>Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-600 transition-colors">About Us</Link></li>
              <li><Link to="/flavours" className="hover:text-pink-600 transition-colors">Our Flavours</Link></li>
              <li><Link to="/franchise" className="hover:text-pink-600 transition-colors">Franchise</Link></li>
              <li><Link to="/shoppe" className="hover:text-pink-600 transition-colors">Find a Shoppe</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="font-['Fredoka'] font-bold text-xl mb-6 text-slate-800">Contact Us</h4>
            <meta itemProp="name" content="Hyperscoop" />
            <ul className="space-y-3 text-slate-600 font-bold text-sm md:text-base">
              <li className="flex items-center gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span itemProp="addressLocality">Bangalore</span>, <span itemProp="addressCountry">India</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-slate-600 font-medium">
                  <a href="tel:9845932734" itemProp="telephone" className="hover:text-orange-500 transition-colors">9845932734</a> / 
                  <a href="tel:9945191217" itemProp="telephone" className="hover:text-orange-500 transition-colors">9945191217</a> / 
                  <a href="tel:9899991133" itemProp="telephone" className="hover:text-orange-500 transition-colors">9899991133</a>
                </span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <svg className="w-5 h-5 text-orange-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:adlabsfoodproducts@gmail.com" itemProp="email" className="hover:text-pink-600 transition-colors break-all">
                    adlabsfoodproducts@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Order Online */}
          <div>
            <h4 className="font-['Fredoka'] font-bold text-xl mb-6 text-slate-800">Order Online</h4>
            <p className="text-slate-600 mb-6 text-sm font-medium leading-relaxed">
              Get your favorite 100% natural ice cream delivered straight to your door!
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://www.swiggy.com/city/bangalore/hyperscoop-natural-and-premium-ice-creams-koramangala-neelasandra-rest376285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#fc8019]/20 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold hover:bg-[#fc8019] hover:text-white transition-all shadow-sm hover:shadow-[#fc8019]/30 hover:-translate-y-1"
              >
                Swiggy
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.zomato.com/bangalore/hyper-scoop-shanti-nagar-bangalore/order" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#cb202d]/20 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold hover:bg-[#cb202d] hover:text-white transition-all shadow-sm hover:shadow-[#cb202d]/30 hover:-translate-y-1"
              >
                Zomato
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a 
                href="https://wa.me/9899991133?text=Hello%20Hyperscoop!%20I%20would%20like%20to%20order%20some%20ice%20cream%20directly." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-pink-500/20 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-pink-600/30 hover:-translate-y-1"
              >
                Direct Order
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-pink-200 pt-8 flex flex-col gap-3 md:flex-row md:items-center justify-between text-slate-500 font-bold text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Adlabs Food Products. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
            All images, videos, and content on this site are owned by Adlabs Food Products and may not be copied or used without permission.
          </p>
          <p className="flex items-center gap-2">
            Thanks for visiting us <span className="text-xl">🍦</span>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
