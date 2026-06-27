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
      
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactImg} alt="Contact Hyperscoop" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Get in <span className="text-pink-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Reach us for orders, event catering, or just to say hi!
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Head Office</h4>
                    <p className="text-slate-600">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Phone Number</h4>
                    <p className="text-slate-600">+91 9606446504</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Email Address</h4>
                    <a href="mailto:hyperscooppremium@gmail.com" className="text-slate-600 hover:text-pink-600 block">hyperscooppremium@gmail.com</a>
                    <a href="mailto:adlabsfoodproducts@gmail.com" className="text-slate-600 hover:text-pink-600 block">adlabsfoodproducts@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 text-green-800 p-6 rounded-2xl flex items-center mb-6 border border-green-200"
                  >
                    <Send className="mr-3" />
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </motion.div>
                ) : null}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      id="contactNumber"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.contactNumber ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors`}
                      {...register('contactNumber', { required: 'Contact number is required' })}
                    />
                    {errors.contactNumber && <span className="text-red-500 text-xs mt-1 block">{errors.contactNumber.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none`}
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pink-500 text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
