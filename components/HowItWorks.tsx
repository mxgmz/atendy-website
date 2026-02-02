'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { HOW_IT_WORKS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {HOW_IT_WORKS.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-accent-200 to-secondary-200"></div>

          <div className="space-y-12">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
