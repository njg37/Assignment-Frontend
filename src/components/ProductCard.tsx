'use client';

import { useProductStore } from '@/store/useProductStore';

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col h-[360px] max-w-[320px] w-full">
      {/* Image container with fixed aspect ratio */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center block"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Product Info */}
      <h3
        className="text-sm font-semibold text-gray-900 truncate mb-1"
        title={product.title}
      >
        {product.title}
      </h3>
      <p className="text-blue-600 font-bold text-sm mb-4">₹{product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}
