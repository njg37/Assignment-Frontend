'use client';

import { useProductStore } from '@/store/useProductStore';

export default function CartPage() {
  const cart = useProductStore((state) => state.cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>₹{item.price} × {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-blue-600">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="text-right border-t pt-4">
            <p className="text-lg font-bold">
              Total: ₹{totalPrice}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
