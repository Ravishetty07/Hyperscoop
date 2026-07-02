import React, { useState } from 'react';
import SEO from '../components/seo/SEO';
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
      <SEO 
        title="Find a Shoppe | Best Ice Cream Shop Bangalore | Ice Cream Near Me"
        description="Looking for ice cream near me? Find the closest Hyperscoop parlour in Bangalore and enjoy our 100% natural, vegetarian ice cream."
        canonicalUrl="https://www.hyperscoop.in/shoppe"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.hyperscoop.in/"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "Find a Shoppe"
          }]
        }}
      />
      
      <main className="font-['Quicksand'] min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #2C1B04 0%, #392306 35%, #49310A 70%, #51330F 100%)',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <section className="pt-32 pb-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjM2LDcyLDE1MywwLjAzKSIvPjwvc3ZnPg==')] opacity-60"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl lg:text-[5rem] font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm"
            >
              <span className="sr-only">Best Ice Cream Shop Bangalore - Ice Cream Near Me </span>
              Find a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Shoppe</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Now in your neighborhood. Discover the closest place to grab a fresh scoop.
            </motion.p>
          </div>

          {/* Smooth bottom wave transitioning into the content section */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
              <path fill="#fafafa" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
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
      </main>
    </>
  );
};

export default FindAShoppe;
