
import { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Plus, Minus } from 'lucide-react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const [total, setTotal] = useState(0);

  const checkOutHandler = async ({ name = "Total", amount }) => {
    try {
      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/payment/checkout", {
        name,
        amount: total,
      });
      var options = {
        key: "rzp_test_eEjLpvhY7wYV8w", 
        amount: order.amount,
        currency: order.currency,
        name: "Taniya",
        description: "Test Transaction",
        image:
          "https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/payment/payment-verification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "+916239378916",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("got an error", error);
    }

  };

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
    setTotal(newTotal);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-500 mb-8">Your cart is empty.</p>
        <a href="/" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150?text=Food';
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{item.salePrice}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center border rounded-md divide-x">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <div className="px-4 py-2">{item.quantity}</div>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{item.salePrice * item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear Cart
            </button>

            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Total</div>
              <div className="text-xl font-bold">₹{total}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button onClick={() => checkOutHandler(total)} className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
