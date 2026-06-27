import React from 'react';
import { motion } from 'framer-motion';

const OnlineOrder = () => {
  return (
    <section className="py-24 bg-[#fafafa] relative z-20 font-['Quicksand']">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
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
              Get your favorite 100% natural ice cream delivered straight to your door!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Swiggy */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
              href="https://www.swiggy.com/city/bangalore/hyperscoop-beml-layout-rajarajeshwari-nagar-rest851566" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-10 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-[#fc8019]"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img src="https://i.pinimg.com/1200x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg" alt="Swiggy" className="max-w-[200px] max-h-full object-contain rounded-2xl drop-shadow-md" />
              </div>
              <span className="font-['Fredoka'] text-2xl text-[#3d2314] mb-2">Swiggy</span>
              <span className="inline-flex items-center gap-2 font-bold text-[#fc8019] bg-[#fc8019]/10 px-6 py-2 rounded-full group-hover:bg-[#fc8019] group-hover:text-white transition-colors">
                Order Now <span className="text-xl">→</span>
              </span>
            </motion.a>

            {/* Zomato */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
              href="https://www.zomato.com/bangalore/hyperscoop-icecream-rajarajeshwari-nagar-bangalore/info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-10 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-[#cb202d]"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img src="https://i.pinimg.com/1200x/59/71/46/597146a40c2e35b1973bee10f1253b95.jpg" alt="Zomato" className="max-w-[200px] max-h-full object-contain rounded-2xl drop-shadow-md" />
              </div>
              <span className="font-['Fredoka'] text-2xl text-[#3d2314] mb-2">Zomato</span>
              <span className="inline-flex items-center gap-2 font-bold text-[#cb202d] bg-[#cb202d]/10 px-6 py-2 rounded-full group-hover:bg-[#cb202d] group-hover:text-white transition-colors">
                Order Now <span className="text-xl">→</span>
              </span>
            </motion.a>

            {/* BigBasket */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
              href="https://www.bigbasket.com/pb/hyperscoop/?nc=hyperscoop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-10 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-[#84c225]"
            >
              <div className="w-full h-32 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img src="https://i.pinimg.com/736x/b3/67/47/b36747eeba3353726923de417e969ace.jpg" alt="BigBasket" className="max-w-[200px] max-h-full object-contain rounded-2xl drop-shadow-md" />
              </div>
              <span className="font-['Fredoka'] text-2xl text-[#3d2314] mb-2">BigBasket</span>
              <span className="inline-flex items-center gap-2 font-bold text-[#84c225] bg-[#84c225]/10 px-6 py-2 rounded-full group-hover:bg-[#84c225] group-hover:text-white transition-colors">
                Order Now <span className="text-xl">→</span>
              </span>
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;
