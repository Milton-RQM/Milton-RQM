import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsGallery = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('Todos');

  const projectsData = [
    {
      title: 'Análisis de Datos COVID-19',
      description: 'Dashboard interactivo con visualizaciones epidemiológicas',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      imageUrl: 'https://images.unsplash.com/photo-1666265745106-9468792c9c74'
    },
    {
      title: 'Predicción de Ventas',
      description: 'Modelo de machine learning para forecasting',
      technologies: ['R', 'TensorFlow', 'Scikit-learn'],
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a8'
    },
    {
      title: 'ETL en Cloud',
      description: 'Pipeline de datos utilizando servicios AWS',
      technologies: ['AWS', 'Spark', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ];

  const technologies = ['Todos', 'Python', 'R', 'AWS', 'TensorFlow', 'Pandas'];

  const filteredProjects = selectedTechnology === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.includes(selectedTechnology)
      );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Proyectos de Ingeniería de Datos
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {technologies.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTechnology(tech)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedTechnology === tech 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsGallery;