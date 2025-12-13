'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { categoryData } from '../../utils/CategoryData';

type CategoryItem = {
  title: string;
  description: string;
  image: string;
  listItems: { label: string; href: string }[];
  ctaHref: string;
};

const CategoryCard = ({
  item,
  className,
  ratio,
}: {
  item: CategoryItem;
  className?: string;
  ratio?: string;
}) => {
  return (
    <article className={`relative group overflow-hidden rounded-4xl ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-4xl`} style={{ aspectRatio: ratio || '5/6' }}>
        {/* Background Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* List Items (Visible on Hover) */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <ul className="flex flex-col gap-4">
            {item.listItems.slice(0, 6).map((listItem, index) => (
              <li
                key={index}
                className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                <Link
                  href={listItem.href}
                  className="flex items-center justify-between text-white/90 hover:text-primary transition-colors group/link"
                >
                  <span className="text-lg font-medium">{listItem.label}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Card Content (Always Visible, hides on hover) */}
        <div className="absolute bottom-0 right-0 w-[85%] bg-[#005C4B] rounded-tl-[3rem] p-6 md:p-8 transition-transform duration-500 group-hover:translate-y-full">
          <div className="flex flex-col gap-2 mb-4 pr-20">
            <h3 className="text-2xl font-medium text-white">{item.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{item.description}</p>
          </div>

          <Link
            href={item.ctaHref}
            className="absolute bottom-6 right-6 w-10 h-10 bg-[#8CC63F] rounded-full flex items-center justify-center z-10"
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M10.2718 0.0902972C10.1648 0.206135 10.1648 0.409445 10.2718 0.526097L15.0307 5.69085L0.284215 5.69085C0.127436 5.69085 -2.69734e-07 5.82922 -2.62294e-07 5.99941C-2.54853e-07 6.16964 0.127436 6.30801 0.284215 6.30801L15.0297 6.30801L10.2723 11.4727C10.1644 11.5891 10.1649 11.7924 10.2718 11.9088C10.326 11.9676 10.3978 12 10.473 12C10.5487 12 10.6199 11.9677 10.6742 11.9091L15.8667 6.27486L15.8667 6.27431L15.9194 6.21731C16.0269 6.10117 16.0269 5.89759 15.9194 5.78148L10.6746 0.0900264C10.5633 -0.0300526 10.3831 -0.0300532 10.2718 0.0902972Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function CategoriesSection() {
  // Helper to find category by partial heading match
  const getCategory = (headingPart: string) =>
    categoryData.find((c) => c.heading.toLowerCase().includes(headingPart.toLowerCase()));

  // Prepare data for the cards
  const frozenCategory = getCategory('Frozen Ready to Eat');
  const frozenVegCategory = getCategory('Frozen Vegetables');
  const dryCategory = getCategory('Dry Products');
  const spicesCategory = getCategory('Spices');

  // Combine frozen items for the first card
  const frozenItems = [...(frozenCategory?.items || []), ...(frozenVegCategory?.items || [])].map((item) => ({
    label: item.title,
    href: `/products/category/frozen-ready-to-eat`, // General link as requested
  }));

  const dryItems = (dryCategory?.items || []).map((item) => ({
    label: item.title,
    href: `/products/category/dry-products`,
  }));

  const spiceItems = (spicesCategory?.items || []).map((item) => ({
    label: item.title,
    href: `/products/category/spices`,
  }));

  const cards: CategoryItem[] = [
    {
      title: 'Frozen Products',
      description: 'Ready-to-cook Indian delights and staples.',
      image: '/image/cat-frozen.png',
      listItems: frozenItems,
      ctaHref: '/products/category/frozen-ready-to-eat',
    },
    {
      title: 'Dry Products',
      description: 'Dehydrated fruits, flours, and mixes.',
      image: '/image/cat-dry.jpg',
      listItems: dryItems,
      ctaHref: '/products/category/dry-products',
    },
    {
      title: 'Spices',
      description: 'Whole and ground spices, expertly curated.',
      image: '/image/cat-spices.png',
      listItems: spiceItems,
      ctaHref: '/products/category/spices',
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#001E17]">
      <section className="relative py-16 md:py-24 mx-auto max-w-section px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-5xl md:text-8xl text-[#005C4B] font-medium tracking-tight">CATEGORIES</h2>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-[#005C4B] hover:text-primary transition-colors group"
          >
            <span className="text-lg">View All Categories</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Frozen Products - Tall Card on Desktop */}
          <div className="col-span-1 md:h-[600px]">
            <CategoryCard
              item={cards[0]}
              className="h-full w-full"
              ratio="5/6" // Default for mobile, but height is forced on desktop
            />
          </div>

          {/* Dry Products & Spices */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <CategoryCard item={cards[1]} className="w-full md:h-[600px]" />
            <CategoryCard item={cards[2]} className="w-full md:h-[600px]" />
          </div>
        </div>

        <picture>
          <img
            src="/image/leaf-vector.png"
            className="absolute right-0 bottom-0 translate-y-1/4 opacity-20 pointer-events-none hidden md:block"
            alt=""
          />
        </picture>
      </section>
    </div>
  );
}
