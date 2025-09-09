'use client';

import React from 'react';

type ContactMapSectionProps = {
  title?: string;
  mapSrc: string; // Embed URL
};

const ContactMapSection: React.FC<ContactMapSectionProps> = ({ title = 'Locate Us', mapSrc }) => {
  return (
    <section className="py-12">
      <div className="max-w-section mx-auto">
        <h3 className="sr-only">{title}</h3>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
          <div className="relative w-full h-[540px]">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
