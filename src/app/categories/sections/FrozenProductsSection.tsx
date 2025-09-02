'use client';

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

type FrozenProductsSectionProps = {
    heading: string;
    subheading?: string;
    items: CategoryItem[];
    ctaText?: string;
    ctaHref?: string;
};

const FrozenProductsSection: React.FC<FrozenProductsSectionProps> = ({
    heading,
    subheading,
    items,
    ctaText = 'View All',
    ctaHref = '#',
}) => {
    const featured = items.find((i) => i.featured) ?? items[0];
    const others = items.filter((i) => i.id !== featured.id);

    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-secondary">{heading}</h2>
                    {subheading ? <p className="text-white/90 text-sm mt-2 max-w-3xl">{subheading}</p> : null}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured card spans two rows */}
                    {featured ? (
                        <CategoryCard
                            item={featured}
                            className="md:row-span-2 lg:row-span-2 lg:col-span-1"
                            large
                        />
                    ) : null}

                    {/* Render the remaining cards */}
                    {others.slice(0, 4).map((item) => (
                        <CategoryCard key={item.id} item={item} />
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-end mt-8">
                    <Link
                        href={ctaHref}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary text-white px-6 py-2 text-sm font-medium hover:bg-secondary/90 transition-colors"
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

const CategoryCard: React.FC<{
    item: CategoryItem;
    className?: string;
    large?: boolean;
}> = ({ item, className = '', large = false }) => {
    return (
        <Link
            href={item.href ?? '#'}
            className={`group relative rounded-xl overflow-hidden bg-muted/10 ring-1 ring-white/10 hover:ring-white/20 transition ${className}`}
        >
            <div className={`relative ${large ? 'h-[640px]' : 'h-60'}`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
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
                            <div className="size-8 bg-secondary rounded-full flex items-center justify-center">
                                <RiArrowRightLine />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </Link>
    );
};

export default FrozenProductsSection;
