import React, { useState } from 'react';
import SEO from '../components/seo/SEO';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { IndianRupee, Map, Clock, CheckCircle2, Send, Building2, TrendingUp, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const Franchise = () => {
  // Standard HTML form submission will be used

  const benefits = [
    { title: "Zero Additives", desc: "A clean label brand appealing to the massive health-conscious demographic." },
    { title: "End-to-End Support", desc: "We assist with store setup, staff training, and initial marketing pushes." },
    { title: "High Margins", desc: "Premium natural ice creams command a better price point and customer loyalty." },
    { title: "Standardized SOPs", desc: "Turn-key operational manuals so you can run the business smoothly from day one." }
  ];

  return (
    <>
      <SEO 
        title="Ice Cream Franchise India | Partner with Hyperscoop"
        description="Partner with Hyperscoop, a rapidly growing 100% natural, vegetarian ice cream brand. Start your own premium ice cream parlour and build a sweet future."
        canonicalUrl="https://www.hyperscoop.in/franchise"
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
            "name": "Franchise"
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
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6"
            >
              <span className="sr-only">Ice Cream Franchise India - Partner with Hyperscoop </span>
              Build a <span className="text-pink-500">Sweet</span> Future
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Partner with Hyperscoop, a rapidly growing 100% natural, vegetarian ice cream brand. Deliver pure joy to your city.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brand Momentum Section */}
      <section className="py-16 md:py-24 bg-white relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">A Scoop Worth Talking About</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                No dry numbers here — just the kind of bold, craveable energy you see from the top ice cream names, now distilled into Hyperscoop’s premium, fresh, and highly memorable parlour experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'High Footfall Appeal', text: 'A polished, Instagram-ready look with flavours that draw everyone in — from families to young trendsetters.', accent: 'from-pink-500 to-orange-400' },
                { title: 'Built for Celebration', text: 'Perfect for parties, events, and local buzz — every store feels like a destination for joy.', accent: 'from-blue-500 to-purple-500' },
                { title: 'Premium Store Experience', text: 'A clean, modern parlour design with easy ordering and memorable customer service.', accent: 'from-emerald-500 to-teal-500' },
                { title: 'Flavor-First Strategy', text: 'Bold signature flavours and seasonal specials that keep customers coming back.', accent: 'from-fuchsia-500 to-pink-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.accent}`} />
                  <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Why partner with us?</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  We are not just selling ice cream; we are selling a natural, unadulterated experience. Join a brand that prioritizes quality above all else.
                </p>
                <div className="hidden md:flex items-center justify-center w-32 h-32 bg-pink-100 rounded-full text-pink-500">
                  <Building2 size={48} />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-pink-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Submit your Enquiry</h2>
              <p className="text-slate-400">Fill out the form below and our franchise development team will get in touch with you shortly.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="461cc121-5b92-484a-8fb3-afd7f74ea628" />
              <input type="hidden" name="subject" value="New Franchise Enquiry from Hyperscoop Website" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">City of Interest</label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Target Location</label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Area, mall, or neighbourhood"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message or Comments (Optional)</label>
                <textarea 
                  name="message"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-pink-500 text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-colors flex items-center justify-center shadow-lg shadow-pink-500/20"
              >
                Submit Enquiry
                <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default Franchise;
