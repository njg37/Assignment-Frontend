'use client';

import { useProductStore } from '@/store/useProductStore';

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="font-medium">{product.title}</h3>
      <p className="text-blue-600 font-semibold">₹{product.price}</p>
      <button
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
