'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

export type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  category?: string;
  shortDescription?: string;
  href?: string;
  onOpenModal?: (product: ProductCardProps) => void;
  variant?: 'overlay' | 'standard';
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  category,
  shortDescription,
  href,
  onOpenModal,
  variant = 'overlay',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (onOpenModal) {
          onOpenModal({ id, name, image, category, shortDescription, href });
        } else {
          setIsExpanded((prev) => !prev);
        }
      }
    },
    [id, name, image, category, shortDescription, href, onOpenModal]
  );

  const handleClick = useCallback(() => {
    // On mobile (no hover), clicking expands or opens modal
    if (onOpenModal) {
      onOpenModal({ id, name, image, category, shortDescription, href });
    }
  }, [id, name, image, category, shortDescription, href, onOpenModal]);

  const productLink = href || `/products/${id}`;

  if (variant === 'standard') {
    return (
      <div
        className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-muted/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 focus-within:ring-2 focus-within:ring-secondary cursor-pointer"
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        {/* Image Container */}
        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-6">
          {category && <p className="text-secondary text-xs uppercase tracking-wider mb-2">{category}</p>}
          <h3 className="text-white font-semibold text-xl mb-3">{name}</h3>
          {shortDescription && (
            <p className="text-white/70 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
              {shortDescription}
            </p>
          )}

          <div className="mt-auto pt-4">
            <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:text-white transition-colors">
              View Details
              <RiArrowRightLine size={16} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-muted/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 focus-within:ring-2 focus-within:ring-secondary"
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Product name - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-medium text-lg drop-shadow-lg">{name}</p>
          {category && <p className="text-white/70 text-xs mt-1 uppercase tracking-wide">{category}</p>}
        </div>

        {/* Hover overlay with description - desktop only */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:flex flex-col justify-end p-4">
          <p className="text-white font-medium text-lg mb-2">{name}</p>
          {shortDescription && <p className="text-white/80 text-sm line-clamp-3 mb-4">{shortDescription}</p>}
          <Link
            href={productLink}
            className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </div>

      {/* Mobile expanded state - inline */}
      {isExpanded && (
        <div className="md:hidden p-4 bg-muted/20 border-t border-white/10">
          {shortDescription && <p className="text-white/80 text-sm mb-4">{shortDescription}</p>}
          <Link
            href={productLink}
            className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
          >
            View Details
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
