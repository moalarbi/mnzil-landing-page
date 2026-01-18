import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Design: Blue-themed header with RTL support
 * - Fixed navigation with logo and menu items
 * - Responsive mobile menu
 * - CTA buttons for login and signup
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'الخدمات', href: '#services' },
    { label: 'الشركة', href: '#company' },
    { label: 'المساعدة', href: '#help' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            م
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:inline">منزل</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language Toggle */}
          <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-lg">🌐</span>
          </button>

          {/* Login Button */}
          <button className="hidden sm:block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
            تسجيل الدخول
          </button>

          {/* Sign Up Button */}
          <button className="hidden sm:block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors btn-hover">
            ابدأ الآن
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button className="flex-1 px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                تسجيل الدخول
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                ابدأ الآن
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
