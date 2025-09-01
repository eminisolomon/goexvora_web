import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-9xl font-black tracking-tighter mb-6 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Go Back
        </motion.button>
        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ y: -2 }}
            className="text-gray-400 hover:text-lime-400 transition-colors"
          >
            Home
          </motion.button>
          <span className="text-gray-600">•</span>
          <motion.a
            href="mailto:support@goexvora.com"
            whileHover={{ y: -2 }}
            className="text-gray-400 hover:text-lime-400 transition-colors"
          >
            Contact Support
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
