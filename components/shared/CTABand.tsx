interface CTABandProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** CTA buttons (e.g. DemoCTA + WhatsApp link) */
  children: React.ReactNode;
  id?: string;
}

export const CTABand = ({ title, subtitle, children, id = "cta" }: CTABandProps) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden" aria-labelledby={`${id}-heading`}>
      <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 id={`${id}-heading`} className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center" aria-label="Ações principais">
            {children}
          </nav>
        </div>
      </div>
    </section>
  );
};
