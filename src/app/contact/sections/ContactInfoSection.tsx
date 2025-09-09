'use client';

import Image from 'next/image';
import React from 'react';

type InfoCard = {
  id: string;
  icon?: React.ReactNode;
  lines: string[];
};

type ContactInfoSectionProps = {
  image: string;
  imageAlt?: string;
  cards: InfoCard[]; // Expecting three cards
};

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  image,
  imageAlt = 'Contact image',
  cards,
}) => {
  return (
    <section className="sm:py-16">
      <div className="max-w-section md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Three cards */}
        <div className="space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="rounded-md bg-primary/90 text-white p-8 shadow-lg">
              {card.icon ? <div className="mb-4">{card.icon}</div> : null}
              <div className="space-y-1 text-sm">
                {card.lines.map((line, idx) => (
                  <p key={idx} className="opacity-90">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="rounded-xl overflow-hidden">
          <div className="relative h-[570px]">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
