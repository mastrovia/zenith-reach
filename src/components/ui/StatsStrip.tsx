'use client';

import React from 'react';

type Stat = {
  value: string;
  label: string;
  symbol: string;
};

const STATS: Stat[] = [
  { value: '10', label: 'Services', symbol: '+' },
  { value: '90', label: 'Customers', symbol: 'k' },
  { value: '10', label: 'Years', symbol: '+' },
  { value: '15', label: 'Locations', symbol: '+' },
];

export default function StatsStrip() {
  return (
    <section className="relative text-secondary/50 py-12 md:py-16">
      <div className="mx-auto max-w-section flex gap-16 justify-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center relative flex items-end">
            <div className="text-6xl md:text-7xl lg:text-9xl font-bold text-food-light-green">
              {stat.value}
            </div>
            <div className="text-2xl font-bold">{stat.symbol}</div>
            <div className="font-semibold text-white/80 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
