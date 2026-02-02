'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {BENEFITS.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {BENEFITS.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {BENEFITS.items.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center border-2 border-primary-100 hover:border-primary-300 transition-all hover:scale-105"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                {benefit.stat}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.unit}
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <div className="text-6xl md:text-7xl font-bold mb-2">{BENEFITS.roi.value}%</div>
          <p className="text-xl md:text-2xl font-medium">{BENEFITS.roi.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
