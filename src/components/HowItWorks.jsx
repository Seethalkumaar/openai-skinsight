import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Capture or Upload',
      description: 'Take a clear selfie using your device camera or upload an existing photo. The system guides you for optimal image quality.',
    },
    {
      number: '02',
      title: 'Image Processing',
      description: 'Server logic crops and cleans the image using OpenCV or lightweight detectors, then preprocesses it for analysis.',
    },
    {
      number: '03',
      title: 'AI Analysis',
      description: 'TensorFlow classifier with EfficientNet backbone detects skin type, common conditions, and estimates severity.',
    },
    {
      number: '04',
      title: 'Environmental Data',
      description: 'Real-time location data provides UV index and air quality information to enhance the assessment.',
    },
    {
      number: '05',
      title: 'Reasoning & Fusion',
      description: 'Deterministic rules with optional LLM templating fuse image findings with environmental signals.',
    },
    {
      number: '06',
      title: 'Get Results',
      description: 'Receive ranked risk assessment, prioritized suggestions, and actionable recommendations.',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and accurate skin assessment in six steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-primary-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-primary-200">{step.number}</div>
                  <div className="h-1 flex-1 bg-primary-200"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
