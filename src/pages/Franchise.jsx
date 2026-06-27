import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { IndianRupee, Map, Clock, CheckCircle2, Send, Building2, TrendingUp, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const Franchise = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    console.log("Franchise Enquiry:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const investmentStats = [
    { label: "Franchise Fee", value: "₹5 Lakhs", icon: IndianRupee, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Total Investment Range", value: "₹15L - ₹20L", icon: TrendingUp, color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Carpet Area Required", value: "300 - 500 Sq.Ft.", icon: Map, color: "text-green-500", bg: "bg-green-50" },
    { label: "Estimated Payback", value: "14 - 18 Months", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  const benefits = [
    { title: "Zero Additives", desc: "A clean label brand appealing to the massive health-conscious demographic." },
    { title: "End-to-End Support", desc: "We assist with store setup, staff training, and initial marketing pushes." },
    { title: "High Margins", desc: "Premium natural ice creams command a better price point and customer loyalty." },
    { title: "Standardized SOPs", desc: "Turn-key operational manuals so you can run the business smoothly from day one." }
  ];

  return (
    <>
      <Helmet>
        <title>Franchise Opportunities | Hyperscoop</title>
        <meta name="description" content="Partner with Hyperscoop and start your own natural ice cream parlour." />
      </Helmet>
      
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

      {/* Investment Panel (Indicative) */}
      <section className="py-16 md:py-24 bg-white relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Investment at a Glance</h2>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-semibold">
                Note: These are indicative sample figures for layout purposes. Final numbers to be confirmed by Hyperscoop.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 ${stat.bg}`}></div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative z-10 ${stat.bg} ${stat.color}`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <p className="text-slate-500 font-medium text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  </motion.div>
                );
              })}
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

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 text-green-400 p-6 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20 text-center"
              >
                <CheckCircle2 className="mr-3" />
                Thank you! Your enquiry has been submitted successfully.
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.name ? 'border-red-500' : 'border-slate-600'} text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.phone ? 'border-red-500' : 'border-slate-600'} text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">City of Interest</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.city ? 'border-red-500' : 'border-slate-600'} text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors`}
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && <span className="text-red-400 text-xs mt-1 block">{errors.city.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Investment Budget</label>
                  <select 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.budget ? 'border-red-500' : 'border-slate-600'} text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors`}
                    {...register('budget', { required: 'Please select a budget range' })}
                  >
                    <option value="">Select a range...</option>
                    <option value="10L-15L">₹10 Lakhs - ₹15 Lakhs</option>
                    <option value="15L-20L">₹15 Lakhs - ₹20 Lakhs</option>
                    <option value="20L+">Above ₹20 Lakhs</option>
                  </select>
                  {errors.budget && <span className="text-red-400 text-xs mt-1 block">{errors.budget.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message or Comments (Optional)</label>
                <textarea 
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors resize-none"
                  {...register('message')}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-500 text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-70 flex items-center justify-center shadow-lg shadow-pink-500/20"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                {!isSubmitting && <Send className="ml-2" size={18} />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Franchise;
