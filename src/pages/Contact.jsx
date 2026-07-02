import React, { useState } from 'react';
import SEO from '../components/seo/SEO';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import contactImg from '../assets/images/locations/contact-banner.jpg';

const Contact = () => {
  // Standard HTML form submission will be used

  return (
    <>
      <SEO 
        title="Contact Us | Hyperscoop - Ice Cream Catering Bangalore"
        description="Reach us for bulk orders, dessert catering in Bangalore, or general enquiries. Get in touch with Hyperscoop."
        canonicalUrl="https://www.hyperscoop.in/contact"
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
            "name": "Contact Us"
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
        {/* Vibrant Brand Hero Section */}
        <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400">
          <div className="absolute inset-0 z-0">
            <img src={contactImg} alt="Contact Hyperscoop" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white pt-8 pb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-['Fredoka'] mb-6 drop-shadow-md"
            >
              <span className="sr-only">Contact Hyperscoop - Ice Cream Catering and Orders Bangalore </span>
              Get in <span className="text-pink-100">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-pink-50 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm"
            >
              Reach us for bulk orders, event catering, or just to say hi!
            </motion.p>
          </div>

          {/* Smooth Layered Wave Divider transitioning to white background */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg className="relative block w-full h-[80px] md:h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#fafafa" fillOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              <path fill="#fafafa" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        <section className="py-20 relative z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
              
              {/* Modernized Contact Info Cards */}
              <div className="w-full lg:w-1/3">
                <h2 className="text-4xl font-['Fredoka'] text-slate-800 mb-8">Contact Info</h2>
                
                <div className="space-y-6">
                  {/* Address Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-3xl shadow-xl shadow-pink-500/5 border border-pink-50 flex items-start group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center text-pink-500 mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xl mb-1">Head Office</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">Bangalore, India</p>
                    </div>
                  </motion.div>

                  {/* Phone Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-3xl shadow-xl shadow-pink-500/5 border border-pink-50 flex items-start group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center text-orange-400 mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xl mb-1">Call Us</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        <a href="tel:9845932734" className="hover:text-orange-500 transition-colors">9845932734</a> / 
                        <a href="tel:9945191217" className="hover:text-orange-500 transition-colors">9945191217</a> / 
                        <a href="tel:9899991133" className="hover:text-orange-500 transition-colors">9899991133</a>
                      </p>
                    </div>
                  </motion.div>

                  {/* Email Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-3xl shadow-xl shadow-pink-500/5 border border-pink-50 flex items-start group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center text-pink-500 mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={28} />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-slate-800 text-xl mb-1">Email</h4>
                      <a href="mailto:adlabsfoodproducts@gmail.com" className="text-slate-500 font-medium leading-relaxed hover:text-orange-500 transition-colors block truncate">
                        adlabsfoodproducts@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Redesigned Contact Form */}
              <div className="w-full lg:w-2/3 relative">
                {/* Decorative blob behind form */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-pink-500/10 border border-white">
                  <h3 className="text-3xl font-['Fredoka'] text-slate-800 mb-8">Send us a Message</h3>
                  
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <input type="hidden" name="access_key" value="461cc121-5b92-484a-8fb3-afd7f74ea628" />
                    <input type="hidden" name="subject" value="New Contact Enquiry from Hyperscoop Website" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Contact Number</label>
                      <input 
                        type="tel" 
                        id="contactNumber"
                        name="phone"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-5 rounded-2xl hover:from-pink-600 hover:to-orange-500 transition-all flex items-center justify-center text-lg shadow-xl shadow-pink-500/30 transform hover:-translate-y-1 duration-300"
                    >
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={20} />
                      </span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
