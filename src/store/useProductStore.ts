import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

type CartItem = Product & { quantity: number };

type Store = {
  // Search
  search: string;
  setSearch: (value: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;

  // Category filter (legacy checkbox toggle)
  selectedCategories: string[];
  toggleCategory: (category: string) => void;

  // Dual filter UI state
  filterSource: 'blue' | 'white' | null;

  blueCategory: string | null;
  bluePrice: number;
  whiteCategory: string | null;
  whitePrice: number;

  setBlueCategory: (cat: string) => void;
  setWhiteCategory: (cat: string) => void;
  setBluePrice: (value: number) => void;
  setWhitePrice: (value: number) => void;
};

export const useProductStore = create<Store>()(
  persist(
    (set, get) => ({
      // Search
      search: '',
      setSearch: (value) => set({ search: value }),

      // Cart
      cart: [],
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
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId ? { ...item, quantity } : item
            )
            .filter((item) => item.quantity > 0),
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      // Checkbox-based category filter (if needed)
      selectedCategories: [],
      toggleCategory: (category) =>
        set((state) => {
          const already = state.selectedCategories.includes(category);
          return {
            selectedCategories: already
              ? state.selectedCategories.filter((c) => c !== category)
              : [...state.selectedCategories, category],
          };
        }),

      // Dual filter box logic
      filterSource: null,

      blueCategory: null,
      bluePrice: 1000,
      whiteCategory: null,
      whitePrice: 5000,

      setBlueCategory: (cat) =>
        set(() => ({
          blueCategory: cat,
          filterSource: 'blue',
          whiteCategory: null,
        })),
      setWhiteCategory: (cat) =>
        set(() => ({
          whiteCategory: cat,
          filterSource: 'white',
          blueCategory: null,
        })),
      setBluePrice: (value) =>
        set(() => ({
          bluePrice: value,
          filterSource: 'blue',
          whitePrice: 5000,
        })),
      setWhitePrice: (value) =>
        set(() => ({
          whitePrice: value,
          filterSource: 'white',
          bluePrice: 1000,
        })),
    }),
    {
      name: 'whatbytes-cart',
      partialize: (state) => ({ cart: state.cart }), // only persist cart
    }
  )
);
