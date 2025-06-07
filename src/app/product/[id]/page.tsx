'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { useProductStore } from '@/store/useProductStore';

const dummyProducts = [
  {
    id: 1,
    title: 'Running Shoes',
    price: 99,
    image: '/images/shoes.jpg',
    category: 'Clothing',
    description: 'Comfortable and durable running shoes.',
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    price: 129,
    image: '/images/headphones.jpg',
    category: 'Electronics',
    description: 'High quality sound with noise cancellation.',
  },
  {
    id: 3,
    title: 'Backpack',
    price: 149,
    image: '/images/backpack.jpg',
    category: 'Clothing',
    description: 'Spacious backpack perfect for travel and daily use.',
  },
  {
    id: 4,
    title: 'Smartwatch',
    price: 249,
    image: '/images/smartwatch.jpg',
    category: 'Electronics',
    description: 'Track your fitness and notifications on the go.',
  },
  {
    id: 5,
    title: 'Sunglasses',
    price: 149,
    image: '/images/sunglasses.jpg',
    category: 'Clothing',
    description: 'Stylish UV-protected sunglasses for sunny days.',
  },
  {
    id: 6,
    title: 'Digital Camera',
    price: 499,
    image: '/images/camera.jpg',
    category: 'Electronics',
    description: 'Capture stunning photos with high resolution.',
  },
  {
    id: 7,
    title: 'T-shirt',
    price: 29,
    image: '/images/tshirt.jpg',
    category: 'Clothing',
    description: 'Comfortable cotton t-shirt available in all sizes.',
  },
  {
    id: 8,
    title: 'Smartphone',
    price: 699,
    image: '/images/smartphone.jpg',
    category: 'Electronics',
    description: 'Latest generation smartphone with stunning display.',
    rating: 5,
  },
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = dummyProducts.find((p) => p.id === Number(id));
  const addToCart = useProductStore((state) => state.addToCart);

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded shadow p-6 flex flex-col md:flex-row gap-10">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-5">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-2xl font-bold text-blue-700 mt-2">${product.price}</p>
        </div>

        <p className="text-gray-700 text-base">{product.description}</p>

        <div className="text-sm text-gray-600">
          <strong>Category:</strong> {product.category}
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-4 mt-4">
          <input
            id="qty-input"
            type="number"
            min={1}
            defaultValue={1}
            className="w-20 border px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              const qty = Number((document.getElementById('qty-input') as HTMLInputElement)?.value || 1);
              addToCart(product, Math.max(1, qty));
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>

        {/* Optional Reviews */}
        <div className="mt-8 border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Customer Reviews</h2>
          <div className="text-sm text-gray-600 italic">
            ★★★★★ “This product is amazing!” — A happy customer
          </div>
          <div className="text-sm text-gray-600 italic mt-1">
            ★★★★☆ “Really good, but could be improved slightly.” — Another customer
          </div>
        </div>
      </div>
    </div>
  );
}
