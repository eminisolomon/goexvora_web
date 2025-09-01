import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-gradient-to-r from-lime-400 to-emerald-400 text-black rounded-full shadow-lg hover:shadow-lime-400/25 transition-all duration-300 group"
      aria-label="Back to top"
    >
      <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
    </motion.button>
  );
};

export default ScrollToTop;
