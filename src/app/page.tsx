'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/Sidebar';

// Disable SSR for ProductGrid to avoid hydration/build issues
const ProductGrid = dynamic(() => import('@/components/ProductGrid'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
}
