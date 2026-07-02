import React from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/home/Hero';
import FeatureBadges from '../components/home/FeatureBadges';
import ScrollingRibbon from '../components/home/ScrollingRibbon';
import OnlineOrder from '../components/home/OnlineOrder';
import AboutPreview from '../components/home/AboutPreview';
import FlavourTeaser from '../components/home/FlavourTeaser';
import EventsAndDealers from '../components/home/EventsAndDealers';

const Home = () => {
  return (
    <>
      <SEO 
        title="Hyperscoop | 100% Natural & Vegetarian Ice Cream in Bangalore"
        description="Scoop into pure happiness with Hyperscoop. We offer 100% natural, vegetarian ice cream with no artificial flavors in Bangalore. Order online or find a shoppe near you!"
        canonicalUrl="https://www.hyperscoop.in/"
        schema={{
          "@context": "https://schema.org",
          "@type": ["IceCreamShop", "LocalBusiness"],
          "name": "Hyperscoop",
          "image": "https://www.hyperscoop.in/logo.png",
          "url": "https://www.hyperscoop.in/",
          "telephone": "+919845932734",
          "email": "adlabsfoodproducts@gmail.com",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "KA",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9716,
            "longitude": 77.5946
          },
          "sameAs": [
            "https://www.swiggy.com/city/bangalore/hyperscoop-natural-and-premium-ice-creams-koramangala-neelasandra-rest376285",
            "https://www.zomato.com/bangalore/hyper-scoop-shanti-nagar-bangalore/order"
          ]
        }}
      />
      
      <main className="overflow-hidden">
        <Hero />
        <ScrollingRibbon />
        <FeatureBadges />
        <OnlineOrder />
        <AboutPreview />
        <FlavourTeaser />
        <EventsAndDealers />
      </main>
    </>
  );
};

export default Home;
