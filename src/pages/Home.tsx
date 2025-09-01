import React from 'react';
import Hero from '@/components/Home/Hero';
import Features from '@/components/Home/Features';
import Testimonials from '@/components/Home/Testimonials';
import HowItWorks from '@/components/Home/HowItWorks';
import Compliance from '@/components/Home/Compliance';
import CallToAction from '@/components/Home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Compliance />
      <CallToAction />
    </>
  );
};

export default Home;
