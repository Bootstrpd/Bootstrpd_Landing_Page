import { useState, useEffect } from 'react';
import { Menu, X, Settings, Code, GitBranch, Users, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services', icon: Settings },
    { label: 'Stack', id: 'stack', icon: Code },
    { label: 'Process', id: 'process', icon: GitBranch },
    { label: 'About Us', id: 'about', icon: Users },
    { label: 'Get in Touch', id: 'contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-glass shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
                <img src="/bootstrpd_favicon.svg" alt="Bootstrpd Logo" className="w-10 h-10" />
              <span className="text-xl font-semibold text-nebula-white">
                <span className="text-nebula-cta font-logo">bootstrpd</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn-ghost flex items-center space-x-2"
                >
                  <IconComponent size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-nebula-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 bg-nebula-bg/95 backdrop-blur-lg rounded-lg">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 px-4 text-nebula-white hover:text-nebula-cta transition-colors flex items-center space-x-3"
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;