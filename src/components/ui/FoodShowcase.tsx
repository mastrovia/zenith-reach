'use client';

import Image from 'next/image';
import React from 'react';

const IMAGES = [
  '/images/showcase-1.jpg',
  '/images/showcase-2.jpg',
  '/images/showcase-3.jpg',
  '/images/showcase-4.jpg',
  '/images/showcase-5.jpg',
  '/images/showcase-6.jpg',
];

export default function FoodShowcase() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-section">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-wide">FOOD SHOWCASE</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image src={src} alt="Food" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <h4 className="text-food-light-green">Quality Standards</h4>
          <p className="text-white/80">& Certifications</p>
        </div>
      </div>
    </section>
  );
}
