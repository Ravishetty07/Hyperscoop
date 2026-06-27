import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IceCream, Leaf, Users, Star, History } from 'lucide-react';
import aboutImg from '../assets/images/about/about-hero.jpg';
import heroImg from '../assets/images/hero/services-banner.jpg';

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
      
      <main className="font-['Quicksand'] bg-[#fafafa] min-h-screen">
        {/* Vibrant Hero Section */}
        <section className="relative pt-32 pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Hyperscoop Premium" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-8">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="text-6xl md:text-7xl lg:text-[5rem] font-['Fredoka'] text-white mb-6 drop-shadow-md"
            >
              Our <span className="text-pink-100">Story</span>
            </motion.h1>
            
            {/* Prominent Pull Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="max-w-4xl mx-auto relative mt-16 mb-8 bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-pink-900/20 border-4 border-white/50"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-xl shadow-pink-500/30">
                <IceCream size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-['Fredoka'] text-slate-800 leading-tight">
                "Share a scoop, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Share a SMILE.</span>"
              </h2>
              <p className="mt-6 text-slate-500 text-xl font-medium">We believe that joy is contagious.</p>
            </motion.div>
          </div>

          {/* Smooth Layered Wave Divider transitioning to white background */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg className="relative block w-full h-[80px] md:h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">
              
              {/* Premium 3D Framed Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-full lg:w-1/2 relative"
              >
                {/* 3D Frame Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-100 rounded-[3rem] transform rotate-3 scale-105 shadow-xl"></div>
                <div className="absolute inset-0 bg-white rounded-[3rem] transform -rotate-2 scale-105 shadow-lg"></div>
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply z-10" />
                  <motion.img 
                    style={{ y: yParallax }}
                    src={aboutImg} 
                    alt="Hyperscoop Ice Cream" 
                    className="w-full h-[400px] lg:h-[450px] object-cover scale-105 transform hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent z-20 pointer-events-none" />
                </div>
                
                {/* Vibrant Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 rounded-[2rem] shadow-2xl shadow-pink-500/20 border-2 border-pink-50 flex items-center gap-5 z-30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 text-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf size={32} />
                  </div>
                  <div>
                    <p className="font-['Fredoka'] text-2xl text-slate-800">100% Natural</p>
                    <p className="text-md font-bold text-pink-500">Zero Additives</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="w-full lg:w-1/2">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-8 leading-[1.1]"
                >
                  Pure ingredients. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Pure delight.</span>
                </motion.h2>
                <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                  Made from fresh milk, cane sugar, and handpicked sun-ripe fruit. We strictly use no additives, no preservatives, no artificial colour, or flavouring.
                </p>
                
                {/* Modernized Interactive Chips */}
                <div className="mb-12">
                  <h4 className="font-['Fredoka'] text-slate-800 mb-5 text-xl">Fresh Fruits</h4>
                  <div className="flex flex-wrap gap-3">
                    {fruits.map((fruit, i) => (
                      <motion.span 
                        key={fruit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="px-5 py-3 bg-pink-50 text-pink-600 font-bold rounded-xl cursor-default hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all border border-pink-100"
                      >
                        {fruit}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-['Fredoka'] text-slate-800 mb-5 text-xl">Premium Classics</h4>
                  <div className="flex flex-wrap gap-3">
                    {classics.map((classic, i) => (
                      <motion.span 
                        key={classic}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="px-5 py-3 bg-orange-50 text-orange-600 font-bold rounded-xl cursor-default hover:bg-orange-400 hover:text-white hover:shadow-lg hover:shadow-orange-400/30 transition-all border border-orange-100"
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

        {/* Transformed Staff & Experience Section */}
        <section className="py-32 bg-pink-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Hyperscoop</span> Experience
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl shadow-pink-500/10 border-2 border-white group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-400 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-6">
                  <Users size={40} />
                </div>
                <h3 className="text-3xl font-['Fredoka'] text-slate-800 mb-4">Guest-First Attitude</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Our counter staff is meticulously trained for service quality, flexibility, and a guest-first attitude. We want every visit to feel warm, welcoming, and personal.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl shadow-pink-500/10 border-2 border-white group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 -rotate-3 group-hover:-rotate-6">
                  <Star size={40} />
                </div>
                <h3 className="text-3xl font-['Fredoka'] text-slate-800 mb-4">Creating Memories</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  When you walk into a Hyperscoop parlour, you're not just buying ice cream; you're creating a happy memory. Our goal is an outstanding, unforgettable experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upgraded History Timeline */}
        <section className="py-32 bg-white relative">
          {/* Top Wave transitioning from pink-50 */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
              <path fill="#fdf2f8" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,61.48-3.66,135.18,17.58,205.84,35.95,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm">
                A Brief <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">History</span> of Ice Cream
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">
                Ice cream has a rich history before it became the natural delight we know today.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Vibrant Center Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-100 via-pink-400 to-orange-400 -translate-x-1/2 rounded-full opacity-50"></div>
              
              <div className="space-y-16">
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
                      className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} group`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-[6px] border-pink-100 shadow-xl flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-pink-500 transition-all duration-500">
                        <Icon size={20} className="text-pink-500" />
                      </div>
                      
                      {/* Spacer for alternating sides */}
                      <div className="hidden md:block w-1/2"></div>

                      {/* Premium Content Card */}
                      <div className="ml-20 md:ml-0 md:w-[45%] bg-white p-8 rounded-3xl shadow-xl shadow-pink-500/5 border-2 border-slate-50 hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-500 group-hover:bg-pink-50/30">
                        <h3 className="font-['Fredoka'] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-3 text-3xl">{item.year}</h3>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
