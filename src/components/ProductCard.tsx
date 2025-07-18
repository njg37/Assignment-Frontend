'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useProductStore, Product } from '@/store/useProductStore';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col h-[370px] max-w-[320px] w-full">
      {/* Image container with link */}
      <Link
        href={`/product/${product.id}`}
        className="aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100 mb-4 block relative"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover object-center transition hover:scale-105 rounded-md"
          loading="lazy"
          draggable={false}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      {/* Title (linked) */}
      <Link href={`/product/${product.id}`}>
        <h3
          className="text-[1rem] font-semibold text-gray-900 truncate px-2 hover:underline cursor-pointer"
          title={product.title}
        >
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <p className="text-blue-700 font-bold text-base px-2 mb-4">${product.price}</p>

      {/* Add to Cart */}
      <div className="mt-auto px-2">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#1e53bb] hover:bg-blue-800 text-white text-sm font-medium py-2 rounded-lg transition"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
