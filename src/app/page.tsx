'use client';

import Sidebar from '@/components/Sidebar';
import ProductGridWrapper from '@/components/ProductGridWrapper';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <div className="flex flex-col md:flex-row gap-6">
        <Sidebar />
        <div className="flex-1">
          <ProductGridWrapper />
        </div>
      </div>
    </Suspense>
  );
}
