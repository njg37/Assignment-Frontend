'use client';

import Sidebar from '@/components/Sidebar';
import ProductGridWrapper from '@/components/ProductGridWrapper';
import { Suspense } from 'react';


export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGridWrapper />
        </Suspense>
      </div>
    </div>
  );
}
