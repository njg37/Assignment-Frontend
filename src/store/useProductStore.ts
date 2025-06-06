import { create } from 'zustand';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type Store = {
  search: string;
  selectedCategories: string[];
  products: Product[];
  setSearch: (value: string) => void;
  toggleCategory: (category: string) => void;
};

export const useProductStore = create<Store>((set) => ({
  search: '',
  selectedCategories: [],
  products: [], // You can populate this later dynamically
  setSearch: (value) => set({ search: value }),
  toggleCategory: (category) =>
    set((state) => {
      const already = state.selectedCategories.includes(category);
      return {
        selectedCategories: already
          ? state.selectedCategories.filter((c) => c !== category)
          : [...state.selectedCategories, category],
      };
    }),
}));
