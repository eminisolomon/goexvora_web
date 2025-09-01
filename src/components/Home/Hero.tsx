import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
    },
  };

  const features = [
    { icon: BoltIcon, text: 'Instant Transfers' },
    { icon: ShieldCheckIcon, text: 'Bank-Level Security' },
    { icon: CheckCircleIcon, text: 'Zero Hidden Fees' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Interactive cursor glow */}
        <motion.div
          className="absolute w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 pt-24 lg:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]"
        >
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-6">
                <BoltIcon className="w-4 h-4 text-lime-400" />
                <span className="text-sm font-medium text-lime-400">
                  Coming Soon
                </span>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Buy & Sell
                </span>
                <br />
                <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Gift Cards & Crypto
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  At Best Rates
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Trade gift cards and cryptocurrencies instantly at the best market
              rates.
              <span className="text-lime-400 font-medium">
                {' '}
                Fast. Secure. Reliable.
              </span>
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-3 mb-8 md:flex md:flex-wrap md:gap-6 md:justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center justify-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full backdrop-blur-sm ${
                    index === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <feature.icon className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* App store buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-black border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 group shadow hover:shadow-md"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                    Download on the
                  </div>
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-black border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 group shadow hover:shadow-md"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                    Get it on
                  </div>
                  <div className="text-sm font-bold text-white">
                    Google Play
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Spacer for consistent layout */}
            <div className="h-6"></div>
          </div>

          {/* Right side - Image/Phone mockup */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative hidden md:flex justify-center lg:justify-end"
          >
            {/* Floating phone mockup */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="relative h-full bg-gradient-to-br from-lime-50 to-emerald-50">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-black text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>

                    {/* App interface mockup */}
                    <div className="px-6 py-4">
                      {/* Logo in app */}
                      <div className="text-center mb-8">
                        <div className="text-3xl font-black">
                          <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                            Go
                          </span>
                          <span className="text-gray-800">Exvora</span>
                          <span className="text-lime-500">.</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Pay Fast. Live Simple.
                        </p>
                      </div>

                      {/* Balance card */}
                      <div className="bg-gradient-to-r from-lime-400 to-emerald-400 rounded-2xl p-6 mb-6 shadow-lg">
                        <div className="text-black/70 text-sm mb-1">
                          Available Balance
                        </div>
                        <div className="text-2xl font-bold text-black">
                          ₦125,450.00
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-black/70 text-xs">
                            Account Active
                          </span>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                          <BoltIcon className="w-6 h-6 text-lime-600 mx-auto mb-2" />
                          <div className="text-xs font-medium text-gray-700">
                            Send Money
                          </div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                          <CheckCircleIcon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                          <div className="text-xs font-medium text-gray-700">
                            Pay Bills
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2.5rem] pointer-events-none"></div>
                </div>

                {/* Phone highlights */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-gray-600 rounded-full"></div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="hidden md:flex absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 rounded-full border border-lime-400/30 items-center justify-center backdrop-blur-sm"
              >
                <BoltIcon className="w-6 h-6 text-lime-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="hidden md:flex absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full border border-emerald-400/30 items-center justify-center backdrop-blur-sm"
              >
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center pb-16 lg:pb-24"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Be Among the First to Experience
              </span>
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                GoExvora
              </span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of early adopters who are revolutionizing how they
              handle money. Get exclusive access when we launch.
            </p>

            {/* Waitlist form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-lime-400/25 transition-all duration-300"
              >
                Join Waitlist
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-lime-400" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                <span>CBN Licensed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
