import { motion } from 'framer-motion';
import { FiPackage, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function PackageCard({ pkg }) {
  const [showTests, setShowTests] = useState(false);
  const discount = pkg.mrp > pkg.price ? Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100) : 0;
  const isPopular = pkg.name.includes('99') || pkg.name.includes('89');

  const handleBook = () => {
    const message = `Hi, I want to book ${pkg.name} package (₹${pkg.price})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Parse includes string into array
  const testsList = pkg.includes ? pkg.includes.split(',').map(t => t.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200 dark:border-purple-700 h-full flex flex-col relative"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          ⭐ POPULAR
        </div>
      )}

      {/* Package Header */}
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-1 text-blue-600 dark:text-blue-400">
          {pkg.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Includes Tests</p>
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
            Save {discount}%
          </span>
        </div>
      )}

      {/* Test List */}
      <div className="mb-4 flex-grow">
        <div className="space-y-2">
          {testsList.slice(0, 4).map((test, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-700 dark:text-gray-300">{test}</span>
            </div>
          ))}
          {testsList.length > 4 && (
            <button
              onClick={() => setShowTests(!showTests)}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              +{testsList.length - 4} more tests
            </button>
          )}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{pkg.price}</span>
          {pkg.mrp > pkg.price && (
            <span className="text-sm text-gray-500 line-through">₹{pkg.mrp}</span>
          )}
        </div>
        <p className="text-xs text-gray-500">MRP: ₹{pkg.mrp} (Incl. of all taxes)</p>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          onClick={handleBook}
          className="w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center justify-center gap-2 font-medium"
        >
          <FaWhatsapp size={18} />
          Book on WhatsApp
        </button>
        <button
          onClick={() => setShowTests(!showTests)}
          className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition text-sm font-medium"
        >
          📋 View Tests Included
        </button>
      </div>

      {/* Tests Modal */}
      {showTests && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowTests(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">{pkg.name} - Tests Included</h3>
            <div className="space-y-2">
              {testsList.map((test, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">{test}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowTests(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
