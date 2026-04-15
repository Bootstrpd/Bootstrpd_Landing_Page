import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
};

const LegalLayout = ({ title, subtitle, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 navbar-glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/bootstrpd_favicon.svg" alt="Bootstrpd Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold text-nebula-white">
              <span className="text-nebula-cta font-logo">bootstrpd</span>
            </span>
          </Link>

          <Link to="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="card-nebula mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-nebula-cta mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-nebula-white mb-5">{title}</h1>
            <p className="text-body-large max-w-3xl">{subtitle}</p>
            <p className="mt-6 text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-6">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default LegalLayout;
