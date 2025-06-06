import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  search: string;
  selectedCategories: string[];
  cart: CartItem[];
  setSearch: (value: string) => void;
  toggleCategory: (category: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
};

export const useProductStore = create<Store>()(
  persist(
    (set, get) => ({
      search: "",
      selectedCategories: [],
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
      updateQuantity: (productId: number, quantity: number) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId ? { ...item, quantity } : item
            )
            .filter((item) => item.quantity > 0), // auto-remove if quantity is 0
        })),

      removeFromCart: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: "whatbytes-cart", // localStorage key
      partialize: (state) => ({ cart: state.cart }), // only persist cart
    }
  )
);
