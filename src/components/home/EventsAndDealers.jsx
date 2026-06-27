import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Heart, Store, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsAndDealers = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-['Quicksand']">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
          <path fill="#fafafa" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-['Fredoka'] text-slate-800 mb-4"
          >
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Hyperscoop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Whether you're celebrating a special occasion or looking to grow your business, we have sweet opportunities for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bulk Orders Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-pink-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-lg shadow-pink-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center shadow-sm">
                  <Heart size={24} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-500 flex items-center justify-center shadow-sm">
                  <Cake size={24} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shadow-sm">
                  <PartyPopper size={24} />
                </div>
              </div>

              <h3 className="text-3xl font-['Fredoka'] text-slate-800 mb-4">Bulk Orders & Events</h3>
              <p className="text-slate-600 text-lg mb-8 font-medium leading-relaxed">
                Make your <strong>Marriages, Birthday Parties, and Corporate Events</strong> unforgettable with our 100% natural, vegetarian ice creams. We offer customized bulk catering packages with premium service.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3"></span> Special Bulk Pricing</li>
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3"></span> Live Ice Cream Counters</li>
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3"></span> Customized Flavour Menus</li>
              </ul>

              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1">
                Enquire for Events <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Dealer / Franchise Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-orange-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-lg shadow-orange-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shadow-sm">
                  <Store size={24} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center shadow-sm">
                  <Truck size={24} />
                </div>
              </div>

              <h3 className="text-3xl font-['Fredoka'] text-slate-800 mb-4">Dealers & Franchise</h3>
              <p className="text-slate-600 text-lg mb-8 font-medium leading-relaxed">
                Join the Hyperscoop family! We are actively looking for passionate <strong>Dealers, Distributors, and Franchise Partners</strong> to bring our premium natural ice creams to new neighborhoods.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span> High Profit Margins</li>
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span> End-to-End Setup Support</li>
                <li className="flex items-center text-slate-600 font-bold"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span> Brand Marketing Push</li>
              </ul>

              <Link to="/franchise" className="inline-flex items-center bg-white border-2 border-orange-200 text-orange-500 font-bold py-4 px-8 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                Become a Partner <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndDealers;
