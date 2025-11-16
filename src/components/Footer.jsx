import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SkinSight</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered skin diagnosis with environmental context. Your personal dermatology assistant.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Technology
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy & Safety
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Medical Disclaimer
              </li>
              <li className="text-gray-400 text-sm">
                Triage Aid Only
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SkinSight. All rights reserved. This is a presentation showcase.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

