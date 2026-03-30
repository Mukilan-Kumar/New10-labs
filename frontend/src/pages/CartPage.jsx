import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        setLoading(false);
        return;
      }
      
      const response = await api.get(`/cart/${sessionId}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      fetchCart();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearCart = async () => {
    try {
      const sessionId = localStorage.getItem('sessionId');
      await api.delete(`/cart/clear/${sessionId}`);
      setCart([]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      
      {loading ? (
        <p>Loading cart...</p>
      ) : cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/tests')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Browse Tests
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4 last:border-0">
                <div>
                  <h3 className="font-bold">{item.itemName}</h3>
                  <p className="text-sm text-gray-500">{item.itemType}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">₹{item.price}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold text-blue-600">₹{total}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert('Checkout coming soon!')}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
