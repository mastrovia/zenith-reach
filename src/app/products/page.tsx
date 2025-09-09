'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { productsData } from '@/utils/products/ProductsData';

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Convert productsData to array format for the products grid
  const products = Object.entries(productsData).map(([id, data]) => ({
    id,
    name: data.hero.title,
    description: data.hero.subtitle,
    image: data.hero.backgroundImage,
    variants: data.productDetails.variants.map((variant) => variant.name),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Discover our range of premium products, carefully crafted to meet international standards
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/50 transition-colors"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-white/80 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
