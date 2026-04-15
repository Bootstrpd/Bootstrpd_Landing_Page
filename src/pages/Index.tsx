import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/bootstrpd_favicon.svg" alt="Bootstrpd Logo" className="w-10 h-10" />
              <span className="text-lg font-semibold text-nebula-white">
                <span className="text-nebula-cta font-logo">bootstrpd</span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-muted-foreground">
              <p>© 2025 <span className="font-logo">bootstrpd</span>. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-nebula-cta transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-nebula-cta transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
