'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useCallback } from 'react';
import { RiCloseLine, RiArrowRightLine } from 'react-icons/ri';

export type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    image: string;
    category?: string;
    shortDescription?: string;
    description?: string;
    href?: string;
  } | null;
};

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }

        // Focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen || !product) return null;

  const productLink = product.href || `/products/${product.id}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        ref={modalRef}
        className="relative bg-background border border-white/10 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close modal"
        >
          <RiCloseLine size={24} />
        </button>

        {/* Image */}
        <div className="relative aspect-[4/3]">
          <Image src={product.image} alt={product.name} fill className="object-cover rounded-t-2xl" />
        </div>

        {/* Content */}
        <div className="p-6">
          {product.category && (
            <p className="text-secondary text-xs uppercase tracking-wider mb-2">{product.category}</p>
          )}
          <h2 id="product-modal-title" className="text-2xl font-semibold text-white mb-4">
            {product.name}
          </h2>
          {(product.description || product.shortDescription) && (
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {product.description || product.shortDescription}
            </p>
          )}
          <Link
            href={productLink}
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            onClick={onClose}
          >
            View Details
            <RiArrowRightLine size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
