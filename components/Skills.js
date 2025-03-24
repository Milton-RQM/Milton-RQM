import React from 'react'
import { motion } from 'framer-motion'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)

const Skills = () => {
  const skillsData = {
    labels: [
      'Python', 
      'SQL', 
      'Machine Learning', 
      'Apache Spark', 
      'Power BI', 
      'Docker', 
      'AWS', 
      'Data Visualization'
    ],
    datasets: [{
      label: 'Nivel de Habilidades',
      data: [85, 90, 75, 80, 85, 70, 75, 85],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2
    }]
  }

  const chartOptions = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center py-16 px-4"
    >
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
        >
          Habilidades Técnicas
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          >
            <Radar data={skillsData} options={chartOptions} />
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white space-y-6"
          >
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-400">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <p className="text-xl">Experto en análisis de datos y visualización</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-400">
                <path d="M3 3v18h18"/>
                <path d="M18 17l-5-5-5 5V7l5 5 5-5z"/>
              </svg>
              <p className="text-xl">Desarrollo de soluciones de Machine Learning</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-400">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
              <p className="text-xl">Arquitectura de datos escalable</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills