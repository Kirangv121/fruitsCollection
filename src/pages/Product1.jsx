// // Product1.jsx
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductContext } from './Products';

const Product1 = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(ProductContext);

  const addCart = (event, product) => {
    event.preventDefault();
    console.log(product);

    // Make a copy of the cart
    let _cart = { ...cart };

    // Initialize if empty
    if (!_cart.items) {
      _cart.items = {};
    }

    // ✅ Use product.name as unique key (instead of product._id)
    const key = product.name;

    if (_cart.items[key]) {
      _cart.items[key] += 1;
    } else {
      _cart.items[key] = 1;
    }

    // Update total items count
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);

    // Button feedback
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const imageUrl = '/images/pomo3.png'; // hardcoded image

  return (
    <>
      <Link to={`/products/${product.name.toLowerCase()}`}>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <img
            src={imageUrl}
            alt={product.name}
            className="object-cover rounded mb-2 bg-purple-100"
          />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{product.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              Family: {product.family}
            </span>
            <h2 className="text-lg py-2">
              <em>Order: {product.order}</em>
            </h2>
            <span className="py-1 text-sm px-2">
              Calories: {product.nutritions.calories}
            </span>
            <span className="py-1 text-sm px-2">
              Carbohydrates: {product.nutritions.carbohydrates}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2 ml-2">
            <span>Rs.500</span>
            <button
              disabled={isAdding}
              className={`${
                isAdding ? 'bg-green-500' : 'bg-yellow-600'
              } px-4 py-1 rounded-full text-white hover:bg-yellow-600`}
              onClick={(e) => addCart(e, product)}
            >
              {isAdding ? 'ADDED' : 'ADD'}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product1;
