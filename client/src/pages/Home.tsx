import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompaniesSection from '@/components/CompaniesSection';
import DifferenceSection from '@/components/DifferenceSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Landing Page
 * Design: Modern landing page with animated sections
 * - Fixed header with navigation
 * - Hero section with wave animation
 * - Companies showcase
 * - Features/Differences section
 * - Footer with links and social
 * 
 * RTL Support: All sections are optimized for right-to-left layout
 */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Companies Section */}
      <CompaniesSection />

      {/* Difference Section */}
      <DifferenceSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
