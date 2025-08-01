import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const getImageStyle = (project) => {
    switch(project.id) {
      case 1: // Wordle
      case 4: // Point Of Interest
        return "p-4";
      case 2: // Track Your Expenses
      case 5: // Portale Appunti
      case 6: // Portfolio Website
        return "p-1";
      default:
        return "p-2";
    }
  };

  const getImageContainerStyle = (project) => {
    switch(project.id) {
      case 6: // Portfolio Website
        return "bg-white dark:bg-gray-900"; 
      case 3: // FMBot
        return "bg-white dark:bg-gray-800";
      case 1: // Wordle
      case 4: // Point Of Interest
        return "bg-gray-50 dark:bg-dark-dark";
      default:
        return "bg-gray-100 dark:bg-dark-dark";
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Wordle',
      description: 'Gioco di parole da indovinare.',
      image: '/src/assets/images/wordleLogo.png',
      technologies: ['C++'],
      category: 'backend',
      github: 'https://github.com/AngeloRipamonti/Wordle',
      demo: null,
    },
    {
      id: 2,
      title: 'Track Your Expenses',
      description: 'Applicazione per tracciare le spese personali.',
      image: '/src/assets/images/tye.png',
      technologies: ['Java', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/AngeloRipamonti/TrackYourExpenses',
      demo: null,
    },
    {
      id: 3,
      title: 'FMBot',
      description: 'Bot per le statistiche delle canzoni.',
      image: '/src/assets/images/fmbot.png',
      technologies: ['Node.js', "SQLite", "last.fm API"],
      category: 'backend',
      github: 'https://github.com/AngeloRipamonti/FMBot',
      demo: null,
    },
    {
      id: 4,
      title: 'Point Of Interest',
      description: 'Website per cercare punti di interesse di Milano o Flensburg.',
      image: '/src/assets/images/POI_Logo.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', "Leaflet API"],
      category: 'frontend',
      github: 'https://github.com/AngeloRipamonti/PointOfInterest',
      demo: "https://progetti.cipiaceinfo.it/poi/erasmus_plus/src/pages/milan/milan.html#milan",
    },
    {
      id: 5,
      title: 'Portale Appunti',
      description: 'Portale per condividere e scrivere appunti.',
      image: '/src/assets/images/mindsharing.png',
      technologies: ['Node.js', 'Socket.io', 'MySQL', "HTML", "CSS", "JavaScript", "Bulma", "Pandoc"],
      category: 'fullstack',
      github: 'https://github.com/AngeloRipamonti/PortaleAppunti',
      demo: null,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Sito web portfolio personale con tema chiaro/scuro e animazioni fluide.',
      image: '/src/assets/images/portfolio.png',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/AngeloRipamonti/Portfolio',
      demo: "portfolio.mind-sharing.it",
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          I Miei Progetti
        </motion.h2>

        {/* Filtri */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === category 
                ? 'bg-primary text-white' 
                : 'bg-white dark:bg-dark text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-light'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Griglia progetti */}
        <motion.div 
          key={filter} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden flex flex-col h-full"
              variants={item}
              whileHover={{ y: -10 }}
            >
              {/* Immagine progetto */}
              <div className={`relative overflow-hidden ${getImageContainerStyle(project)} flex items-center justify-center h-48`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-contain ${getImageStyle(project)} transition-transform duration-500 hover:scale-105`}
                />
              </div>
              
              {/* Contenuto */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                {/* Tecnologie */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-200 dark:bg-dark text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                    >
                      <FiExternalLink className="mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/AngeloRipamonti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center btn-primary"
          >
            <FiCode className="mr-2" /> Vedi altri progetti su GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;