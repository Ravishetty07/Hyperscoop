import React, { useRef, useState } from 'react';
import SEO from '../components/seo/SEO';
import { flavours } from '../data/flavours';
import FlavourCard from '../components/flavours/FlavourCard';
import ImageLightbox from '../components/ImageLightbox';

const Flavours = () => {
  const gridRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const displayedFlavours = flavours.all;

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <>
      <SEO 
        title="All Flavours | Hyperscoop - Premium Vegetarian Ice Cream"
        description="Explore our delicious range of 100% natural, vegetarian ice cream flavours. From classic Vanilla to exotic fruits, find your perfect scoop in Bangalore."
        canonicalUrl="https://www.hyperscoop.in/flavours"
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
            "name": "Flavours"
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
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm">
              <span className="sr-only">Natural Ice Cream </span>All <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Flavours</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover our carefully crafted, 100% vegetarian ice creams made with fresh, handpicked ingredients.
            </p>
          </div>

          {/* Smooth bottom wave transitioning into the grid section */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
              <path fill="#fafafa" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
          </div>
        </section>

        <section className="pb-32 pt-16 bg-[#fafafa] min-h-[60vh] relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div 
              ref={gridRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              {/* Global Hover Spotlight */}
              <div 
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                  opacity: mousePos.x > -1 ? 1 : 0,
                  background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.04), transparent 40%)`
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10 relative z-10">
                {displayedFlavours.map((flavour, index) => (
                  <FlavourCard 
                    key={flavour.id} 
                    flavour={flavour} 
                    onOpen={() => setLightboxIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            {displayedFlavours.length === 0 && (
              <div className="text-center py-20 text-slate-500 font-medium text-lg">
                No flavours found.
              </div>
            )}
          </div>
          {lightboxIndex !== null && (
            <ImageLightbox
              slides={displayedFlavours}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Flavours;
