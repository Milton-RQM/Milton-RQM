import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: 'https://linkedin.com/in/carlosmartinez',
      bgColor: 'bg-blue-800 hover:bg-blue-700'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: 'https://github.com/carlosmartinez',
      bgColor: 'bg-gray-800 hover:bg-gray-700'
    }
  ]

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV_Carlos_Martinez.pdf'
    link.download = 'CV_Carlos_Martinez.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121224] via-[#1a1a35] to-[#0e0e1e] text-white flex items-center justify-center px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Carlos Martínez
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
          Ingeniero de Datos | Data Science & Analytics
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Transformando datos en insights estratégicos. Especializado en análisis de datos, machine learning y desarrollo de soluciones de inteligencia empresarial.
        </p>
        
        <div className="flex justify-center space-x-6 pt-8">
          <motion.button 
            onClick={downloadCV}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center space-x-2 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Descargar CV</span>
          </motion.button>
          
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${link.bgColor} px-4 py-3 rounded-full transition-all`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Hero