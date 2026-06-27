import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPinOff } from 'lucide-react';
import { stores } from '../data/stores';
import StoreCard from '../components/shoppe/StoreCard';

const FindAShoppe = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStoreId, setActiveStoreId] = useState(stores[0]?.id);

  // Filter stores based on search query (name or address)
  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get active store for map center
  const activeStore = stores.find(s => s.id === activeStoreId) || stores[0];

  return (
    <>
      <Helmet>
        <title>Find a Shoppe | Hyperscoop</title>
        <meta name="description" content="Now in your neighborhood. Find a Hyperscoop parlour near you in Bengaluru." />
      </Helmet>
      
      <section className="pt-32 pb-12 bg-pink-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6"
          >
            Find a <span className="text-pink-500">Shoppe</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
          >
            Now in your neighborhood. Discover the closest place to grab a fresh scoop.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-slate-50 min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100">
            
            {/* Store List Column */}
            <div className="w-full lg:w-5/12 flex flex-col h-[600px] lg:h-[700px]">
              
              {/* Search Header */}
              <div className="p-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-slate-800">Our Locations</h2>
                  <span className="bg-pink-100 text-pink-700 font-semibold px-3 py-1 rounded-full text-sm">
                    {filteredStores.length} Stores
                  </span>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by area or store name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>
              
              {/* Scrollable List */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
                <AnimatePresence>
                  {filteredStores.length > 0 ? (
                    filteredStores.map((store, index) => (
                      <StoreCard 
                        key={store.id} 
                        store={store} 
                        index={index} 
                        isActive={activeStoreId === store.id}
                        onClick={() => setActiveStoreId(store.id)}
                      />
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-20 text-slate-500 flex flex-col items-center"
                    >
                      <MapPinOff size={48} className="text-slate-300 mb-4" />
                      <p className="font-medium text-lg">No stores found.</p>
                      <p className="text-sm">Try searching for a different area in Bengaluru.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Map Column */}
            <div className="w-full lg:w-7/12 h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100 relative">
              {activeStore ? (
                <iframe
                  title={`Map for ${activeStore.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(activeStore.name + ' ' + activeStore.address + ' Bengaluru')}&output=embed`}
                  className="w-full h-full object-cover"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  Select a store to view on map
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FindAShoppe;
