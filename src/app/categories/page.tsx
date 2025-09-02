'use client';
import ProductHero from '@/components/ProductHero';
import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import FrozenProductsSection from './sections/FrozenProductsSection';
import BrandStatementSection from './sections/BrandStatementSection';
import Footer from '@/components/ui/Footer';

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
      <FrozenProductsSection
        heading="Frozen Products"
        subheading="Frozen to preserve freshness, from coconut to jackfruit."
        items={[
          {
            id: 'coconut',
            title: 'Coconut Products',
            image: '/image/coconutbg.jpg',
            description:
              'Made from premium rice, our Appam Podi helps you prepare traditional Kerala appams effortlessly, preserving the authentic taste and texture of homemade goodness.',
            href: '/products',
            featured: true,
          },
          {
            id: 'vegetables',
            title: 'Vegetables',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'snacks',
            title: 'Snacks',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'porotta',
            title: 'Porotta',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'jackfruit',
            title: 'Jackfruit',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
        ]}
        ctaText="View All"
        ctaHref="#"
      />
      <FrozenProductsSection
        heading="Frozen Products"
        subheading="Frozen to preserve freshness, from coconut to jackfruit."
        items={[
          {
            id: 'coconut',
            title: 'Coconut Products',
            image: '/image/coconutbg.jpg',
            description:
              'Made from premium rice, our Appam Podi helps you prepare traditional Kerala appams effortlessly, preserving the authentic taste and texture of homemade goodness.',
            href: '/products',
            featured: true,
          },
          {
            id: 'vegetables',
            title: 'Vegetables',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'snacks',
            title: 'Snacks',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'porotta',
            title: 'Porotta',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
          {
            id: 'jackfruit',
            title: 'Jackfruit',
            image: '/image/coconutbg.jpg',
            href: '#',
          },
        ]}
        ctaText="View All"
        ctaHref="#"
      />
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
