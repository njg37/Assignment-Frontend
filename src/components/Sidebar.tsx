'use client';

import { useProductStore } from '@/store/useProductStore';

const categories = ['Electronics', 'Clothing', 'Books'];

export default function Sidebar() {
  const selectedCategories = useProductStore((state) => state.selectedCategories);
  const toggleCategory = useProductStore((state) => state.toggleCategory);

  return (
    <aside className="w-full md:w-1/4 bg-white p-4 rounded shadow-sm mb-6 md:mb-0">
      <h2 className="font-semibold mb-4">Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
