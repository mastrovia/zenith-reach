'use client';

import { cn } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

type CategoryItem = {
  id: string;
  title: string;
  image: string;
  description?: string;
  href?: string;
  featured?: boolean; // Renders larger card like the mock
};

type ProductCategorySectionProps = {
  heading: string;
  subheading?: string;
  items: CategoryItem[];
  ctaText?: string;
  ctaHref?: string;
};

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
  heading,
  subheading,
  items,
  ctaText = 'View All',
  ctaHref = '#',
}) => {
  const featured = items.find((i) => i.featured) ?? items[0];
  const others = items.filter((i) => i.id !== featured.id);
  const displayItems = others.slice(0, 4);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-section mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">{heading}</h2>
          {subheading ? <p className="text-white/90 text-sm mt-2 max-w-3xl">{subheading}</p> : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured ? (
            <CategoryCard
              item={featured}
              className="md:row-span-2 lg:row-span-2 lg:col-span-1"
              large
              clickable={false}
            />
          ) : null}

          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            return (
              <CategoryCard
                key={item.id}
                item={item}
                clickable={isLast}
                isViewAll={isLast}
                viewAllText={ctaText}
                viewAllHref={ctaHref}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CategoryCard: React.FC<{
  item: CategoryItem;
  className?: string;
  large?: boolean;
  clickable?: boolean;
  isViewAll?: boolean;
  viewAllText?: string;
  viewAllHref?: string;
}> = ({
  item,
  className = '',
  large = false,
  clickable = true,
  isViewAll = false,
  viewAllText = 'View All',
  viewAllHref = '#',
}) => {
  const Wrapper = (clickable ? Link : 'div') as any;
  const href = isViewAll ? viewAllHref : item.href ?? '#';

  return (
    <Wrapper
      href={clickable ? href : undefined}
      className={`group relative rounded-xl overflow-hidden transition ${
        clickable ? 'cursor-pointer' : 'cursor-default'
      } ${
        isViewAll
          ? 'glass hover:bg-white/5 flex items-center justify-center h-full w-full'
          : 'bg-muted/10 ring-1 ring-white/10 hover:ring-white/20'
      } ${className}`}
    >
      {isViewAll ? (
        <div className="flex flex-col items-center justify-center gap-4 text-white group-hover:scale-105 transition-transform">
          <div className="size-12 rounded-full border border-white/20 flex items-center justify-center text-white">
            <RiArrowRightLine size={24} />
          </div>
          <span className="font-medium text-lg">{viewAllText}</span>
        </div>
      ) : (
        <>
          <div className={cn('relative', large ? 'h-[640px]' : 'h-full')}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover h-full"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          </div>

          {/* Text overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className={`rounded-lg p-4 ${large ? 'backdrop-blur-md bg-black/40' : ''}`}>
              <p className="text-white font-medium text-lg">{item.title}</p>
              {item.description ? (
                <div className="flex gap-2">
                  <p className="text-white/70 text-xs mt-1 line-clamp-3 w-11/12">{item.description}</p>
                  {clickable && (
                    <div className="size-8 bg-secondary rounded-full flex items-center justify-center">
                      <RiArrowRightLine />
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default ProductCategorySection;
