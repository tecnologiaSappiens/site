import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** CTA buttons and other actions rendered below the subtitle */
  actions?: React.ReactNode;
  /** Media (image, video, placeholder) rendered beside or below the copy */
  media?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  headingId?: string;
}

export const PageHero = ({
  badge,
  title,
  subtitle,
  actions,
  media,
  align = "center",
  className,
  headingId,
}: PageHeroProps) => {
  const centered = align === "center";

  return (
    <section
      className={cn("relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24", className)}
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={cn(
            media
              ? "grid lg:grid-cols-2 gap-12 items-center"
              : cn("max-w-4xl", centered && "mx-auto")
          )}
        >
          <div className={cn("animate-fade-in", centered && !media && "text-center")}>
            {badge && (
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary px-4 py-1.5 text-sm">
                {badge}
              </Badge>
            )}
            <h1 id={headingId} className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className={cn("text-xl text-muted-foreground mb-8 leading-relaxed", centered && !media && "max-w-3xl mx-auto")}>
                {subtitle}
              </p>
            )}
            {actions && (
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-4 items-center",
                  centered && !media && "justify-center"
                )}
              >
                {actions}
              </div>
            )}
          </div>
          {media && <div className="animate-scale-in">{media}</div>}
        </div>
      </div>
    </section>
  );
};
