'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { CONTACT } from '@/lib/constants';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // Replace with your EmailJS credentials in .env.local
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: data.name,
          from_email: data.email,
          whatsapp: data.whatsapp,
          business_type: data.businessType,
          appointment_range: data.appointmentRange,
          message: data.message || 'Sin mensaje adicional',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {CONTACT.title}
          </h2>
          <p className="text-xl text-gray-600">
            {CONTACT.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {CONTACT.form.namePlaceholder} *
              </label>
              <input
                {...register('name', { required: 'El nombre es requerido' })}
                type="text"
                id="name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="Juan Pérez"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle size={14} />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {CONTACT.form.emailPlaceholder} *
              </label>
              <input
                {...register('email', {
                  required: 'El email es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                type="email"
                id="email"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="juan@ejemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle size={14} />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                {CONTACT.form.whatsappPlaceholder} *
              </label>
              <input
                {...register('whatsapp', {
                  required: 'El WhatsApp es requerido',
                  pattern: {
                    value: /^[+]?[\d\s-]{10,}$/,
                    message: 'WhatsApp inválido (incluye código de país)',
                  },
                })}
                type="tel"
                id="whatsapp"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="+52 55 1234 5678"
              />
              {errors.whatsapp && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle size={14} />
                  <span>{errors.whatsapp.message}</span>
                </p>
              )}
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de negocio *
              </label>
              <select
                {...register('businessType', { required: 'Selecciona un tipo de negocio' })}
                id="businessType"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.businessType ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
              >
                <option value="">Selecciona una opción</option>
                {CONTACT.form.businessTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle size={14} />
                  <span>{errors.businessType.message}</span>
                </p>
              )}
            </div>

            {/* Appointment Range */}
            <div>
              <label htmlFor="appointmentRange" className="block text-sm font-medium text-gray-700 mb-2">
                Número de citas mensuales *
              </label>
              <select
                {...register('appointmentRange', { required: 'Selecciona un rango' })}
                id="appointmentRange"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.appointmentRange ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
              >
                <option value="">Selecciona una opción</option>
                {CONTACT.form.appointmentRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              {errors.appointmentRange && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle size={14} />
                  <span>{errors.appointmentRange.message}</span>
                </p>
              )}
            </div>

            {/* Message (optional) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {CONTACT.form.messagePlaceholder}
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Cuéntanos más sobre tus necesidades..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>{CONTACT.form.submitText}</span>
                  <Send size={20} />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl"
              >
                <CheckCircle size={20} />
                <span className="font-medium">¡Mensaje enviado! Te contactaremos pronto.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
              >
                <AlertCircle size={20} />
                <span className="font-medium">Error al enviar. Intenta de nuevo o contáctanos por WhatsApp.</span>
              </motion.div>
            )}
          </form>

          {/* Guarantees */}
          <div className="mt-8 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-4">
            {CONTACT.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{guarantee}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
