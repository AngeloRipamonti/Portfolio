import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: 'Sviluppatore Freelance',
      company: 'Freelance',
      period: 'Maggio 2024 - Presente',
      description: 'Sviluppo di Siti Web.\nSviluppo di Bot per Discord e Telegram.',
      technologies: ['TypeScript', 'Node.js', 'MongoDB', 'MySQL', "Linux", "Git", "SQLite", "HTML", "CSS", "JavaScript"],
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Esperienza Lavorativa
        </motion.h2>

        <div className="relative mt-12">
          {/* Linea temporale verticale */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                {/* Punto sulla timeline (visibile solo su md e superiori) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark"></div>

                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} relative`}>
                  <div className="card p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                      <div className="flex items-center text-primary">
                        <FiBriefcase className="ml-2" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-lg font-medium text-gray-700 dark:text-gray-300">{exp.company}</div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <FiCalendar className="mr-1" /> {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA per CV */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            style={{ "pointer-events": "none" }}
          >
            Scarica il mio CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;