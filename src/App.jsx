import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { flavours } from './data/flavours';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/layout/WhatsAppWidget';
import Preloader from './components/layout/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Flavours from './pages/Flavours';
import Franchise from './pages/Franchise';
import FindAShoppe from './pages/FindAShoppe';
import Contact from './pages/Contact';
import PageTransition from './components/layout/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/flavours" element={<PageTransition><Flavours /></PageTransition>} />
        <Route path="/franchise" element={<PageTransition><Franchise /></PageTransition>} />
        <Route path="/shoppe" element={<PageTransition><FindAShoppe /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const cachedImages = flavours.all.map((flavour) => {
      const img = new Image();
      img.src = flavour.image;
      img.decoding = 'async';
      return img;
    });

    return () => {
      cachedImages.length = 0;
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {flavours.all.map((flavour) => (
          <link key={flavour.id} rel="preload" as="image" href={flavour.image} />
        ))}
      </Helmet>
      <Preloader />
      <Router>
        <div className="flex flex-col min-h-screen bg-[#fafafa]">
          <Navbar />
          
          <main className="flex-grow pt-20">
            <AnimatedRoutes />
          </main>
          
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
