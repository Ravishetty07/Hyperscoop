import React from 'react';
import { motion } from 'framer-motion';
import ownlyLogoImg from '../../assets/images/logo/ownly-logo.png';

const OnlineOrder = () => {
  return (
    <section className="py-24 bg-[#fafafa] relative z-20 font-['Quicksand']">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-['Fredoka'] text-[#3d2314] mb-6 tracking-wide">
              Order Online
            </h2>
            <p className="text-xl md:text-2xl text-[#8b6a58] mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
              Get your favorite 100% vegetarian ice cream delivered straight to your door!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Swiggy */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
              href="https://www.swiggy.com/city/bangalore/hyperscoop-natural-and-premium-ice-creams-koramangala-neelasandra-rest376285" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 lg:p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-[#fc8019]"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img src="https://i.pinimg.com/1200x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg" alt="Swiggy" className="max-w-[200px] max-h-full object-contain rounded-2xl drop-shadow-md" />
              </div>
              <div className="w-full flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="font-['Fredoka'] font-bold text-xl text-[#3d2314]">Swiggy</span>
                <span className="inline-flex items-center gap-1 font-bold text-white bg-[#fc8019] px-3 py-1.5 rounded-full text-xs shadow-sm transition-colors whitespace-nowrap">
                  Order Now <span>→</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium text-sm text-left w-full">Lightning fast delivery straight to you.</p>
            </motion.a>

            {/* Zomato */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
              href="https://www.zomato.com/bangalore/hyper-scoop-shanti-nagar-bangalore/order" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 lg:p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-[#cb202d]"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img src="https://i.pinimg.com/1200x/59/71/46/597146a40c2e35b1973bee10f1253b95.jpg" alt="Zomato" className="max-w-[200px] max-h-full object-contain rounded-2xl drop-shadow-md" />
              </div>
              <div className="w-full flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="font-['Fredoka'] font-bold text-xl text-[#3d2314]">Zomato</span>
                <span className="inline-flex items-center gap-1 font-bold text-white bg-[#cb202d] px-3 py-1.5 rounded-full text-xs shadow-sm transition-colors whitespace-nowrap">
                  Order Now <span>→</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium text-sm text-left w-full">Live tracking & quick delivery.</p>
            </motion.a>


            {/* Ownly */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
              href="https://ownly.food/courtroom" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 lg:p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-pink-600"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-pink-700 rounded-2xl overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-110">
                <img src={ownlyLogoImg} alt="Ownly" className="max-w-[150px] max-h-[50px] object-contain drop-shadow-md" />
              </div>
              <div className="w-full flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="font-['Fredoka'] font-bold text-xl text-[#3d2314]">Ownly</span>
                <span className="inline-flex items-center gap-1 font-bold text-white bg-pink-600 px-3 py-1.5 rounded-full text-xs shadow-sm transition-colors whitespace-nowrap">
                  Order Now <span>→</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium text-sm text-left w-full">Order directly via Ownly.</p>
            </motion.a>

          </div>

          <div className="mt-12">
            <div className="bg-pink-50 border border-pink-100 rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-pink-200/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600 mb-2">Place Orders Directly</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Order directly through Rapido or Porter</h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-2xl">Call us to place your order. Book a Rapido or Porter to pick it up.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.rapido.bike/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-white font-semibold shadow-lg shadow-pink-500/20 hover:bg-pink-700 transition"
                  >
                    Rapido
                  </a>
                  <a
                    href="https://porter.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-3 text-pink-600 font-semibold hover:bg-pink-50 transition"
                  >
                    Porter
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;
