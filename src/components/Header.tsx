'use client';

import { ShoppingCart } from 'lucide-react';
import { useProductStore } from '@/store/useProductStore';

export default function Header() {
  const search = useProductStore((state) => state.search);
  const setSearch = useProductStore((state) => state.setSearch);
  const cart = useProductStore((state) => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-xl font-bold whitespace-nowrap">Whatbytes</div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 text-sm text-gray-800 rounded-md outline-none"
        />

        {/* Cart */}
        <div className="relative flex items-center gap-1">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-white text-blue-700 text-xs font-bold px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
