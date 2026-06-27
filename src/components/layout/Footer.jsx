import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-50 pt-16 pb-8 font-['Quicksand'] relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link to="/" className="mb-6 block transition-transform hover:scale-105">
              <img src={logo} alt="Hyperscoop Logo" className="h-20 object-contain drop-shadow-sm mix-blend-multiply" />
            </Link>
            <p className="text-slate-600 font-medium leading-relaxed mb-4 text-sm md:text-base">
              "Enjoy before it melts" <br />
              <span className="italic mt-2 block opacity-80">Ever tasted ice cream so natural, so pure?</span>
            </p>
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
          <div>
            <h4 className="font-['Fredoka'] font-bold text-xl mb-6 text-slate-800">Contact Us</h4>
            <ul className="space-y-3 text-slate-600 font-bold text-sm md:text-base">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Bangalore, India
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 9606446504
              </li>
              <li className="flex items-start gap-2 pt-1">
                <svg className="w-5 h-5 text-orange-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:hyperscooppremium@gmail.com" className="hover:text-pink-600 transition-colors break-all">
                    hyperscooppremium@gmail.com
                  </a>
                  <a href="mailto:adlabsfoodproducts@gmail.com" className="hover:text-pink-600 transition-colors break-all">
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
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.swiggy.com/city/bangalore/hyperscoop-beml-layout-rajarajeshwari-nagar-rest851566" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#fc8019]/20 text-slate-700 px-5 py-3 rounded-2xl font-bold hover:bg-[#fc8019] hover:text-white transition-all shadow-sm hover:shadow-[#fc8019]/30 hover:-translate-y-1"
              >
                Order on Swiggy
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.zomato.com/bangalore/hyperscoop-icecream-rajarajeshwari-nagar-bangalore/info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#cb202d]/20 text-slate-700 px-5 py-3 rounded-2xl font-bold hover:bg-[#cb202d] hover:text-white transition-all shadow-sm hover:shadow-[#cb202d]/30 hover:-translate-y-1"
              >
                Order on Zomato
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.bigbasket.com/pb/hyperscoop/?nc=hyperscoop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#689f38]/20 text-slate-700 px-5 py-3 rounded-2xl font-bold hover:bg-[#689f38] hover:text-white transition-all shadow-sm hover:shadow-[#689f38]/30 hover:-translate-y-1"
              >
                Order on BigBasket
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-pink-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 font-bold text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Adlabs Food Products. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Thanks for visiting us <span className="text-xl">🍦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
