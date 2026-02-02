'use client';

import { motion } from 'framer-motion';
import { PROBLEMS } from '@/lib/constants';

export default function Problem() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {PROBLEMS.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PROBLEMS.items.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-red-500">{problem.stat}</span>
                <p className="text-gray-600 mt-2">{problem.description}</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-red-600">Resultado:</span> {problem.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200">
            <p className="text-2xl font-semibold text-gray-900">
              {PROBLEMS.subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
