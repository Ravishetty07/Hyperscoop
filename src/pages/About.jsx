import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IceCream, Leaf, Users, Star, History } from 'lucide-react';
import aboutImg from '../assets/images/about/about-hero.jpg';

const timelineEvents = [
  { year: 'Ancient Rome', text: 'Emperor Nero sent messengers for snow flavored with fruit and honey.', icon: History },
  { year: '13th Century', text: 'Marco Polo introduced a frozen-milk dessert from the Far East.', icon: History },
  { year: '1500s', text: 'The term "ice cream" caught on in Italy.', icon: History },
  { year: '1670', text: 'First public sale in Paris at Café Procope.', icon: History },
  { year: '1776', text: 'First U.S. parlour opened in New York.', icon: History },
  { year: '1948', text: 'Ice cream was first manufactured in India.', icon: History },
  { year: '1984', text: 'The natural ice cream concept was founded.', icon: Leaf },
];

const fruits = ['Guava', 'Chikku', 'Musk Melon', 'Tender Coconut', 'Jackfruit', 'Watermelon', 'Mango', 'Strawberry', 'Custard Apple'];
const classics = ['Vanilla', 'Chocolate', 'Butterscotch', 'Spanish Delight', 'Choco Vanilla', 'Rocky Road', 'Kesar Pista', 'Choco Chip', 'Kulfi'];

const About = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <Helmet>
        <title>About Us | Hyperscoop</title>
        <meta name="description" content="Share a scoop, Share a SMILE with our 100% natural, additive-free ice cream." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6"
          >
            Our <span className="text-pink-500">Story</span>
          </motion.h1>
          
          {/* Prominent Pull Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="max-w-3xl mx-auto relative mt-12 mb-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-50"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <IceCream size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
              "Share a scoop, <br/><span className="text-pink-500">Share a SMILE.</span>"
            </h2>
            <p className="mt-4 text-slate-500 text-lg">We believe that joy is contagious.</p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <motion.img 
                  style={{ y: yParallax }}
                  src={aboutImg} 
                  alt="Hyperscoop Ice Cream" 
                  className="w-full h-[600px] object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">100% Natural</p>
                  <p className="text-sm text-slate-500">Zero Additives</p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8"
              >
                Pure ingredients. <br/>Pure delight.
              </motion.h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Made from fresh milk, cane sugar, and handpicked sun-ripe fruit. We strictly use no additives, no preservatives, no artificial colour, or flavouring.
              </p>
              
              {/* Interactive Ingredients Chip Grid */}
              <div className="mb-10">
                <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Fresh Fruits</h4>
                <div className="flex flex-wrap gap-3">
                  {fruits.map((fruit, i) => (
                    <motion.span 
                      key={fruit}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-pink-50 text-pink-700 font-medium rounded-full cursor-default hover:bg-pink-100 hover:shadow-md hover:shadow-pink-100 transition-all border border-pink-100/50"
                    >
                      {fruit}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Premium Classics</h4>
                <div className="flex flex-wrap gap-3">
                  {classics.map((classic, i) => (
                    <motion.span 
                      key={classic}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-slate-50 text-slate-700 font-medium rounded-full cursor-default hover:bg-slate-100 hover:shadow-md hover:shadow-slate-100 transition-all border border-slate-200/50"
                    >
                      {classic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & Experience (2 Column Layout) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              The Hyperscoop Experience
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-pink-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Guest-First Attitude</h3>
              <p className="text-slate-400 leading-relaxed">
                Our counter staff is meticulously trained for service quality, flexibility, and a guest-first attitude. We want every visit to feel warm, welcoming, and personal.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-pink-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creating Memories</h3>
              <p className="text-slate-400 leading-relaxed">
                When you walk into a Hyperscoop parlour, you're not just buying ice cream; you're creating a happy memory. Our goal is an outstanding, unforgettable experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-pink-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
              A Brief History of Ice Cream
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ice cream has a rich history before it became the natural delight we know today.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-pink-200 -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''} group`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-pink-400 shadow-lg flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-pink-500 transition-all duration-300">
                      <Icon size={14} className="text-pink-500" />
                    </div>
                    
                    {/* Spacer for alternating sides */}
                    <div className="hidden md:block w-1/2"></div>

                    {/* Content Card */}
                    <div className="ml-12 md:ml-0 md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <h3 className="font-extrabold text-pink-600 mb-2 text-2xl">{item.year}</h3>
                      <p className="text-slate-600 font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
