import type { Metadata } from 'next';
import { getProductById, getCategoryByProductId } from '@/utils/productUtils';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  const category = getCategoryByProductId(id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  const categoryName = category?.heading.replace(/\.{3}$/, '') || 'Products';

  return {
    title: product.title,
    description:
      product.description ||
      `${product.title} - Premium ${categoryName} from Zenith Reach. Authentic Indian products exported worldwide.`,
    openGraph: {
      title: `${product.title} | Zenith Reach`,
      description: product.description || `Explore ${product.title} from our ${categoryName} collection.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
