'use client';

import React from 'react';

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Quality Ingredients',
    description: 'We source from certified farms and audited partners.',
  },
  {
    title: 'International Standards',
    description: 'Processes aligned with FSSAI, ISO, and HACCP norms.',
  },
  {
    title: 'Wide Export Network',
    description: 'Serving distributors and retailers across continents.',
  },
  {
    title: 'Audit-ready Systems',
    description: 'Transparent documentation and batch traceability.',
  },
];

export default function UniqueGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-section">
        <h3 className="text-center text-lg text-food-light-green">What makes us UNIQUE</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">{f.title}</h4>
              <p className="mt-2 text-white/80 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
