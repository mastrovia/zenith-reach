'use client';

import Image from 'next/image';
import React from 'react';

export default function GlobalPresence() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-section">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6">GLOBAL PRESENCE</h2>
      </div>

      <div className="mx-auto max-w-section">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-white/10">
          <Image src="/image/world-map.png" alt="World map" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <p className="mt-3 text-right text-xs text-white/70">Delivering Indian flavors to 30+ countries</p>
      </div>
    </section>
  );
}
