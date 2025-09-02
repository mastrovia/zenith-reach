'use client';

import React from 'react';

const ITEMS = Array.from({ length: 8 }).map(() => '#ZENITH REACH');

export default function HashtagMarquee() {
  return (
    <section className="relative py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_18s_linear_infinite]">
        {ITEMS.map((txt, i) => (
          <span key={i} className="mx-6 tracking-widest text-sm opacity-80">
            {txt}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
