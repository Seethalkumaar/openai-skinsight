import React from 'react'
import { motion } from 'framer-motion'

const Overview = () => {
  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">SkinSight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SkinSight is a mobile-first, end-to-end skin diagnosis system that combines 
            AI-powered image analysis with real-time environmental context to provide 
            comprehensive, evidence-backed skin assessments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">How It Works</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Users can upload or capture a selfie using web or native camera. The system 
              guides users to take high-quality images and optionally sign in to save their 
              assessment history.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The image is sent to our Flask API where advanced image processing crops and 
              cleans the image, then runs a TensorFlow classifier with EfficientNet backbone 
              to detect skin type, common conditions, and estimate severity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Environmental Context</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In parallel, the system fetches real-time location data including Air Quality 
              Index (AQI) and UV index from external APIs to enhance the assessment with 
              environmental factors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              A reasoning module fuses image findings with environmental signals to produce 
              ranked risk assessments and prioritized suggestions including medication options, 
              lifestyle changes, and environmental protections.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Key Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="text-xl font-bold mb-2">AI-Powered Analysis</h4>
              <p className="text-primary-100">TensorFlow models with EfficientNet for accurate skin condition detection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-xl font-bold mb-2">Environmental Integration</h4>
              <p className="text-primary-100">Real-time UV index and air quality data for comprehensive insights</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-xl font-bold mb-2">Privacy First</h4>
              <p className="text-primary-100">Explicit consent, configurable retention, and secure processing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Overview
