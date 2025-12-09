import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, Brain, Briefcase, User, Phone, FileText } from 'lucide-react';

const Header = ({ setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'ai-integration', label: 'AI Tools', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-2 text-primary cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={32} />
            <span className="text-xl font-bold text-white">Payal Balotra</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                  onClick={() => setView('resume')}
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </button>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-darker border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className="flex items-center gap-3 text-gray-300 w-full p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                className="flex items-center gap-3 text-primary w-full p-2 hover:bg-gray-800 rounded-lg transition-colors font-semibold"
                onClick={() => {
                  setView('resume');
                  setIsMenuOpen(false);
                }}
              >
                <FileText size={20} />
                <span>View Resume</span>
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 