import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const experienceData = [
  {
    company: 'TechData Solutions',
    role: 'Ingeniero de Datos Senior',
    period: '2021 - Presente',
    description: 'Diseño e implementación de pipelines de datos escalables usando Apache Spark y AWS.'
  },
  {
    company: 'DataCraft Analytics',
    role: 'Analista de Datos',
    period: '2019 - 2021',
    description: 'Desarrollo de modelos predictivos y visualización de datos con Python y Machine Learning.'
  },
  {
    company: 'InnovaTech Consulting',
    role: 'Desarrollador de Datos Junior',
    period: '2017 - 2019',
    description: 'Implementación de ETL y mantenimiento de bases de datos corporativas.'
  }
]

const ExperienceTimeline = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-900 to-blue-950"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Experiencia Profesional
      </h2>
      
      <div className="relative border-l-4 border-blue-500">
        {experienceData.map((experience, index) => (
          <motion.div 
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className={cn(
              "ml-8 mb-10 p-6 bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-600",
              "transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            )}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {experience.role}
            </h3>
            <p className="text-blue-300 font-medium mb-2">
              {experience.company} | {experience.period}
            </p>
            <p className="text-gray-300">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ExperienceTimeline