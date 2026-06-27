import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation } from 'lucide-react';

const StoreCard = ({ store, index, isActive, onClick }) => {
  const telLink = `tel:${store.phone.split(' / ')[0].replace(/\s/g, '')}`;
  
  // Create a google maps directions link using the address
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address + ', Bengaluru')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, type: "spring" }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 shadow-sm border cursor-pointer transition-all relative overflow-hidden group ${
        isActive ? 'border-pink-500 shadow-md ring-1 ring-pink-500' : 'border-slate-100 hover:shadow-md hover:border-pink-200'
      }`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-10 transition-transform duration-500 ${
        isActive ? 'bg-pink-100 scale-110' : 'bg-slate-50 group-hover:bg-pink-50 group-hover:scale-110'
      }`}></div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-slate-800 pr-4">{store.name}</h3>
        {isActive && (
          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2 animate-pulse"></span>
        )}
      </div>
      
      <div className="flex items-start space-x-3 mb-4">
        <MapPin className="text-pink-500 mt-1 flex-shrink-0" size={18} />
        <p className="text-slate-600 leading-relaxed text-sm">{store.address}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-2">
          <Phone className="text-slate-400 flex-shrink-0" size={16} />
          <a 
            href={telLink} 
            onClick={(e) => e.stopPropagation()} 
            className="text-slate-700 font-medium hover:text-pink-600 transition-colors text-sm"
          >
            {store.phone}
          </a>
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center justify-center space-x-1 bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
        >
          <Navigation size={14} />
          <span>Directions</span>
        </a>
      </div>
    </motion.div>
  );
};

export default StoreCard;
