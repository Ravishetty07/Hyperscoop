import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, ShieldCheck, Zap } from 'lucide-react';

const badges = [
  { icon: Leaf, text: '100% Vegetarian', subtext: 'Real Ingredients', color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
  { icon: Heart, text: 'Crafted with Love', subtext: 'Real Ingredients', color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-200' },
  { icon: ShieldCheck, text: '100% Milk-Based Ice Cream', subtext: 'Real Ingredients', color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-200' },
  { icon: Zap, text: 'Fresh & Creamy', subtext: 'Real Ingredients', color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-200' },
];

const FeatureBadges = () => {
  return (
    <section className="py-12 bg-white relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 80 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border-b-4 ${badge.border} hover:shadow-xl transition-all`}
              >
                <div className={`p-3 rounded-full ${badge.bg} ${badge.color}`}>
                  <Icon size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 text-sm md:text-base">{badge.text}</span>
                  <span className="text-xs text-slate-500 font-medium">{badge.subtext}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBadges;
