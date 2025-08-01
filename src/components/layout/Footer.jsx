import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/AngeloRipamonti', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/angelo-ripamonti-1912372a3', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, url: 'mailto:angelo.ripamonti.1@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-dark py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Angelo Ripamonti. Tutti i diritti riservati.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;