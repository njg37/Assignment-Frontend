'use client';

import { useProductStore } from '@/store/useProductStore';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'iPhone 14',
    price: 69999,
    image: '/images/iPhone1.jpg',
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'T-Shirt',
    price: 999,
    image: '/images/tshirt.jpg',
    category: 'Clothing',
  },
  {
    id: 3,
    title: 'Harry Potter Book',
    price: 499,
    image: '/images/book.jpg',
    category: 'Books',
  },
];

export default function ProductGrid() {
  const { search, selectedCategories } = useProductStore();

  const filtered = dummyProducts.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-64 text-gray-500 text-base italic select-none">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}
