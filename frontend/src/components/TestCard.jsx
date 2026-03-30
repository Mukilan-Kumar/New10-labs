import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiDroplet } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function TestCard({ test }) {
  const discount = test.mrp > test.price ? Math.round(((test.mrp - test.price) / test.mrp) * 100) : 0;

  const handleBook = () => {
    const message = `Hi, I want to book ${test.name} test (₹${test.price})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 relative"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
          {discount}% OFF
        </div>
      )}

      {/* Test Name */}
      <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white line-clamp-2 min-h-[48px]">
        {test.name}
      </h3>

      {/* Test Details */}
      <div className="space-y-2 mb-4 text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <FiActivity size={14} className="text-blue-600" />
          <span>1 Parameters</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock size={14} className="text-teal-600" />
          <span>{test.tat || '1 Day'}</span>
        </div>
      </div>

      {/* Fasting Badge */}
      {test.fastingRequired && (
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
            Fasting Required
          </span>
        </div>
      )}

      {/* Pricing */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{test.price}</span>
          {test.mrp > test.price && (
            <span className="text-sm text-gray-500 line-through">₹{test.mrp}</span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">MRP: ₹{test.mrp} (Incl. of all taxes)</p>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBook}
        className="w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center justify-center gap-2 font-medium"
      >
        <FaWhatsapp size={18} />
        Book on WhatsApp
      </button>
    </motion.div>
  );
}
