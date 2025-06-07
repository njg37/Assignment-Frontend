'use client';

import { useProductStore } from '@/store/useProductStore';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

export default function Sidebar() {
  const {
    blueCategory,
    setBlueCategory,
    bluePrice,
    setBluePrice,
    whiteCategory,
    setWhiteCategory,
    whitePrice,
    setWhitePrice,
    setFilterSource,
  } = useProductStore();

  return (
    <aside className="w-full md:w-1/4">
      {/* Blue Filter Box */}
      <div className="bg-[#1a48a3] text-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2">Category</p>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="blue-category"
                  checked={blueCategory === cat}
                  onChange={() => {
                    setBlueCategory(cat);
                    setFilterSource('blue');
                  }}
                  className="accent-white"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="text-sm font-semibold mb-2">Price</p>
          <input
            type="range"
            min={0}
            max={1000}
            value={bluePrice}
            onChange={(e) => {
              setBluePrice(parseInt(e.target.value));
              setFilterSource('blue');
            }}
            className="w-full accent-white"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* White Box */}
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-700 text-sm font-semibold mb-2">Cacyroy</p>
        {categories.map((cat) => (
          <label key={cat} className="block mb-1 text-gray-600 text-sm">
            <input
              type="radio"
              name="white-category"
              checked={whiteCategory === cat}
              onChange={() => {
                setWhiteCategory(cat);
                setFilterSource('white');
              }}
              className="mr-2 accent-blue-600"
            />
            {cat}
          </label>
        ))}
        <div className="mt-3">
          <input
            type="text"
            value={whitePrice}
            onChange={(e) => {
              setWhitePrice(parseInt(e.target.value || '0'));
              setFilterSource('white');
            }}
            placeholder="5000"
            className="w-full border px-2 py-1 rounded text-sm outline-none"
          />
        </div>
      </div>
    </aside>
  );
}
