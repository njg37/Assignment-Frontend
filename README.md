# 🛍️ Assignment-Frontend

This is an e-commerce product listing page built with **Next.js (App Router)**, **Tailwind CSS**, and **Zustand**. The app showcases products, supports filtering, manages a cart, and uses URL-based filters.

---

## 🔗 Live Demo

[View deployed site here](https://ecom-nabajit-ghsohs-projects.vercel.app/)

---

## 🚀 Features

- ✅ Responsive product listing grid  
- ✅ Two distinct filter UIs (blue + white box)  
- ✅ Filters: category + price range  
- ✅ Shared global state with Zustand (cart, filters)  
- ✅ Add to Cart + Cart count badge  
- ✅ Product detail page (`/product/[id]`)  
- ✅ URL-based filtering (`?category=Clothing&price=0-200`)  
- ✅ Mobile-first, accessible UI  
- ✅ Uses local images in `public/images/`  

---

## 🧑‍💻 Tech Stack

- [Next.js 14+ App Router](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Zustand (global state)](https://github.com/pmndrs/zustand)
- [Vercel (deployment)](https://vercel.com)
- TypeScript

---

## 📦 Getting Started Locally

```bash
# 1. Clone the repo
git clone https://github.com/njg37/Assignment-Frontend.git
cd Assignment-Frontend

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```
## 📝 Notes
The cart state is persisted in localStorage via Zustand.

Uses local product data only. No API or backend.

Built for evaluation purposes – optimized for clarity and functionality.

## 📄 License
This project is for academic/submission purposes and is not open-sourced for reuse.

## 👤 Author
Built by Nabajit Ghosh.
