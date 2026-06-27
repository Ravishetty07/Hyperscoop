import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, IceCream } from 'lucide-react';
import logoImg from '../../assets/images/logo/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Flavours', path: '/flavours' },
  { name: 'Franchise', path: '/franchise' },
  { name: 'Find a Shoppe', path: '/shoppe' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuVariants = {
    closed: {
      opacity: 0,
      rotateX: -90,
      y: -50,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.5, type: "spring", bounce: 0.3, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group relative z-50">
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={{ type: "spring" }}>
              <img src={logoImg} alt="Hyperscoop Logo" className="h-11 w-auto drop-shadow-sm" />
            </motion.div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide group overflow-hidden"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-pink-600' : 'text-slate-600 group-hover:text-pink-500'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-pink-100 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover Magnetic Effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-100/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-0" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Order Online Button (Desktop) */}
          <div className="hidden lg:block">
            <motion.a 
              href="/shoppe"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-pink-500/30 border border-pink-400/50"
            >
              <IceCream size={18} />
              <span>Order Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-slate-800 focus:outline-none bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer (3D Fold) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ transformOrigin: "top" }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-white/90 backdrop-blur-2xl border-b border-slate-200 shadow-2xl p-6 rounded-b-3xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <NavLink
                      to={link.path}
                      className={`block px-4 py-3 rounded-2xl font-bold text-lg ${
                        isActive ? 'bg-pink-50 text-pink-600' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants} className="pt-4 border-t border-slate-100">
                <a 
                  href="/shoppe"
                  className="w-full bg-pink-500 text-white px-4 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md shadow-pink-500/20"
                >
                  <IceCream size={20} />
                  <span>Order Now</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
