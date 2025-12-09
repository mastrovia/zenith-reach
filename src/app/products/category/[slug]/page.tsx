'use client';

import React, { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ProductCard, { ProductCardProps } from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { getCategoryBySlug } from '@/utils/productUtils';
import { RiArrowRightLine, RiHome2Line } from 'react-icons/ri';

export default function CategoryListingPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<ProductCardProps | null>(null);

  const category = getCategoryBySlug(slug);

  const handleOpenModal = useCallback((productData: ProductCardProps) => {
    setModalProduct(productData);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalProduct(null);
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="max-w-section mx-auto py-32 text-center">
          <h1 className="text-3xl font-semibold text-white mb-4">Category Not Found</h1>
          <p className="text-white/70 mb-8">The category you're looking for doesn't exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
          >
            Browse All Products
            <RiArrowRightLine size={18} />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryName = category.heading.replace(/\.{3}$/, '');

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4">
        <div className="max-w-section mx-auto">
          {/* Breadcrumb */}

          {/* Category Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">{categoryName}</h1>
            {category.subheading && <p className="text-white/80 text-lg max-w-2xl">{category.subheading}</p>}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                category={categoryName}
                shortDescription={product.description}
                href={`/products/${product.id}`}
                onOpenModal={handleOpenModal}
                variant="standard"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Product Modal */}
      <ProductModal isOpen={!!modalProduct} onClose={handleCloseModal} product={modalProduct} />
    </div>
  );
}
