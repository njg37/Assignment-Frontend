'use client';

import Link from 'next/link';
import { ShoppingCart, Search, UserCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useProductStore } from '@/store/useProductStore';

export default function Header() {
  const cart = useProductStore((s) => s.cart);
  const search = useProductStore((s) => s.search);
  const setSearch = useProductStore((s) => s.setSearch);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Optional: Wait for client mount to avoid hydration errors
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  return (
    <header className="w-full bg-[#184398] text-white shadow-sm sticky top-0 z-50">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex flex-nowrap        /* prevent wrapping on all sizes */
          items-center justify-between gap-4
        "
      >
        {/* Logo */}
        <div className="text-2xl font-bold whitespace-nowrap flex-shrink-0">
          E-com
        </div>

        {/* Search */}
        <div className="relative flex-grow min-w-0 max-w-xs md:max-w-md flex-shrink">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-white" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="
              w-full
              pl-10 pr-4 py-2 rounded-md text-sm text-white
              bg-[#184398] placeholder-white outline-none
              border border-blue-300 focus:ring-2 focus:ring-white
              min-h-[36px] md:min-h-auto
            "
          />
        </div>

        {/* Cart + Profile */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/cart">
            <div className="relative flex items-center gap-2 cursor-pointer bg-blue-900 px-3 py-2 rounded-md hover:bg-blue-800 transition">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-[10px] font-bold px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <button
            type="button"
            className="p-1.5 rounded-full hover:bg-blue-800 transition"
            title="Profile"
          >
            <UserCircle className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
