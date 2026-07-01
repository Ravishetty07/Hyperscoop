import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  { id: 'r1', name: 'Karthik', rating: 5, text: "Hyper scoop icecream has the potential to be one of the, if not the best icecream joints in Bangalore. Easily one of the best ice-creams I've eaten. Great flavours and combinations to try from." },
  { id: 'r2', name: 'Manvika', rating: 5, text: "Absolutely love this place. The service and quality of ice creams here are extremely impressive! I would highly recommend everyone to try Hyperscoop because it's safe to say they won't disappoint you. Their wide selection of ice creams is to die for. Can't wait to visit again!" },
  { id: 'r3', name: 'Smital', rating: 5, text: "The scoops are truly premium—you can tell there's a lot of care behind every flavour. My favourites are Dark Chocolate, Strawberry Cheesecake, Strawberry Banana, and Coffee. The Mangalore Special Gadbad and Tiramisu are must-tries. Every ice cream is 100% vegetarian, and there's something for everyone!" },
  { id: 'r4', name: 'Prathik', rating: 5, text: "Hyperscoop Natural and Premium Icecreams offers a wide variety of delicious flavours and tastes. I scream, we all scream for Hyperscoop icecreams! 😋" },
  { id: 'r5', name: 'Arjun', rating: 5, text: "Randomly visited this place and was pleasantly surprised. The Strawberry Cheesecake was outstanding, with a rich, smooth texture that felt like authentic gelato. The staff was friendly, offering samples of several flavours before we made our choice. Great ambience, generous portions, and excellent value for money." },
  { id: 'r6', name: 'Deepthi', rating: 5, text: "This place has surely left the best impressions and the ambience is very welcoming and charming. The staff is also really friendly. Hyperscoop offers a large variety of flavours with a rich, creamy texture. I would love to visit again and again since the prices are reasonable too. Highly recommended!" },
];

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: 'easeOut',
    }}
    className="relative bg-white rounded-[22px] shadow-[0_12px_40px_rgba(249,115,140,0.06)] hover:shadow-[0_20px_60px_rgba(249,115,140,0.09)] transition-transform duration-300 hover:-translate-y-1.5 w-full"
  >
    <div className="p-6 md:p-7 flex flex-col">
      <div className="absolute -top-6 -left-6 text-[6rem] text-white/10 select-none pointer-events-none">"</div>
      
      <div className="flex items-start gap-4 z-10">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-pink-600 font-semibold text-base md:text-lg">
            {review.name.charAt(0)}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="text-base md:text-lg font-semibold text-slate-900 truncate">{review.name}</h4>
          </div>
          <Stars count={review.rating} />
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">{review.text}</p>
        </div>
      </div>
    </div>
  </motion.article>
);

const TestimonialsVerticalFeed = () => {
  const [expanded, setExpanded] = useState(false);
  const initialCount = 2;
  const visibleCount = expanded ? reviewsData.length : initialCount;
  const visibleReviews = reviewsData.slice(0, visibleCount);
  const hasMore = visibleCount < reviewsData.length;

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 font-semibold mb-2 md:mb-3">Guest Reviews</p>
        <h3 className="text-3xl md:text-4xl font-['Fredoka'] text-white mb-1 md:mb-2">What our customers say</h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">Real guests share why they return again and again.</p>
      </div>

      <div className="space-y-4 md:space-y-5 w-full">
        <AnimatePresence mode="popLayout">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onClick={() => setExpanded(true)}
          className="mt-6 md:mt-8 w-full px-5 py-2.5 md:py-3 rounded-full bg-white text-pink-600 font-semibold text-sm md:text-base shadow-sm hover:shadow-lg hover:bg-pink-50 transition-all duration-300 active:scale-95"
        >
          View More
        </motion.button>
      )}

      {expanded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpanded(false)}
          className="mt-4 w-full px-5 py-2.5 md:py-3 rounded-full bg-white/20 text-white font-semibold text-sm md:text-base border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          View Less
        </motion.button>
      )}
    </div>
  );
};

export default TestimonialsVerticalFeed;
