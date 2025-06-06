'use client';

import { useProductStore } from '@/store/useProductStore';

const categories = ['Electronics', 'Clothing', 'Home'];

export default function Sidebar() {
  const selectedCategories = useProductStore((state) => state.selectedCategories);
  const toggleCategory = useProductStore((state) => state.toggleCategory);

  return (
    <aside className="bg-white rounded-lg shadow-md p-5 w-full md:w-1/4">
      <h2 className="font-bold text-lg mb-4 text-gray-800">Filters</h2>

      <div className="mb-6">
        <p className="font-semibold text-gray-700 mb-2">Category</p>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="accent-blue-600"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-gray-700 mb-2">Price</p>
        <input
          type="range"
          min={0}
          max={1000}
          className="w-full accent-blue-600"
        />
      </div>
    </aside>
  );
}
