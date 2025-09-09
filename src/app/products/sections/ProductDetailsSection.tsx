'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductDetailsProps {
  title: string;
  description: string;
  variants: Array<{
    id: string;
    name: string;
    description: string;
    uses?: string;
    packSizes?: string[];
    image: string;
  }>;
  exportDetails: {
    form: string;
    shelfLife: string;
    packaging: string;
    qualityStandards: string;
  };
  mainImage: string;
  thumbnailImages: string[];
}

const ProductDetailsSection: React.FC<ProductDetailsProps> = ({
  title,
  description,
  variants,
  exportDetails,
  mainImage,
  thumbnailImages,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentImage =
    selectedImageIndex < thumbnailImages.length ? thumbnailImages[selectedImageIndex] : mainImage;

  return (
    <section className="px-2 sm:px-6 lg:px-8">
      <div className="sm:max-w-section sm:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
              <Image
                src={currentImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-green-500'
                      : 'border-transparent hover:border-white/30'
                  }`}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-white">{title}</h2>

            <div className="space-y-2">
              <p className="text-white/80 leading-relaxed">{description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Available Variants</h3>

              {variants.map((variant, index) => (
                <div key={variant.id} className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">
                    {index + 1}. {variant.name}
                  </h4>
                  <ul className="space-y-1 text-white/80">
                    {variant.description && (
                      <li className="flex items-start">
                        <span className="size-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {variant.description}
                      </li>
                    )}
                    {variant.uses && (
                      <li className="flex items-start">
                        <span className="size-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {variant.uses}
                      </li>
                    )}
                    {variant.packSizes && (
                      <li className="flex items-start">
                        <span className="size-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-medium">Pack Sizes: </span>
                        <span>{variant.packSizes.join(', ')}</span>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Export & Packaging Details */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Export & Packaging Details</h3>
              <div className="space-y-1 text-white/80">
                <div>
                  <span className="font-semibold text-white">Form:</span>
                  <span className="ml-2">{exportDetails.form}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Shelf Life:</span>
                  <span className="ml-2">{exportDetails.shelfLife}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Packaging:</span>
                  <span className="ml-2">{exportDetails.packaging}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Quality Standards:</span>
                  <span className="ml-2">{exportDetails.qualityStandards}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
