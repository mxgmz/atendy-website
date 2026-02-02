'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { HERO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-accent-200/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span>Automatización con IA avanzada</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {HERO.headline}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {HERO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>{HERO.cta1}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>

              <button className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center space-x-2">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>{HERO.cta2}</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 estrellas</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50+ negocios activos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent-300/30 rounded-full blur-3xl"></div>

              {/* WhatsApp mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Atendy Bot</h3>
                    <p className="text-sm text-green-500">● En línea</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  {/* Cliente message */}
                  <div className="flex justify-end">
                    <div className="bg-primary-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-sm">¿Tienen disponibilidad para mañana?</p>
                      <p className="text-xs opacity-75 mt-1">10:30 AM</p>
                    </div>
                  </div>

                  {/* Bot typing */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Bot response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-900">¡Sí! Tenemos disponibilidad a las 10:00 AM y 2:00 PM. ¿Cuál prefieres?</p>
                      <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </motion.div>

                  {/* Cliente response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-sm">Las 2 PM por favor</p>
                      <p className="text-xs opacity-75 mt-1">10:31 AM</p>
                    </div>
                  </motion.div>

                  {/* Bot confirmation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-green-50 border border-green-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-900">✅ ¡Listo! Tu cita está agendada para mañana a las 2:00 PM. Te enviaré un recordatorio 2 horas antes.</p>
                      <p className="text-xs text-gray-500 mt-1">10:31 AM</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
