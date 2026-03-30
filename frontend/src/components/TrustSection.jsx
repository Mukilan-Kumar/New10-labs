import { motion } from 'framer-motion';

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional healthcare services at your doorstep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-6xl">
              🏠
            </div>
            <h3 className="text-xl font-bold mb-2">Home Sample Collection</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Trained phlebotomists collect samples at your convenience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-6xl">
              🔬
            </div>
            <h3 className="text-xl font-bold mb-2">Advanced Lab Testing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              State-of-the-art equipment for accurate results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center text-6xl">
              📱
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Reports</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Get reports instantly on your phone or email
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-6xl">
              👨‍⚕️
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Discuss results with qualified healthcare professionals
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
