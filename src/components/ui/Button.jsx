import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500",
    secondary: "bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-400",
    outline: "border-2 border-pink-500 text-pink-600 hover:bg-pink-50 focus:ring-pink-500",
    white: "bg-white text-pink-600 hover:bg-gray-50 focus:ring-white",
  };

  const Component = to ? Link : motion.button;
  const linkProps = to ? { to } : {};
  const motionProps = to ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
        <Link 
          to={to} 
          className={`${baseStyles} ${variants[variant]} ${className}`}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
