import { useState } from 'react';
import { Send, Calendar, Mail, Phone, MapPin, CheckCircle, AlertCircle, Rocket } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState<{
    title: string;
    description: string;
    isError: boolean;
  }>({
    title: '',
    description: '',
    isError: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert form data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || null,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        setAlertData({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          isError: true
        });
        setShowAlert(true);
      } else {
        setAlertData({
          title: "Message sent successfully!",
          description: "We'll get back to you within 48 hours.",
          isError: false
        });
        setShowAlert(true);

        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertData({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        isError: true
      });
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Bootstrpd@gmail.com',
      href: 'mailto:Bootstrpd@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+201157276486',
      href: 'tel:+201157276486'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: null
    },
    {
      icon: Calendar,
      label: 'Response Time',
      value: 'Within 48 hours',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6 animate-fade-in-up">
            Get in <span className="text-nebula-cta">Touch</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Ready to transform your data strategy? Let's discuss your project and explore how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="card-nebula">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-nebula-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground hover:border-accent"
                      placeholder='John Doe'
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-nebula-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground hover:border-accent"
                      placeholder='Acme Corp'
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-nebula-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground hover:border-accent"
                      placeholder='John@acmecorp.com'
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-nebula-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground hover:border-accent"
                      placeholder='+20 XXXXXXXXXX'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-nebula-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground resize-none hover:border-accent"
                    placeholder="Tell us about your data challenges, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cta flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-nebula-bg border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Let's start a conversation</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to build a new data platform, implement AI solutions, 
                  or optimize your existing infrastructure, we're here to help. 
                  Our team typically responds within a few hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="card-nebula">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <info.icon size={20} className="text-nebula-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-nebula-cta hover:text-nebula-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-nebula border-nebula-cta/30">
                <div className="flex items-start gap-3 mb-3">
                  <Rocket className="text-nebula-cta mt-1" size={20} />
                  <h4 className="font-semibold text-nebula-cta">
                    Quick Start Available
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  For urgent projects, we offer expedited onboarding. 
                  Mention "QUICK START" in your message to prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Dialog */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="bg-nebula-bg border border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {alertData.isError ? (
                <AlertCircle className="h-5 w-5 text-destructive" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {alertData.title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              {alertData.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className={alertData.isError ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}
            >
              {alertData.isError ? "Try Again" : "Got it"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default ContactSection;