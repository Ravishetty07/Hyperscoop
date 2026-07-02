import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/layout/WhatsAppWidget';
import Preloader from './components/layout/Preloader';

// Lazy Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Flavours = React.lazy(() => import('./pages/Flavours'));
const Franchise = React.lazy(() => import('./pages/Franchise'));
const FindAShoppe = React.lazy(() => import('./pages/FindAShoppe'));
const Contact = React.lazy(() => import('./pages/Contact'));
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
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#fafafa]">
          <Navbar />
          
          <main className="flex-grow pt-20">
            <Suspense fallback={<Preloader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
