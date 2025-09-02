'use client';

import Image from 'next/image';
import React from 'react';

type Category = {
  title: string;
  description: string;
  image: string;
};

const CATEGORIES: Category[] = [
  // {
  //   title: 'Frozen Products',
  //   description: 'Ready-to-cook Indian delights and staples.',
  //   image: '/image/cat-frozen.png',
  // },
  {
    title: 'Dry Products',
    description: 'Dehydrated fruits, flours, and mixes.',
    image: '/image/cat-dry.png',
  },
  {
    title: 'Spices',
    description: 'Whole and ground spices, expertly curated.',
    image: '/image/cat-spices.png',
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative text-white py-16 md:py-24">
      <div className="mx-auto max-w-section">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-10">CATEGORIES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((c) => (
            <article key={c.title} className="group relative rounded-xl overflow-hidden ring-1 ring-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-white/80 text-sm">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
