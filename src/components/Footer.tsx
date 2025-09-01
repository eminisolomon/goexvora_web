import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import {
  ShieldCheckIcon,
  BoltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import ScrollToTop from './ScrollToTop';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden -mt-px">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <motion.div
        className="relative container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main content grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 lg:col-span-1"
          >
            <div className="mb-6">
              <div className="text-4xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                  Go
                </span>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Exvora
                </span>
                <span className="text-lime-400">.</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <BoltIcon className="text-lime-400 w-4 h-4" />
                <p className="text-sm font-medium bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                  Trade Fast. Live Simple.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheckIcon className="text-lime-400 w-5 h-5" />
                <span className="font-semibold text-sm">
                  Trusted by millions
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                GoExvora™ by TechX Innovations Limited delivers secure gift
                card and cryptocurrency trading solutions with seamless money
                transfer capabilities.
              </p>
            </div>
          </motion.div>

          {/* Company section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press Kit', href: '/press' },
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-gray-300 hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: 'Buy Gift Cards',
                  href: '/buy-giftcards',
                  featured: true,
                },
                { label: 'Sell Gift Cards', href: '/sell-giftcards' },
                { label: 'Buy Crypto', href: '/buy-crypto' },
                { label: 'Sell Crypto', href: '/sell-crypto' },
                { label: 'Send Money', href: '/send-money' },
                { label: 'Receive Money', href: '/receive-money' },
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className={`text-sm transition-all duration-300 flex items-center gap-2 group ${
                      item.featured
                        ? 'text-lime-400 font-medium'
                        : 'text-gray-300 hover:text-lime-400'
                    }`}
                  >
                    <span className="w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                    {item.featured && <BoltIcon className="w-3 h-3" />}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Support & Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Notice', href: '/privacy-notice' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Cookies Policy', href: '/cookies-policy' },
                { label: 'Help Center', href: '/help' },
                { label: 'Security', href: '/security' },
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-gray-300 hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact section with social links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h3>

            {/* Contact information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email Support</p>
                  <a
                    href="mailto:support@goexvora.com"
                    className="text-sm text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    support@goexvora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone Support</p>
                  <a
                    href="tel:+2348130690998"
                    className="text-sm text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    +234 813 069 0998
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Office Address</p>
                  <p className="text-sm text-gray-300">Ilorin, Kwara State</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="flex space-x-2 mt-4">
                {[
                  {
                    icon: FaFacebookF,
                    href: 'https://facebook.com',
                    color: 'hover:bg-blue-600',
                    label: 'Facebook',
                  },
                  {
                    icon: FaInstagram,
                    href: 'https://instagram.com',
                    color:
                      'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
                    label: 'Instagram',
                  },
                  {
                    icon: FaTiktok,
                    href: 'https://tiktok.com',
                    color: 'hover:bg-gray-800',
                    label: 'TikTok',
                  },
                  {
                    icon: FaTwitter,
                    href: 'https://x.com',
                    color: 'hover:bg-blue-400',
                    label: 'Twitter',
                  },
                ].map(({ icon: Icon, href, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-1.5 rounded-full bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${color} backdrop-blur-sm group`}
                    aria-label={label}
                  >
                    <Icon className="w-3 h-3 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section with enhanced styling */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gradient-to-r border-gray-700/50 pt-8 mt-8 flex flex-col items-center justify-between gap-4"
        >
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">
              All rights reserved. GoExvora™ is a trademark of{' '}
              <span className="text-lime-400 font-medium">
                TechX Innovations Limited
              </span>
            </p>
            <p className="text-xs text-gray-500">
              © 2025 GoExvora. Unauthorized use prohibited.
            </p>
          </div>

          {/* Back to top button */}
          <ScrollToTop />
        </motion.div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;
