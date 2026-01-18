import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * Design: Blue wave background with animated elements
 * - Animated wave background
 * - Main headline and CTA button
 * - Image carousel with 5 placeholder images
 * - RTL-optimized layout
 */
export default function HeroSection() {
  const images = [
    { id: 1, placeholder: 'صورة 1' },
    { id: 2, placeholder: 'صورة 2' },
    { id: 3, placeholder: 'صورة 3' },
    { id: 4, placeholder: 'صورة 4' },
    { id: 5, placeholder: 'صورة 5' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full animate-wave"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main wave gradient */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>

          {/* Wave paths with diagonal pattern */}
          <path
            d="M 0 200 Q 300 100 600 200 T 1200 200 L 1200 0 L 0 0 Z"
            fill="url(#waveGradient)"
            opacity="0.8"
          />
          <path
            d="M 0 300 Q 300 200 600 300 T 1200 300 L 1200 150 Q 600 250 0 150 Z"
            fill="#1e40af"
            opacity="0.6"
          />
          <path
            d="M 0 400 Q 300 350 600 400 T 1200 400 L 1200 250 Q 600 350 0 250 Z"
            fill="#3b82f6"
            opacity="0.4"
          />

          {/* Diagonal stripes pattern */}
          <g opacity="0.15" stroke="#ffffff" strokeWidth="2">
            <line x1="0" y1="0" x2="100" y2="800" />
            <line x1="100" y1="0" x2="200" y2="800" />
            <line x1="200" y1="0" x2="300" y2="800" />
            <line x1="300" y1="0" x2="400" y2="800" />
            <line x1="400" y1="0" x2="500" y2="800" />
            <line x1="500" y1="0" x2="600" y2="800" />
            <line x1="600" y1="0" x2="700" y2="800" />
            <line x1="700" y1="0" x2="800" y2="800" />
            <line x1="800" y1="0" x2="900" y2="800" />
            <line x1="900" y1="0" x2="1000" y2="800" />
            <line x1="1000" y1="0" x2="1100" y2="800" />
            <line x1="1100" y1="0" x2="1200" y2="800" />
          </g>
        </svg>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container flex flex-col items-center justify-center min-h-screen gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            حل واحد، يغطي كل احتياجات عاملينك
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            منصة شاملة لإدارة السكن والنقل والتموين والتأمين
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-lg transition-all duration-300 btn-hover shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ابدأ الآن
        </motion.button>

        {/* Image Gallery */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mt-8"
        >
          <div className="relative">
            {/* Gallery Container */}
            <div className="bg-gradient-to-b from-blue-500/20 to-transparent rounded-3xl p-8 border-2 border-blue-400 border-dashed">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((img, index) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-400 border-dashed bg-gray-300 flex items-center justify-center"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                      <span className="text-white font-bold text-center px-4">
                        {img.placeholder}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative dots around gallery */}
            <div className="absolute -top-4 right-1/4 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            <div className="absolute -top-4 left-1/4 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            <div className="absolute -bottom-4 right-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            <div className="absolute -bottom-4 left-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            <div className="absolute top-1/2 -right-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            <div className="absolute top-1/2 -left-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
