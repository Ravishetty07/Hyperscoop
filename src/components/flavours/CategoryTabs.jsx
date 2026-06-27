import React from 'react';
import { motion } from 'framer-motion';

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', label: 'All Flavours' },
    { id: 'natural', label: 'Fun Treats (Natural)' },
    { id: 'premium', label: 'Sizzling Treats (Premium)' },
  ];

  return (
    <div className="flex justify-center mb-8 overflow-x-auto hide-scrollbar py-4 px-4 font-['Quicksand']">
      <div className="flex space-x-2 md:space-x-4 bg-white p-2 rounded-full shadow-xl shadow-pink-500/10 border border-pink-50">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all whitespace-nowrap text-sm md:text-base tracking-wide ${
              activeCategory === cat.id ? 'text-white' : 'text-slate-500 hover:text-pink-500 hover:bg-pink-50'
            }`}
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
