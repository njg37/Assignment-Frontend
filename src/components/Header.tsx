'use client';

import { ShoppingCart, UserCircle } from 'lucide-react';
import { useProductStore } from '@/store/useProductStore';

export default function Header() {
  const search = useProductStore((state) => state.search);
  const setSearch = useProductStore((state) => state.setSearch);
  const cart = useProductStore((state) => state.cart);
const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Whatbytes</div>

      <div className="flex-1 mx-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
  {cartCount}
</span>
        </div>
        <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}
