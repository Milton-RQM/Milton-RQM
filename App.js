import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProjectsGallery from '../pages/ProjectsGallery';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import CertificationsSection from '../components/CertificationsSection';
import ContactForm from '../components/ContactForm';

function App() {
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-700 text-white"
      >
        <NavBar />
        
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 space-y-16">
              <Hero />
              <Skills />
              <ProjectsGallery />
              <ExperienceTimeline />
              <CertificationsSection />
              <ContactForm />
            </div>
          } />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;