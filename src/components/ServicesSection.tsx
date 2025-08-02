import { BarChart3, Bot, Brain, Database } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'Custom analytics dashboards, real-time reporting, and executive-level insights that drive KPI-focused, data-driven decisions across your organization.',
      features: ['Real-Time Web & App Analytics', 'Conversion Funnel Optimization', 'Custom Interactive Dashboards', 'Cross-Platform Data Integration']
    },
    {
      icon: Bot,
      title: 'RAGs & AI Chatbots',
      description: 'Intelligent conversational AI powered by your proprietary data. Build chatbots that understand your business context and provide accurate responses.',
      features: ['Custom RAG Architectures', 'Knowledge Base Integration', 'Context-Aware Chatbot Deployment', 'Enterprise Security']
    },
    {
      icon: Brain,
      title: 'Data Science & ML',
      description: 'From predictive analytics to computer vision, we build and deploy machine learning models that solve your most complex business challenges.',
      features: ['Predictive Modeling & Forecasting', 'NLP & Computer Vision', 'Model Monitoring & Maintainance', 'MLOps Pipelines']
    },
    {
      icon: Database,
      title: 'Data Engineering & Infrastructure',
      description: 'Scalable data pipelines, modern data warehouses, and robust infrastructure that grows with your business needs.',
      features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Cloud Infrastructure', 'Real-Time & Stream Data Processing']
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6 animate-fade-in-up">
            Our <span className="text-nebula-cta">Services</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up stagger-1">
            End-to-end data solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-accent rounded-xl">
                  <service.icon size={32} className="text-nebula-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-nebula-cta transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-nebula-cta rounded-full"></div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;