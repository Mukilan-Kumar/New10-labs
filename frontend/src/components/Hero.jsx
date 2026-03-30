import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiActivity, FiSearch, FiX } from 'react-icons/fi';
import api from '../services/api';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/blood-sample-1.jpg',
    '/blood-sample-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await api.get(`/tests?search=${searchQuery}`);
        setSearchResults(response.data.slice(0, 5));
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-teal-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <FiActivity size={16} />
              <span>India's Trusted Diagnostic Lab</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent">
                Home Collections
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Made Easy</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Book diagnostic tests from the comfort of your home. NABL certified labs, accurate reports, and free home sample collection.
            </p>

            <div className="mb-8 relative">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for tests or packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <FiX size={20} />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {showResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                  >
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => {
                          navigate(`/tests?search=${result.name}`);
                          setSearchQuery('');
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b last:border-0 text-left"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <FiActivity className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 dark:text-white">{result.name}</p>
                          <p className="text-sm text-gray-500">{result.department}</p>
                        </div>
                        <p className="font-bold text-blue-600">₹{result.price}</p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => navigate('/home-visit')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <FiHome /> Book Home Visit
            </button>

            <div className="grid grid-cols-2 gap-6 mt-12 max-w-md">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FiHome className="text-white" size={28} />
                </div>
                <p className="text-sm font-semibold">Home Visit</p>
                <p className="text-xs text-gray-600">Available</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FiActivity className="text-white" size={28} />
                </div>
                <p className="text-sm font-semibold">Chennai</p>
                <p className="text-xs text-gray-600">600102</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Blood Sample Testing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 -left-2 md:top-8 md:-left-4 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 max-w-[160px] md:max-w-[200px] border-2 border-teal-200 dark:border-teal-800"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">Quality Testing</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Accurate Results</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-4 -right-2 md:bottom-8 md:-right-4 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 max-w-[160px] md:max-w-[200px] border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <FiHome size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">Home Visit</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Safe & Convenient</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
