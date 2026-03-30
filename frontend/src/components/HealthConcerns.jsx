import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiHeart, FiDroplet, FiZap } from 'react-icons/fi';

const categories = [
  { name: 'General Health', icon: FiActivity, color: 'from-blue-500 to-blue-600', tests: 150 },
  { name: 'Blood Tests', icon: FiHeart, color: 'from-red-500 to-red-600', tests: 120 },
  { name: 'Kidney & Urine', icon: FiDroplet, color: 'from-emerald-500 to-emerald-600', tests: 80 },
  { name: 'Immunology', icon: FiZap, color: 'from-purple-500 to-purple-600', tests: 90 },
  { name: 'Haematology', icon: FiActivity, color: 'from-orange-500 to-orange-600', tests: 70 },
  { name: 'Pathology', icon: FiHeart, color: 'from-pink-500 to-pink-600', tests: 100 },
  { name: 'Microbiology', icon: FiDroplet, color: 'from-cyan-500 to-cyan-600', tests: 60 },
  { name: 'Molecular Biology', icon: FiZap, color: 'from-teal-500 to-teal-600', tests: 50 },
];

export default function HealthConcerns() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Health Concerns
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find tests based on your health concerns
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all aspect-square flex flex-col items-center justify-center text-center`}>
                  <div className="mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.tests} Tests</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
