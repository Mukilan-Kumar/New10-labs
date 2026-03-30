import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiDroplet } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../services/api';

export default function TestsPage() {
  const [tests, setTests] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTests();
  }, [search]);

  const fetchTests = async () => {
    try {
      const response = await api.get('/tests', { params: { search } });
      setTests(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = (test) => {
    const message = `Hi, I want to book ${test.name} test (₹${test.price})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Diagnostic Tests
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse our comprehensive range of diagnostic tests
          </p>
        </motion.div>

        <div className="mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search tests..."
            className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500 focus:outline-none shadow-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tests.map((test) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="font-bold text-lg mb-3 line-clamp-2 min-h-[56px]">{test.name}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiActivity size={16} className="text-blue-600" />
                    <span>{test.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock size={16} className="text-teal-600" />
                    <span>{test.tat || '24 Hours'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiDroplet size={16} className="text-purple-600" />
                    <span>{test.sampleType || 'Blood'}</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600">₹{test.price}</span>
                    {test.mrp > test.price && (
                      <span className="text-sm text-gray-500 line-through">₹{test.mrp}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleBook(test)}
                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={18} />
                    Book on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
