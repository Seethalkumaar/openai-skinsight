import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: '📸',
      title: 'Mobile-First Design',
      description: 'Native camera integration with web fallback. Works seamlessly on iOS, Android, and web browsers.',
    },
    {
      icon: '🧠',
      title: 'AI-Powered Analysis',
      description: 'Advanced TensorFlow models with EfficientNet backbone for accurate skin type and condition detection.',
    },
    {
      icon: '🌡️',
      title: 'Severity Estimation',
      description: 'Intelligent algorithms estimate the severity of detected conditions to help prioritize care.',
    },
    {
      icon: '🌍',
      title: 'Environmental Context',
      description: 'Real-time UV index and air quality data integrated into assessments for comprehensive insights.',
    },
    {
      icon: '💡',
      title: 'Smart Recommendations',
      description: 'Prioritized suggestions including medication options, lifestyle changes, and environmental protections.',
    },
    {
      icon: '🔒',
      title: 'Privacy Protected',
      description: 'Images processed with explicit consent. Configurable retention policies ensure your data stays private.',
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Optimized image processing pipeline with OpenCV for quick, accurate results.',
    },
    {
      icon: '📊',
      title: 'Risk Ranking',
      description: 'Evidence-based risk assessment that combines AI predictions with environmental factors.',
    },
  ]

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for comprehensive skin health assessment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
