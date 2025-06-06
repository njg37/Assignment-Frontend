import { notFound } from 'next/navigation';
// import Image from 'next/image';
import { useProductStore } from '@/store/useProductStore';


const dummyProducts = [
  {
    id: 1,
    title: 'iPhone 14',
    price: 69999,
    image: 'https://via.placeholder.com/600x400?text=iPhone+14',
    category: 'Electronics',
    description: 'Latest iPhone 14 with A15 Bionic chip and enhanced camera.',
  },
  {
    id: 2,
    title: 'T-Shirt',
    price: 999,
    image: 'https://via.placeholder.com/600x400?text=T-Shirt',
    category: 'Clothing',
    description: 'Comfortable cotton T-shirt in various sizes.',
  },
  {
    id: 3,
    title: 'Harry Potter Book',
    price: 499,
    image: 'https://via.placeholder.com/600x400?text=Book',
    category: 'Books',
    description: 'The magical first adventure of Harry Potter.',
  },
];


export default function ProductDetail({ params }: { params: { id: string } }) {
    const product = dummyProducts.find((p) => p.id === Number(params.id));
    const addToCart = useProductStore((state) => state.addToCart);

  if (!product) return notFound();

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-white rounded shadow">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-xl text-blue-600 font-bold">₹{product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        <div className="flex items-center gap-4 mt-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-20 border px-2 py-1 rounded"
          />
<button
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  onClick={() => addToCart(product, 1)}
>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
}
