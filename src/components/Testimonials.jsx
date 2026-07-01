import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  {
    id: 'r1',
    name: 'Karthik',
    rating: 5,
    text: "Hyper scoop icecream has the potential to be one of the, if not the best icecream joints in Bangalore. Easily one of the best ice-creams I've eaten. Great flavours and combinations to try from.",
  },
  {
    id: 'r2',
    name: 'Manvika',
    rating: 5,
    text: "Absolutely love this place. The service and quality of ice creams here are extremely impressive! I would highly recommend everyone to try Hyperscoop because it's safe to say they won't disappoint you. Their wide selection of ice creams is to die for. Can't wait to visit again!",
  },
  {
    id: 'r3',
    name: 'Smital',
    rating: 5,
    text: "The scoops are truly premium—you can tell there's a lot of care behind every flavour. My favourites are Dark Chocolate, Strawberry Cheesecake, Strawberry Banana, and Coffee. The Mangalore Special Gadbad and Tiramisu are must-tries. Every ice cream is 100% vegetarian, and there's something for everyone!",
  },
  {
    id: 'r4',
    name: 'Prathik',
    rating: 5,
    text: "Hyperscoop Natural and Premium Icecreams offers a wide variety of delicious flavours and tastes. I scream, we all scream for Hyperscoop icecreams! 😋",
  },
  {
    id: 'r5',
    name: 'Arjun',
    rating: 5,
    text: "Randomly visited this place and was pleasantly surprised. The Strawberry Cheesecake was outstanding, with a rich, smooth texture that felt like authentic gelato. The staff was friendly, offering samples of several flavours before we made our choice. Great ambience, generous portions, and excellent value for money.",
  },
  {
    id: 'r6',
    name: 'Deepthi',
    rating: 5,
    text: "This place has surely left the best impressions and the ambience is very welcoming and charming. The staff is also really friendly. Hyperscoop offers a large variety of flavours with a rich, creamy texture. I would love to visit again and again since the prices are reasonable too. Highly recommended!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.25 } },
};

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const visibleReviews = useMemo(() => (showAll ? reviewsData : reviewsData.slice(0, 2)), [showAll]);

  const toggle = () => {
    setShowAll((s) => {
      const next = !s;
      if (!next) {
        // collapsing: scroll back to top of section
        setTimeout(() => {
          containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
      return next;
    });
  };

  return (
    <section ref={containerRef} className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-['Fredoka'] text-slate-800 mb-2">What our customers say</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Real feedback from guests who love Hyperscoop—handpicked and genuine.</p>
        </div>

        <motion.div
          layout
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {visibleReviews.map((r) => (
              <motion.article
                key={r.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="relative bg-white rounded-[22px] p-6 shadow-[0_10px_30px_rgba(249,115,140,0.06)] hover:shadow-[0_20px_60px_rgba(249,115,140,0.09)] transition-transform duration-300 hover:-translate-y-1.5 h-full flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-6 -left-6 text-[8rem] text-pink-100 opacity-40 select-none pointer-events-none">“</div>

                <div className="flex items-start gap-4 z-10">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 font-semibold text-lg md:text-xl">{r.name.charAt(0)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-semibold text-slate-900">{r.name}</h4>
                        <Stars />
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600 text-base leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg"
          >
            {showAll ? 'Show Less' : 'See More Reviews'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
