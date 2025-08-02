import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechStackSection = () => {
  // Helper function to get icon path
  const getTechIcon = (techName: string) => {
    const iconName = techName.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
    return `src/assets/${iconName}.svg`;
  };

const techStack = {
  'Analytics & Visualization': [
    'Power BI', 'GA4', 'GTM', 'Streamlit', 'Plotly'
  ],
  'AI & LLMs': [
    'LangChain', 'Ollama',"FastAPI", 'Hugging Face', 'Chroma', "Pinecone", "qdrant"
  ],
  'Cloud & Infrastructure': [
    'AWS', 'Google Cloud', 'Azure', 'Snowflake'
  ],
  'Databases': [
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase'
  ],
  'Machine Learning': [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'MLflow'
  ],
  'Data Engineering': [
    'Python', 'Apache Airflow', 'Apache Kafka', 'Docker', 'Kubernetes'
  ]
};


  const categories = Object.keys(techStack);

  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6 animate-fade-in-up">
            Our <span className="text-nebula-cta">Tech Stack</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up stagger-1">
            We work with cutting-edge technologies to deliver robust, scalable solutions
          </p>
        </div>

        {/* Tech Categories Tabs */}
        <div className="animate-fade-in-up stagger-2">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 gap-1 h-auto min-h-[3rem] md:h-12">
              {categories.map((category) => {
                // Shorten the text for better fit
                const shortName = category
                  .replace('Data Engineering', 'Data Engineering')
                  .replace('Machine Learning', 'ML')
                  .replace('Cloud & Infrastructure', 'Cloud')
                  .replace('Analytics & Visualization', 'Analytics')
                  .replace('AI & LLMs', 'AI/LLMs');
                
                return (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="text-xs md:text-sm font-mono min-w-0 px-2 md:px-4 py-2 md:py-2.5"
                  >
                    {shortName}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {techStack[category as keyof typeof techStack].map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="tech-pill flex items-center gap-2"
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      <img 
                        src={getTechIcon(tech)} 
                        alt={`${tech} icon`}
                        className="w-4 h-4"
                        onError={(e) => {
                          // Hide the image if it doesn't exist
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {tech}
                    </span>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up stagger-4">
          <p className="text-muted-foreground mb-6">
            Don't see your preferred technology? We adapt to your existing stack.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Discuss Your Tech Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;