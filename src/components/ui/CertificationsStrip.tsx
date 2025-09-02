"use client";

import Image from "next/image";
import React from "react";

const LOGOS = [
  { src: "/images/logo-fssai.png", alt: "FSSAI" },
  { src: "/images/logo-apeda.png", alt: "APEDA" },
  { src: "/images/logo-iso.png", alt: "ISO" },
  { src: "/images/logo-haccp.png", alt: "HACCP" },
];

export default function CertificationsStrip() {
  return (
    <section className="relative bg-black text-white py-10">
      <div className="mx-auto max-w-section flex items-center justify-center gap-10 opacity-80">
        {LOGOS.map((logo) => (
          <div key={logo.alt} className="relative h-10 w-24 md:h-12 md:w-28 grayscale">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}



