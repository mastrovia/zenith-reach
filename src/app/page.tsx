'use client';

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import StatsStrip from '@/components/ui/StatsStrip';
import AboutSection from '@/components/ui/AboutSection';
import CategoriesSection from '@/components/ui/CategoriesSection';
import UniqueGrid from '@/components/ui/UniqueGrid';
import GlobalPresence from '@/components/ui/GlobalPresence';
import FoodShowcase from '@/components/ui/FoodShowcase';
import CertificationsStrip from '@/components/ui/CertificationsStrip';
import HashtagMarquee from '@/components/ui/HashtagMarquee';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats */}
      <StatsStrip />

      <div className="gradient-secondary">
        {/* About */}
        <AboutSection />

        {/* Categories */}
        <CategoriesSection />

        {/* Unique features */}
        <UniqueGrid />

        {/* Hashtag marquee */}
        <HashtagMarquee />
      </div>

      {/* Global presence */}
      <GlobalPresence />

      {/* Food showcase */}
      <FoodShowcase />

      {/* Certifications strip */}
      <CertificationsStrip />

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
