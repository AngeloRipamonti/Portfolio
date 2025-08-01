import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', to: 'hero', offset: -70 },
    { name: 'Chi Sono', to: 'about', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Progetti', to: 'projects', offset: -70 },
    { name: 'Esperienza', to: 'experience', offset: -70 },
    { name: 'Contatti', to: 'contact', offset: -70 },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              activeClass="text-primary font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300"
            aria-label={`Passa al tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300"
            aria-label={`Passa al tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </motion.button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 bg-white dark:bg-dark shadow-lg rounded-b-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 py-2 cursor-pointer"
                activeClass="text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;