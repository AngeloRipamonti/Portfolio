import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container flex flex-col md:flex-row items-center justify-between">
        {/* Testo e CTA */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">Ciao, sono</span>
            <span className="text-primary block">Angelo Ripamonti</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ogni riga di codice è scritta pensando a chi userà l'app: veloce, semplice, efficace.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={800}
            >
              <motion.button 
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vedi i miei progetti
              </motion.button>
            </Link>
            
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={1000}
            >
              <motion.button 
                className="w-full sm:w-auto bg-transparent border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contattami
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Immagine/Avatar */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white text-6xl font-bold">
              <img src="/src/assets/images/Pfp.png" alt="Angelo Ripamonti" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={800}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scorri giù</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="text-primary" size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;