import { Suspense } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
}
