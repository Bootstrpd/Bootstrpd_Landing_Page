import { Search, FileText, Rocket, RefreshCw } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery',
      description: 'We start with a comprehensive analysis of your current data landscape, business objectives, and technical requirements.',
      duration: 'First Meeting',
      deliverables: ['Technical Audit', 'Requirements Doc', 'Architecture Plan']
    },
    {
      icon: FileText,
      number: '02',
      title: 'Proposal',
      description: 'Based on our findings, we create a detailed proposal with timeline, milestones, and clear success metrics.',
      duration: '3-5 days',
      deliverables: ['Project Proposal', 'Timeline & Milestones', 'Success Metrics']
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Delivery',
      description: 'Our team executes the project with regular check-ins, transparent progress tracking, and iterative feedback.',
      duration: '2-6 weeks',
      deliverables: ['MVP Delivery', 'Documentation', 'Training Materials']
    },
    {
      icon: RefreshCw,
      number: '04',
      title: 'Iteration',
      description: 'We provide ongoing support, optimization, and feature enhancements based on user feedback and business needs.',
      duration: 'Ongoing',
      deliverables: ['Performance Optimization', 'Feature Updates', 'Support & Maintenance']
    }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6 animate-fade-in-up">
            Our <span className="text-nebula-cta">Process</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up stagger-1">
            A proven methodology that ensures successful project delivery and long-term value
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-px bg-gradient-to-r from-nebula-accent to-transparent z-0"></div>
              )}
              
              <div className="card-service group relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-gradient-accent rounded-xl mb-2">
                      <step.icon size={32} className="text-nebula-white" />
                    </div>
                    <span className="text-2xl font-bold text-nebula-cta font-mono">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-nebula-cta transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm font-mono text-nebula-primary px-3 py-1 bg-nebula-primary/10 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Deliverables:
                      </h4>
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-nebula-cta rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up stagger-4">
          <p className="text-muted-foreground mb-6">
            Ready to start your data transformation journey?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cta"
          >
            Begin Discovery Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;