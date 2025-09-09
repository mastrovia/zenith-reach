import React from 'react';
import Image from 'next/image';

interface ProductHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description?: string;
  showScrollIndicator?: boolean;
  onScrollClick?: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
  showScrollIndicator,
  onScrollClick,
}) => {
  return (
    <div className="relative min-h-[60vh] sm:min-h-[80vh] flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage} alt="Product background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-section mx-auto pb-20 w-full">
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 animate-fade-in-up">
            {title}
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl font-light text-white/90 mb-8 animate-fade-in-up line-clamp-2 md:line-clamp-none"
            style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>

          {description && (
            <p
              className="text-base md:text-lg text-white/80 max-w-3xl animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 right-8 z-10 animate-bounce">
          <button
            onClick={onScrollClick}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductHero;
