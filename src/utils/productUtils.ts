// Utility functions to work with categoryData

import { categoryData } from './CategoryData';

export type Product = {
    id: string;
    title: string;
    image: string;
    description?: string;
    href?: string;
    featured?: boolean;
};

export type Category = {
    heading: string;
    subheading: string;
    items: Product[];
    ctaText?: string;
    ctaHref?: string;
};

/**
 * Get all products from all categories
 */
export function getAllProducts(): (Product & { category: string })[] {
    const products: (Product & { category: string })[] = [];

    for (const category of categoryData) {
        for (const item of category.items) {
            products.push({
                ...item,
                category: category.heading.replace(/\.{3}$/, ''), // Remove trailing "..."
            });
        }
    }

    return products;
}

/**
 * Get a product by its ID
 */
export function getProductById(id: string): (Product & { category: string }) | undefined {
    for (const category of categoryData) {
        const product = category.items.find((item) => item.id === id);
        if (product) {
            return {
                ...product,
                category: category.heading.replace(/\.{3}$/, ''),
            };
        }
    }
    return undefined;
}

/**
 * Get the category that contains a product by product ID
 */
export function getCategoryByProductId(productId: string): Category | undefined {
    for (const category of categoryData) {
        const product = category.items.find((item) => item.id === productId);
        if (product) {
            return category;
        }
    }
    return undefined;
}

/**
 * Get products from the same category (excluding the given product)
 */
export function getRelatedProducts(
    productId: string,
    limit: number = 5
): (Product & { category: string })[] {
    const category = getCategoryByProductId(productId);
    if (!category) return [];

    return category.items
        .filter((item) => item.id !== productId)
        .slice(0, limit)
        .map((item) => ({
            ...item,
            category: category.heading.replace(/\.{3}$/, ''),
        }));
}

/**
 * Get a category by its heading (slug-friendly)
 */
export function getCategoryBySlug(slug: string): Category | undefined {
    return categoryData.find((category) => {
        const categorySlug = category.heading
            .toLowerCase()
            .replace(/\.{3}$/, '')
            .trim()
            .replace(/\s+/g, '-');
        return categorySlug === slug;
    });
}
