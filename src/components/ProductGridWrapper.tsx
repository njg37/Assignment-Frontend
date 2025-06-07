'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ProductGrid = dynamic(() => import('./ProductGrid'), {
  ssr: false,
});

export default function ProductGridWrapper() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductGrid />
    </Suspense>
  );
}
