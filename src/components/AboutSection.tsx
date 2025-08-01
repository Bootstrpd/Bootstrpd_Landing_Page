import { Users, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Companies Served',
      description: 'From startups to Fortune 500'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Client Satisfaction',
      description: 'Measured by project success'
    },
    {
      icon: Zap,
      number: '3x',
      label: 'Faster Delivery',
      description: 'Compared to traditional consultants'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-headline mb-6">
              About <span className="text-nebula-cta">boorstrpd</span>
            </h2>
            <div className="space-y-6 text-body-large">
              <p>
                We're a team of senior data engineers, ML scientists, and AI specialists 
                who have built data infrastructure at companies like Uber, Airbnb, and Google.
              </p>
              <p>
                Our mission is simple: help fast-growing companies turn their data into 
                competitive advantages without the overhead of building large internal teams.
              </p>
              <p className="text-nebula-primary font-semibold">
                We believe every company should have access to enterprise-grade data 
                capabilities, regardless of their size or stage.
              </p>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-cta"
              >
                Work With Our Team
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-8 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`card-nebula flex items-center space-x-6 animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="p-4 bg-gradient-primary rounded-xl">
                  <stat.icon size={32} className="text-nebula-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-nebula-cta mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;