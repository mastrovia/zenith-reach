'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import ProductHero from '@/components/ProductHero';
import ProductDetailsSection from './sections/ProductDetailsSection';

const Products = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollClick = () => {
        const productDescription = document.getElementById('product-description');
        if (productDescription) {
            productDescription.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const productData = {
        title: 'Product Description',
        description:
            'Coconut Products from Zenith Reach are prepared from hand-picked, farm-fresh coconuts sourced from Kerala - the land of coconuts. With modern processing methods, we ensure natural taste, aroma, and nutrition stay intact. Ideal for curries, desserts, bakery items, and traditional Indian cooking, bringing authentic flavor to kitchens worldwide.',
        variants: [
            {
                id: 'grated-coconut',
                name: 'Grated Coconut',
                description: 'Freshly grated and frozen to lock in natural flavor.',
                uses: 'Ideal for chutneys, curries, sweets, and baking.',
                packSizes: ['200g', '500g', '1kg'],
                image: '/image/coconutbg.jpg',
            },
            {
                id: 'sliced-coconut',
                name: 'Sliced Coconut',
                description: 'Thinly sliced coconut pieces, frozen to preserve texture and taste.',
                uses: 'Perfect for snacks, frying, and traditional recipes.',
                packSizes: ['200g', '500g', '1kg'],
                image: '/image/coconutbg.jpg',
            },
        ],
        exportDetails: {
            form: 'Frozen',
            shelfLife: '12 months (under frozen conditions)',
            packaging: 'Hygienic, vacuum-sealed / LDPE food-grade pouches',
            qualityStandards: 'Processed as per international food safety & export norms',
        },
        mainImage: '/image/coconutbg.jpg',
        thumbnailImages: ['/image/coconutbg.jpg', '/image/coconutbg.jpg'],
    };

    return (
        <div className="min-h-screen bg-background">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <ProductHero
                backgroundImage="/image/coconutbg.jpg"
                title="Coconut Products"
                subtitle="Freshly processed, hygienically packed, and ready for international markets."
                showScrollIndicator={true}
                onScrollClick={handleScrollClick}
            />

                <ProductDetailsSection {...productData} />
        </div>
    );
};

export default Products;
