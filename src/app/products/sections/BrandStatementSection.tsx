'use client';

import Button from '@/components/ui/Button';
import React from 'react';

type BrandStatementSectionProps = {
  headline: string; // Large left headline, can include line breaks via \n
  body: string; // Right paragraph
  ctaText?: string;
  ctaHref?: string;
};

const BrandStatementSection: React.FC<BrandStatementSectionProps> = ({
  headline,
  body,
  ctaText = 'Contact Now',
  ctaHref = '/contact',
}) => {
  // Split by \n to allow manual line breaks in the headline
  const lines = headline.split('\n');

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 mb-20">
      <div className="max-w-section mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left: Massive headline */}
        <div className="space-y-4 col-span-2">
          <h2 className="text-5xl md:text-8xl font-medium text-white leading-tight">
            {lines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Right: Paragraph + CTA */}
        <div className="max-w-prose">
          <p className="text-white leading-relaxed">{body}</p>
          <div className="mt-6">
            <Button link={ctaHref}>{ctaText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatementSection;
