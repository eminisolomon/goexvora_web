import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import {
  navItems,
  headerVariants,
  mobileMenuVariants,
  menuItemVariants,
} from '@/constants';
import WaitlistModal from './WaitlistModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl lg:text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                  Go
                </span>
                <span className="text-white">Exvora</span>
                <span className="text-lime-400">.</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-lime-400/10 border border-lime-400/20 rounded-full">
                <BoltIcon className="w-3 h-3 text-lime-400" />
                <span className="text-xs font-medium text-lime-400">Fast</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <motion.button
                        onClick={() => toggleDropdown('features')}
                        whileHover={{ y: -1 }}
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-lime-400 transition-all duration-300 py-2"
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === 'features' ? 'rotate-180' : ''
                          }`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {activeDropdown === 'features' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
                          >
                            <div className="py-2">
                              {item.items?.map((subItem, subIndex) => (
                                <motion.a
                                  key={subIndex}
                                  href={subItem.href}
                                  whileHover={{
                                    x: 4,
                                    backgroundColor: 'rgba(163, 230, 53, 0.1)',
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-lime-400 transition-all duration-200"
                                >
                                  <subItem.icon className="w-4 h-4 text-lime-400" />
                                  {subItem.label}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      whileHover={{ y: -1 }}
                      className={`text-sm font-medium transition-all duration-300 py-2 relative ${
                        item.isActive
                          ? 'text-lime-400'
                          : 'text-gray-300 hover:text-lime-400'
                      }`}
                    >
                      {item.label}
                      {item.isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"
                        />
                      )}
                    </motion.a>
                  )}
                </div>
              ))}
            </nav>

            {/* Waitlist Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={openWaitlistModal}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
              >
                Join Waitlist
              </motion.button>
            </div>

            {/* Mobile CTA and menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                onClick={openWaitlistModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-lime-400 to-emerald-500 text-black text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300 whitespace-nowrap"
              >
                Join Waitlist
              </motion.button>
              <motion.button
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-300 hover:text-lime-400 transition-colors duration-200"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-gray-900/95 backdrop-blur-md border border-gray-800/50 rounded-2xl mx-4 mb-4 shadow-2xl">
                  <div className="py-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={menuItemVariants}
                        transition={{ duration: 0.3 }}
                      >
                        {item.hasDropdown ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown('mobile-features')}
                              className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:text-lime-400 hover:bg-lime-400/5 transition-all duration-200"
                            >
                              <span>{item.label}</span>
                              <ChevronDownIcon
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  activeDropdown === 'mobile-features'
                                    ? 'rotate-180'
                                    : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {activeDropdown === 'mobile-features' && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="bg-gray-800/50 border-t border-gray-700/50"
                                >
                                  {item.items?.map((subItem, subIndex) => (
                                    <motion.a
                                      key={subIndex}
                                      href={subItem.href}
                                      whileHover={{ x: 4 }}
                                      className="flex items-center gap-3 px-8 py-3 text-sm text-gray-400 hover:text-lime-400 hover:bg-lime-400/5 transition-all duration-200"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <subItem.icon className="w-4 h-4 text-lime-400" />
                                      {subItem.label}
                                    </motion.a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <motion.a
                            href={item.href}
                            whileHover={{ x: 4 }}
                            className={`block px-6 py-3 text-sm font-medium transition-all duration-200 ${
                              item.isActive
                                ? 'text-lime-400 bg-lime-400/10 border-r-2 border-lime-400'
                                : 'text-gray-300 hover:text-lime-400 hover:bg-lime-400/5'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </motion.a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Click outside to close dropdown */}
        {activeDropdown && (
          <div
            className="fixed inset-0 z-[-1]"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </motion.header>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </>
  );
};

export default Header;
