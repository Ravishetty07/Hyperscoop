import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import contactImg from '../assets/images/locations/contact-banner.jpg';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Placeholder for actual form submission logic (e.g. EmailJS, Formspree)
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Hyperscoop</title>
        <meta name="description" content="Reach us for orders. Get in touch with Hyperscoop in Bangalore." />
      </Helmet>
      
      <main className="font-['Quicksand'] bg-[#fafafa] min-h-screen">
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
                      <p className="text-slate-500 font-medium leading-relaxed">+91 9606446504</p>
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
                      <a href="mailto:hyperscooppremium@gmail.com" className="text-slate-500 font-medium leading-relaxed hover:text-pink-500 transition-colors block truncate">
                        hyperscooppremium@gmail.com
                      </a>
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
                  
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="bg-green-50 text-green-700 p-6 rounded-2xl flex items-center mb-8 border border-green-200 shadow-sm"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Send size={20} className="text-green-600" />
                      </div>
                      <p className="font-medium">Thank you! Your message has been sent successfully. We will be in touch shortly.</p>
                    </motion.div>
                  ) : null}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name"
                          className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-100'} focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400`}
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-red-500 text-xs font-bold mt-2 pl-2 block">{errors.name.message}</span>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-100'} focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400`}
                          placeholder="john@example.com"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                        />
                        {errors.email && <span className="text-red-500 text-xs font-bold mt-2 pl-2 block">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Contact Number</label>
                      <input 
                        type="tel" 
                        id="contactNumber"
                        className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 ${errors.contactNumber ? 'border-red-400 bg-red-50' : 'border-slate-100'} focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400`}
                        placeholder="+91 9876543210"
                        {...register('contactNumber', { required: 'Contact number is required' })}
                      />
                      {errors.contactNumber && <span className="text-red-500 text-xs font-bold mt-2 pl-2 block">{errors.contactNumber.message}</span>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 pl-2">Message</label>
                      <textarea 
                        id="message"
                        rows="5"
                        className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-100'} focus:bg-white focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all font-medium text-slate-700 placeholder-slate-400 resize-none`}
                        placeholder="How can we help you?"
                        {...register('message', { required: 'Message is required' })}
                      ></textarea>
                      {errors.message && <span className="text-red-500 text-xs font-bold mt-2 pl-2 block">{errors.message.message}</span>}
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-5 rounded-2xl hover:from-pink-600 hover:to-orange-500 transition-all disabled:opacity-70 flex items-center justify-center text-lg shadow-xl shadow-pink-500/30 transform hover:-translate-y-1 duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send size={20} />
                        </span>
                      )}
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
