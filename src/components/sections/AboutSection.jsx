import { motion } from 'framer-motion';
import { FiUser, FiBook, FiCode } from 'react-icons/fi';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Chi Sono
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Immagine o illustrazione */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary/80 to-blue-700/80 flex items-center justify-center p-10">
              <img src="/Pfp.png" alt="Angelo Ripamonti" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Testo */}
          <div className="space-y-6">
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Sono un appassionato di informatica e tecnologia, con buone conoscenze in sviluppo software, reti e sistemi, e diplomato con buoni voti presso l'Istituto Molinari. Mi interessa approfondire le mie competenze nell'ambito della programmazione, con l'obbiettivo di proseguire gli studi universitari nella facoltà di informatica.
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiBook className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Formazione</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Diploma di Perito Informatico presso ITT E. Molinari, 2020-2025.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiCode className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Competenze</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Sviluppatore con una solida base in informatica e una forte passione per il codice ben scritto. Mi occupo di progettazione, sviluppo e manutenzione di applicazioni web e/o software.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Il codice è come l'umorismo. Quando lo devi spiegare, è brutto." - Cory House
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;