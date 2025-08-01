import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaDatabase, FaNpm, FaBootstrap, FaJava,
  FaPhp,
  FaLinux
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus className="text-[#F34B7D]" />, level: 65 },
    { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 80 },
    { name: "Linux", icon: <FaLinux className="text-[#FCC624]" />, level: 65 },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 75 },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 90 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, level: 70 },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 65 },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 55 },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 80 },
    { name: 'NPM', icon: <FaNpm className="text-[#CB3837]" />, level: 85 },
    { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" />, level: 90 },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" />, level: 60 },
    { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, level: 75 },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 57 },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 70 },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Le Mie Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card p-6 flex flex-col items-center"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;