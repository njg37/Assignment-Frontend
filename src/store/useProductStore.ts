import { create } from 'zustand';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

type CartItem = Product & { quantity: number };

type Store = {
  search: string;
  selectedCategories: string[];
  products: Product[];
  cart: CartItem[];
  setSearch: (value: string) => void;
  toggleCategory: (category: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
};

export const useProductStore = create<Store>((set) => ({
  search: '',
  selectedCategories: [],
  products: [],
  cart: [],
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
  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity }],
        };
      }
    }),
}));
