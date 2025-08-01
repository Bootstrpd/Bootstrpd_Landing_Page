import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 -left-40 w-80 h-80 bg-nebula-cta/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-nebula-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Headline */}
          <h1 className="text-hero mb-6 animate-fade-in-up">
            Turn Your Data Into
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Competitive Advantage
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-subheadline mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            We help fast-growing companies build data infrastructure, 
            AI solutions, and analytics platforms that scale. 
            <span className="text-nebula-cta font-semibold block mt-2">
              Trusted by 50+ YC companies and Fortune 500 enterprises
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up stagger-2">
            <button 
              onClick={scrollToContact}
              className="btn-cta flex items-center gap-2 group"
            >
              Book a Free Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToServices}
              className="btn-secondary"
            >
              View Our Services
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="animate-fade-in-up stagger-3">
            <p className="text-muted-foreground text-sm mb-4 font-mono">
              POWERING DATA TEAMS AT
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Deroosak</span>
              <span className="text-lg font-semibold">MKmediasolutions</span>

            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="text-muted-foreground hover:text-nebula-cta transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;