import { motion } from 'framer-motion';

/**
 * Companies Section Component
 * Design: Circular layout with company logos
 * - Centered heading
 * - Circular arrangement of company placeholders
 * - Smooth animations
 */
export default function CompaniesSection() {
  const companies = [
    { id: 1, name: 'شركة 1', color: 'from-blue-400 to-blue-600' },
    { id: 2, name: 'شركة 2', color: 'from-purple-400 to-purple-600' },
    { id: 3, name: 'شركة 3', color: 'from-pink-400 to-pink-600' },
    { id: 4, name: 'شركة 4', color: 'from-green-400 to-green-600' },
    { id: 5, name: 'شركة 5', color: 'from-yellow-400 to-yellow-600' },
    { id: 6, name: 'شركة 6', color: 'from-red-400 to-red-600' },
    { id: 7, name: 'شركة 7', color: 'from-indigo-400 to-indigo-600' },
    { id: 8, name: 'شركة 8', color: 'from-cyan-400 to-cyan-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  // Calculate circular positions
  const getCirclePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 200;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            شركات رائدة من كل القطاعات...
            <br />
            <span className="text-blue-600">تثق في أداء العمل</span>
          </h2>
        </motion.div>

        {/* Circular Companies Grid */}
        <motion.div
          className="relative w-full h-screen max-h-96 md:max-h-screen flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center CTA Button */}
          <motion.button
            variants={itemVariants}
            className="absolute z-20 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 btn-hover"
            whileHover={{ scale: 1.1 }}
          >
            ابدأ الآن
          </motion.button>

          {/* Companies in Circle */}
          {companies.map((company, index) => {
            const position = getCirclePosition(index, companies.length);
            return (
              <motion.div
                key={company.id}
                variants={itemVariants}
                className="absolute"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold text-center p-4 shadow-lg cursor-pointer transition-all duration-300`}
                >
                  <span className="text-sm md:text-base">{company.name}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
