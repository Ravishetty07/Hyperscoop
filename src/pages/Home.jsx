import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Hyperscoop | 100% Natural, 100% Vegetarian Ice Cream</title>
        <meta name="description" content="Scoop into pure happiness. Hyperscoop offers 100% natural and vegetarian ice cream with no artificial flavors." />
      </Helmet>
      
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
