'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="mx-auto max-w-section flex flex-col lg:flex-row gap-10 lg:gap-28 items-center w-full">
        <div className="relative">
          <div className="hidden lg:flex absolute top-0 left-[-230px] bottom-0 items-center z-0">
            <h2 className="rotate-[-90deg] text-primary/50 text-8xl">ABOUT US</h2>
          </div>
          <h3 className="text-secondary text-3xl md:text-4xl font-semibold leading-tight relative">
            Bringing India&apos;s <br />
            Tradition to the World
          </h3>
          <p className="mt-6 leading-8 relative text-lg">
            At <span className="font-bold text-xl">Zenith Reach</span>, we believe food is more than just
            nourishment — it&apos;s a connection to tradition, culture, and authentic taste. With a vision to
            bring the rich flavors of India to the world, we specialize in
            <span className="font-bold text-xl">
              {' '}
              Ready-to-Eat, Ready-to-Cook, Frozen, Dry Foods, and Spices
            </span>{' '}
            crafted to preserve their freshness and originality. <br />
            Our journey began with a simple mission: <br />
            <span className="text-secondary">
              To deliver trusted, preservative-free food products that combine convenience with authentic
              taste.
            </span>
            <br /> What makes us unique is our commitment to quality, purity, and trust. From sourcing the
            finest ingredients to maintaining international standards in packaging and export, every product
            reflects our promise of excellence.
          </p>
        </div>
        <picture className="relative h-full w-full">
          <img
            src="/image/porata.png"
            className="relative h-full max-h-[300px] md:max-h-[500px] mx-auto"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
}
