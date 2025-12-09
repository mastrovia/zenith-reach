'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import ProductHero from '@/components/ProductHero';
import ProductDetailsSection from '../sections/ProductDetailsSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import Footer from '@/components/ui/Footer';
import { useParams } from 'next/navigation';
import { productsData } from '@/utils/products/ProductsData';

const ProductPage = () => {
  const params = useParams();
  const id = params.id as string;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageData = productsData[id as keyof typeof productsData];

  // Handle case where product data is not found
  if (!pageData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-white/80">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const handleScrollClick = () => {
    const productDescription = document.getElementById('product-description');
    if (productDescription) {
      productDescription.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ProductHero
        backgroundImage={pageData.hero.backgroundImage}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        showScrollIndicator={true}
        onScrollClick={handleScrollClick}
      />
      <div className="flex flex-col gap-12 sm:gap-18 pb-20 md:mb-24 pt-10 px-4 gradient-secondary">
        <ProductDetailsSection {...pageData.productDetails} />
        <WhyChooseSection
          title={pageData.whyChooseUs.title}
          benefits={pageData.whyChooseUs.benefits}
          image={pageData.whyChooseUs.image}
          imageAlt={pageData.whyChooseUs.imageAlt}
          rightTitle={pageData.whyChooseUs.rightTitle}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
