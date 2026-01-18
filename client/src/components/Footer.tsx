import { Facebook, Instagram, Linkedin, Twitter, Music } from 'lucide-react';

/**
 * Footer Component
 * Design: Dark footer with multiple sections
 * - Company info and links
 * - Social media links
 * - Newsletter subscription
 * - RTL-optimized layout
 */
export default function Footer() {
  const footerSections = [
    {
      title: 'الخدمات',
      links: ['السكن', 'النقل', 'التموين', 'التأمين'],
    },
    {
      title: 'الشركة',
      links: ['عن منزل', 'الأخبار الصحفية', 'الوظائف', 'المدونة'],
    },
    {
      title: 'المساعدة',
      links: ['الأسئلة الشائعة', 'تواصل معنا', 'الشروط والأحكام', 'سياسة الخصوصية'],
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Music, label: 'TikTok', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                م
              </div>
              <span className="text-2xl font-bold">منزل</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              منصة شاملة لإدارة احتياجات العمال والموظفين بكفاءة عالية
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                اشترك في نشرتنا البريدية
              </h3>
              <p className="text-blue-100">
                احصل على آخر الأخبار والعروض مباشرة في بريدك الإلكتروني
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 md:flex-none px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 منزل - جميع الحقوق محفوظة
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              الشروط والأحكام
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              سياسة الإلغاء
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
