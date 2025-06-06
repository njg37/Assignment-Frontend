import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar />
      <ProductGrid />
    </div>
  );
}
