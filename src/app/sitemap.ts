import { MetadataRoute } from 'next';
import { categoryData } from '@/utils/CategoryData';
import { getAllProducts } from '@/utils/productUtils';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenithreach.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // Category pages
    const categoryPages: MetadataRoute.Sitemap = categoryData.map((category) => {
        const slug = category.heading
            .toLowerCase()
            .replace(/\.{3}$/, '')
            .trim()
            .replace(/\s+/g, '-');
        return {
            url: `${baseUrl}/products/category/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        };
    });

    // Product pages
    const products = getAllProducts();
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...categoryPages, ...productPages];
}
