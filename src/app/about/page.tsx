'use client';

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { useState } from 'react';
import ProductHero from '@/components/ProductHero';
import MissionVision from './sections/MissionVision';
import Preview from './sections/Preview';
import WhyChooseUs from './sections/WhyChooseUs';
import OurCommitment from './sections/OurCommitment';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ProductHero
        backgroundImage={'/image/about-us-banner.png'}
        title={'Who we are...'}
        subtitle="At Zenith Reach, we take pride in bringing the authentic taste of India to the world. Based in Ernakulam, Kerala, we specialize in exporting ready-to-eat, ready-to-cook, frozen, dry foods, and premium spices to international markets. Every product we deliver is carefully selected, prepared, and packed to retain its freshness, flavor, and nutritional value.
Beyond food, we also cater to the global fashion industry with premium clothing exports, combining India's rich textile heritage with modern design demands."
        // showScrollIndicator
        // onScrollClick={handleScrollClick}
      />

      <div className="gradient-secondary mt-10">
        <MissionVision />
        <Preview />
      </div>

      <WhyChooseUs />

      <OurCommitment />

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-food-green rounded-full flex items-center justify-center hover:bg-food-light-green transition-colors shadow-lg z-50"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
