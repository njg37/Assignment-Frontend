'use client';

import Sidebar from '@/components/Sidebar';
import ProductGridWrapper from '@/components/ProductGridWrapper';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        <ProductGridWrapper />
      </div>
    </div>
  );
}
