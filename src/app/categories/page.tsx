'use client';
import ProductHero from '@/components/ProductHero';
import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import FrozenProductsSection from './sections/ProductCategorySection';
import BrandStatementSection from './sections/BrandStatementSection';
import Footer from '@/components/ui/Footer';
import { categoryData } from '@/utils/CategoryData';

const Categories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollClick = () => {
    const productDescription = document.getElementById('product-description');
    if (productDescription) {
      productDescription.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ProductHero
        backgroundImage="/image/coconutbg.jpg"
        title="Our Product Categories"
        subtitle="From frozen delights to authentic spices - Zenith Reach brings the taste of India to your table."
        showScrollIndicator={true}
        onScrollClick={handleScrollClick}
      />
      {categoryData.map((item, idx) => (
        <FrozenProductsSection
          key={idx}
          heading={item.heading}
          subheading={item.subheading}
          items={item.items}
          ctaText="View All"
          ctaHref="#"
        />
      ))}
      <BrandStatementSection
        headline={'Bringing India’s\nauthentic taste\nto the world.'}
        body={
          'At Zenith Reach, we ensure that every product is sourced with care, processed with the highest standards, and delivered with freshness intact. Whether you are a distributor, retailer, or food service business, our diverse product range is tailored to meet global demands.'
        }
        ctaText="Contact Now"
        ctaHref="#contact"
      />

      <Footer />
    </div>
  );
};

export default Categories;
