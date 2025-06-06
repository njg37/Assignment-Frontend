'use client';

import { useProductStore } from '@/store/useProductStore';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'iPhone 14',
    price: 69999,
    image: 'https://via.placeholder.com/300x200?text=iPhone+14',
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'T-Shirt',
    price: 999,
    image: 'https://via.placeholder.com/300x200?text=T-Shirt',
    category: 'Clothing',
  },
  {
    id: 3,
    title: 'Harry Potter Book',
    price: 499,
    image: 'https://via.placeholder.com/300x200?text=Book',
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500 col-span-full">No products found.</p>
      )}
    </div>
  );
}
