import { useContext, useMemo } from "react";
import { ProductContext } from "./Products";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, cart } = useContext(ProductContext);

  // When cart is empty
  if (!cart.items || Object.keys(cart.items).length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-700">🛒 Your cart is empty</h2>
        <Link to="/products">
          <button className="bg-blue-500 text-white px-5 py-2 rounded mt-6 hover:bg-blue-600 transition">
            Browse Products
          </button>
        </Link>
      </div>
    );
  }

  // Compute total quantity & price
  const { totalQuantity, totalPrice } = useMemo(() => {
    let quantity = 0;
    let price = 0;
    Object.keys(cart.items).forEach((name) => {
      const q = cart.items[name];
      quantity += q;
      price += q * 500; // Rs.500 per fruit (example)
    });
    return { totalQuantity: quantity, totalPrice: price };
  }, [cart]);

  return (
    <div className="container mx-auto mt-10 p-4 lg:w-3/4 w-full">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <ul className="space-y-4">
        {Object.keys(cart.items).map((name) => {
          const quantity = cart.items[name];
          const product = products.find(
            (fruit) => fruit.name.toLowerCase() === name.toLowerCase()
          );

          if (!product) return null;

          return (
            <li
              key={name}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/pomo3.png"
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg bg-purple-100"
                />
                <div>
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-sm text-gray-600">Family: {product.family}</p>
                  <p className="text-sm text-gray-600">Order: {product.order}</p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Quantity: {quantity}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-800">Rs. {500 * quantity}</p>
                <p className="text-sm text-gray-500">
                  (₹500 × {quantity})
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer Total Section */}
      <div className="mt-10 bg-gray-100 rounded-lg p-6 shadow-inner">
        <div className="flex justify-between text-lg font-semibold mb-2">
          <span>Total Items:</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-800">
          <span>Total Amount:</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="text-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-bold transition">
            Pay Bill 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
