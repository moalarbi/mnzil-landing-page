import { motion } from 'framer-motion';

/**
 * Difference Section Component
 * Design: Features showcase with images and descriptions
 * - Alternating layout (image-text-image)
 * - Feature cards with descriptions
 * - Smooth scroll animations
 */
export default function DifferenceSection() {
  const features = [
    {
      id: 1,
      title: 'السكن الذكي',
      description: 'إدارة سكن العمال بكفاءة عالية مع أنظمة ذكية',
      imagePosition: 'right',
    },
    {
      id: 2,
      title: 'النقل الآمن',
      description: 'خدمات نقل موثوقة وآمنة للموظفين',
      imagePosition: 'left',
    },
    {
      id: 3,
      title: 'التموين المتقدم',
      description: 'تقديم وجبات عالية الجودة بإدارة احترافية',
      imagePosition: 'right',
    },
    {
      id: 4,
      title: 'التأمين الشامل',
      description: 'تغطية تأمينية كاملة لجميع الموظفين',
      imagePosition: 'left',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            لماذا تختار منزل
          </h2>
          <p className="text-lg text-gray-600">
            حلول متكاملة تغطي جميع احتياجات إدارة القوى العاملة
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className={`flex flex-col ${
                feature.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 items-center`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500 shadow-xl">
                  {/* Placeholder Image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg font-semibold">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: feature.imagePosition === 'left' ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Points */}
                <div className="space-y-3">
                  {[1, 2, 3].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        ميزة مهمة {point} للخدمة
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 btn-hover"
                >
                  اعرف المزيد
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
