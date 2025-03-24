import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const certifications = [
  {
    title: 'Certificación en Ciencia de Datos',
    institution: 'Google Data Academy',
    date: '2022',
    skills: ['Python', 'Machine Learning', 'Análisis de Datos']
  },
  {
    title: 'Certificación Avanzada en Big Data',
    institution: 'Microsoft Professional',
    date: '2023',
    skills: ['Spark', 'Cloud Computing', 'SQL']
  },
  {
    title: 'Especialista en Inteligencia Artificial',
    institution: 'IBM DataCert',
    date: '2021',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow']
  }
]

const CertificationsSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Mis Certificaciones
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "bg-gray-800 p-6 rounded-xl shadow-2xl border border-blue-600/20 hover:border-cyan-400/40 transition-all duration-300",
                "transform hover:rotate-2 hover:shadow-2xl"
              )}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-4">{cert.institution}</p>
                <div className="text-sm text-gray-500 mb-4">{cert.date}</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-blue-900/50 text-cyan-200 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default CertificationsSection