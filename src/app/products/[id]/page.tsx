'use client';

import React, { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ProductCard, { ProductCardProps } from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { getProductById, getCategoryByProductId, getRelatedProducts } from '@/utils/productUtils';
import { RiArrowRightLine, RiMailLine } from 'react-icons/ri';

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id as string;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<ProductCardProps | null>(null);

  const product = getProductById(productId);
  const category = getCategoryByProductId(productId);
  const relatedProducts = getRelatedProducts(productId, 5);

  const handleOpenModal = useCallback((productData: ProductCardProps) => {
    setModalProduct(productData);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalProduct(null);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="max-w-section mx-auto py-32 text-center px-4">
          <h1 className="text-3xl font-semibold text-white mb-4">Product Not Found</h1>
          <p className="text-white/70 mb-8">The product you're looking for doesn't exist.</p>
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

  const categoryName = category?.heading.replace(/\.{3}$/, '') || 'Products';
  const categorySlug = category?.heading
    .toLowerCase()
    .replace(/\.{3}$/, '')
    .trim()
    .replace(/\s+/g, '-');

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section className="relative pt-24 pb-12 px-4">
        <div className="max-w-section mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted/10 ring-1 ring-white/10">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col h-full">
              {category && (
                <Link
                  href={`/products/category/${categorySlug}`}
                  className="text-secondary text-sm uppercase tracking-wider mb-2 hover:underline w-fit"
                >
                  {categoryName}
                </Link>
              )}
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{product.title}</h1>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-white/80 text-lg leading-relaxed">
                  {product.description || 'No description available for this product.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                >
                  Contact for Inquiry
                  <RiMailLine size={20} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors ring-1 ring-white/20"
                >
                  View All Products
                  <RiArrowRightLine size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-section mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Related Products</h2>
                <p className="text-white/60">More from {categoryName}</p>
              </div>
              <Link
                href={`/products/category/${categorySlug}`}
                className="hidden md:flex items-center gap-2 text-secondary hover:text-white transition-colors"
              >
                View Category <RiArrowRightLine />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  id={relProduct.id}
                  name={relProduct.title}
                  image={relProduct.image}
                  category={categoryName}
                  shortDescription={relProduct.description}
                  href={`/products/${relProduct.id}`}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link
                href={`/products/category/${categorySlug}`}
                className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors"
              >
                View Category <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Product Modal */}
      <ProductModal isOpen={!!modalProduct} onClose={handleCloseModal} product={modalProduct} />
    </div>
  );
}
