import React from 'react';
import SEO from '../components/seo/SEO';
import { motion } from 'framer-motion';
import { IceCream, Leaf, Users, Star } from 'lucide-react';
import bgImg from '../assets/images/about/bg images.jpeg';
import logoHyper from '../assets/images/logo/logohyper.png';
import brandLogo from '../assets/images/logo/image-removebg-preview (1).png';
import clientsImg from '../assets/images/logo/clienysays.png';
import TestimonialsVerticalFeed from '../components/TestimonialsVerticalFeed';

const timelineEvents = [
  { year: '2016', text: 'Adlabs Food Products launched Hyperscoop in Bangalore, starting with a promise of premium vegetarian ice cream made from fresh milk and real fruit.', icon: IceCream },
  { year: '2018', text: 'Our first parlour opened and quickly became a local favorite, thanks to clean service, attention to detail, and a menu designed for every palate.', icon: Leaf },
  { year: '2020', text: 'We began supplying leading restaurants, caterers, and parlours in Bangalore, Chennai, Hyderabad, and Mysore with custom bulk orders.', icon: Users },
  { year: '2022', text: 'Hyperscoop expanded its delivery network while keeping each scoop handcrafted, honest, and made from the finest ingredients.', icon: Star },
  { year: '2024', text: 'Our sparkling clean facility and guest-first team helped turn first-time visitors into loyal regulars.', icon: IceCream },
  { year: 'Today', text: 'Hyperscoop is more than ice cream — it is a trusted experience, creating memories for families, events, and neighbourhood ice cream lovers.', icon: Leaf },
];

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Hyperscoop - 100% Natural Ice Cream"
        description="Learn about Hyperscoop's journey, from our first scoop in Bangalore to serving natural, vegetarian ice cream to leading brands and families."
        canonicalUrl="https://www.hyperscoop.in/about"
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
            "name": "About Us"
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
        {/* New Responsive Hero Section */}
        <section className="relative min-h-screen md:min-h-auto flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Background Image - No Blur */}
          <div className="w-full md:w-1/2 h-[350px] md:h-auto md:min-h-[650px] relative order-1 md:order-1 rounded-3xl md:rounded-none overflow-hidden">
            <img src={bgImg} alt="Hyperscoop About Hero" className="w-full h-full object-cover" />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-white order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-full max-w-md"
            >
              {/* Quote Card */}
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 md:p-10 rounded-[2.5rem] border-2 border-pink-100">
                <div className="mb-6 flex justify-center md:justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <IceCream size={28} />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-['Fredoka'] text-slate-800 leading-tight mb-4 text-center">
                  <span className="sr-only">About Hyperscoop - Natural Ice Cream in Bangalore</span>
                  "Share a scoop, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Share a SMILE.</span>"
                </h1>
                <p className="mt-6 text-slate-600 text-base md:text-lg font-medium text-center">We believe that joy is contagious.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-6 leading-tight"
              >
                Trusted by Leading Brands Across Industries
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-12"
              >
                Serving global enterprises, premium hospitality brands, cafés, restaurants and leading retail chains with exceptional quality and consistency.
              </motion.p>

              <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8">
                <a
                  href={clientsImg}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full overflow-hidden rounded-3xl"
                  aria-label="Open client logos image"
                >
                  <img
                    src={clientsImg}
                    alt="Trusted by leading brands across industries"
                    className="w-full h-auto max-w-[1100px] object-contain mx-auto transition-transform duration-300 ease-out hover:-translate-y-2"
                    style={{ imageRendering: 'auto' }}
                  />
                </a>
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
              <h2 className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm flex items-center justify-center gap-3">
                The
                <img src={logoHyper} alt="Hyperscoop mark" className="inline-block h-18 w-auto" />
                <img src={brandLogo} alt="Hyperscoop logo" className="inline-block h-18 md:h-20 w-auto" />
                Experience
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-pink-200/40 border border-pink-100"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow-lg">
                    <Star size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-pink-600 font-semibold mb-1">What our customers say</p>
                    <h3 className="text-3xl font-['Fredoka'] text-slate-900">Rated 4.9 out of 5</h3>
                    <p className="mt-2 text-slate-500 text-sm leading-relaxed">Loved for our service, freshness, and unforgettable parlour experience.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    { score: '5.0', label: 'Taste', value: 98 },
                    { score: '4.9', label: 'Service', value: 96 },
                    { score: '4.8', label: 'Cleanliness', value: 94 },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                        <span>{item.label}</span>
                        <span>{item.score}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { title: 'Guest-First Attitude', text: 'Our staff trained for service quality, flexibility, and warmth.' },
                    { title: 'Creating Memories', text: 'Every visit is about creating happy, unforgettable moments.' },
                  ].map((review) => (
                    <div key={review.title} className="rounded-xl border border-pink-100 bg-pink-50 p-4 shadow-sm">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">{review.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-500 p-10 rounded-[3rem] shadow-2xl shadow-pink-500/20 text-white"
              >
                <TestimonialsVerticalFeed />
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
              <h2 className="text-5xl md:text-6xl font-['Fredoka'] text-slate-800 mb-6 drop-shadow-sm flex items-center justify-center gap-3">
                The
                <img src={logoHyper} alt="Hyperscoop mark" className="inline-block h-18 w-auto" />
                <img src={brandLogo} alt="Hyperscoop logo" className="inline-block h-18 md:h-20 w-auto" />
                Journey
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">
                Discover the key moments that shaped Hyperscoop — from our first scoop in Bangalore to the trusted experience customers love today.
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
