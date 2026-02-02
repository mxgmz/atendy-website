'use client';

import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {INDUSTRIES.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {INDUSTRIES.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.items.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
