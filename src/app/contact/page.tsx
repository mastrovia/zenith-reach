'use client';
import ProductHero from '@/components/ProductHero';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import ContactInfoSection from './sections/ContactInfoSection';
import { contactData } from '@/utils/ContactData';
import ContactFormSection from './sections/ContactFormSection';
import ContactMapSection from './sections/ContactMapSection';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollClick = () => {
    const productDescription = document.getElementById('product-description');
    if (productDescription) {
      productDescription.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-background">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ProductHero
          backgroundImage={contactData.hero.backgroundImage}
          title={contactData.hero.title}
          subtitle={contactData.hero.subtitle}
          showScrollIndicator={true}
          onScrollClick={handleScrollClick}
        />
        <div className="flex flex-col gap-12 sm:gap-18 pb-20 md:mb-24 pt-10 px-4 gradient-secondary">
          <ContactInfoSection
            image={contactData.contactInfoSection.image}
            imageAlt={contactData.contactInfoSection.imageAlt}
            cards={contactData.contactInfoSection.cards}
          />
          <ContactFormSection />
          <ContactMapSection mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.0369933465!2d76.3062218!3d9.9816352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1b6c9b3a99%3A0x4a0fdf3a27b2b4c5!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
