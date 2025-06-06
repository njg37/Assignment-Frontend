import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'iPhone 14',
    price: 69999,
    image: 'https://via.placeholder.com/300x200?text=iPhone+14',
  },
  {
    id: 2,
    title: 'T-Shirt',
    price: 999,
    image: 'https://via.placeholder.com/300x200?text=T-Shirt',
  },
  {
    id: 3,
    title: 'Harry Potter Book',
    price: 499,
    image: 'https://via.placeholder.com/300x200?text=Book',
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
