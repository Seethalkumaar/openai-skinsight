import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import Gallery from './components/Gallery'
import Privacy from './components/Privacy'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <HowItWorks />
      <Technology />
      <Gallery />
      <Privacy />
      <Footer />
    </div>
  )
}

export default App

