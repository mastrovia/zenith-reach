'use client';

import React from 'react';

const LOGOS = [
  { src: '/image/qs-fssai.png', alt: 'FSSAI' },
  { src: '/image/qs-apeda.png', alt: 'APEDA' },
  { src: '/image/qs-iso.png', alt: 'ISO' },
  { src: '/image/qs-haccp.png', alt: 'HACCP' },
];

export default function CertificationsStrip() {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="mx-auto max-w-section px-4">
        <h2 className="text-center text-secondary text-3xl md:text-4xl mb-8">
          Quality Standards <br />& Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 md:gap-8">
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="relative grayscale border border-gray-800 h-32 md:h-52 p-8 md:p-16 rounded-xl flex items-center justify-center"
            >
              <picture className="w-full h-full flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="object-contain w-full h-full" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
