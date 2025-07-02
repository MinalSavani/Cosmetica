import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  applyTempUpdate,
  removeFromCart,
  updateTempQuantity,
} from "../features/ShopCart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("🚀 Cart Data", cart);

  const { items: cartItems, tempItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, value) => {
    const quantity = Number(value);
    if (quantity >= 1) {
      dispatch(updateTempQuantity({ id, quantity }));
    }
  };

  const handleApply = (id) => {
    dispatch(applyTempUpdate(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-6">
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold">Your cart is empty</h3>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-black text-white rounded"
          >
            Back To Home
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.map((item) => {
  const tempItem = tempItems.find((temp) => temp.id === item.id);
  return (
    <div
      key={item.id}
      className="flex justify-between items-center border-b py-4"
    >
      {/* ✅ IMAGE SECTION */}
      <div className="w-24 h-24 mr-4 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* ✅ DETAILS + CONTROLS */}
      <div className="flex-grow">
        <p className="font-semibold">{item.name}</p>
        <p className="text-gray-600">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={tempItem.quantity}
          onChange={(e) =>
            handleQuantityChange(item.id, e.target.value)
          }
          className="w-16 border px-2 py-1"
        />
        <button
          onClick={() => handleApply(item.id)}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Apply
        </button>
        <button
          onClick={() => handleRemove(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
})}

          <div className="text-right mt-6 text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
