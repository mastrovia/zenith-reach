'use client';

import React from 'react';

const ITEMS = Array.from({ length: 18 }).map(() => ({ a: '#ZENITH', b: 'REACH' }));

export default function HashtagMarquee() {
  return (
    <section className="relative py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_18s_linear_infinite] ">
        {ITEMS.map((txt, i) => (
          <div key={i} className="text-4xl md:text-6xl mx-6 font-sofia text-secondary inline font-bold">
            <span>{txt.a}</span> <span className="text-primary">{txt.b}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-71.5%);
          }
        }
      `}</style>
    </section>
  );
}
