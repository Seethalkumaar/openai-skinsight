import React from 'react'
import { motion } from 'framer-motion'

const Technology = () => {
  const techStack = [
    {
      category: 'Frontend',
      tech: ['React Native', 'Expo', 'React Navigation'],
      description: 'Cross-platform mobile app with native camera integration',
    },
    {
      category: 'Backend',
      tech: ['Flask', 'Python', 'RESTful API'],
      description: 'Scalable server architecture with efficient image processing',
    },
    {
      category: 'AI/ML',
      tech: ['TensorFlow', 'EfficientNet', 'OpenCV'],
      description: 'State-of-the-art deep learning models for skin analysis',
    },
    {
      category: 'Infrastructure',
      tech: ['Docker', 'Cloud Run', 'GCS/S3'],
      description: 'Containerized deployment with remote model storage',
    },
  ]

  return (
    <section id="technology" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with modern, scalable technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-primary-100 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3 text-primary-700">{tech.category}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-semibold text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Production Considerations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Warm-up</div>
              <p className="text-primary-100">Model preloading for faster response times</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Caching</div>
              <p className="text-primary-100">Intelligent caching for improved performance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">TF-Lite</div>
              <p className="text-primary-100">Optimized models for on-device inference</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology

