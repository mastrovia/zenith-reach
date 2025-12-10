import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/utils/productUtils';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  const categoryName = category.heading.replace(/\.{3}$/, '');

  return {
    title: categoryName,
    description:
      category.subheading ||
      `Explore our ${categoryName} collection. Premium Indian products exported worldwide by Zenith Reach.`,
    openGraph: {
      title: `${categoryName} | Zenith Reach Products`,
      description:
        category.subheading ||
        `Browse our complete ${categoryName} catalog - authentic Indian products for export.`,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
