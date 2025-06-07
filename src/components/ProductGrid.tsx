'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useProductStore } from '@/store/useProductStore';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'Running Shoes',
    price: 99,
    image: '/images/shoes.jpg',
    category: 'Clothing',
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    price: 129,
    image: '/images/headphones.jpg',
    category: 'Electronics',
  },
  {
    id: 3,
    title: 'Backpack',
    price: 149,
    image: '/images/backpack.jpg',
    category: 'Clothing',
  },
  {
    id: 4,
    title: 'Smartwatch',
    price: 249,
    image: '/images/smartwatch.jpg',
    category: 'Electronics',
  },
  {
    id: 5,
    title: 'Sunglasses',
    price: 149,
    image: '/images/sunglasses.jpg',
    category: 'Clothing',
  },
  {
    id: 6,
    title: 'Digital Camera',
    price: 499,
    image: '/images/camera.jpg',
    category: 'Electronics',
  },
  {
    id: 7,
    title: 'T-shirt',
    price: 29,
    image: '/images/tshirt.jpg',
    category: 'Clothing',
  },
  {
    id: 8,
    title: 'Smartphone',
    price: 699,
    image: '/images/smartphone.jpg',
    category: 'Electronics',
    description: 'Lorem ipsum dolor amet, consectetur eiusmod.',
    rating: 5,
  },
];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const { search } = useProductStore();

  const categoryParam = searchParams.get('category');
  const priceParam = searchParams.get('price');

  let minPrice = 0;
  let maxPrice = Infinity;

  if (priceParam && priceParam.includes('-')) {
    const [min, max] = priceParam.split('-').map(Number);
    if (!isNaN(min)) minPrice = min;
    if (!isNaN(max)) maxPrice = max;
  }

  const filtered = dummyProducts.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !categoryParam || categoryParam === 'All' || product.category === categoryParam;
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 px-2 sm:px-4">Product Listing</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
        {filtered.length > 0 ? (
          filtered.map((product) =>
            product.title === 'Smartphone' ? (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 col-span-1 lg:col-span-2 p-6 flex gap-6 w-full h-[500px] hover:shadow-lg transition"
              >
                {/* Optimized Image */}
                <div className="w-[42%] h-full bg-gray-100 rounded-lg overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1 pt-2">
                  <div>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-2xl text-[#003390] font-extrabold">${product.price}</p>

                    <div className="flex items-center gap-1 text-[#FFC107] text-lg mt-2 mb-4">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed mb-5">{product.description}</p>

                    <p className="text-sm text-gray-400 mb-0.5">Category</p>
                    <p className="text-base font-semibold text-gray-800">{product.category}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      useProductStore.getState().addToCart(product);
                    }}
                    className="mt-auto w-full bg-[#1e53bb] hover:bg-blue-800 text-white text-sm font-medium py-2 rounded-lg transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            ) : (
              <ProductCard key={product.id} product={product} />
            )
          )
        ) : (
          <div className="col-span-full flex justify-center items-center h-64 text-gray-500 text-base italic select-none">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}
