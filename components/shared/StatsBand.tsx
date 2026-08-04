import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsBandProps {
  stats: readonly Stat[];
  className?: string;
  ariaLabel?: string;
}

export const StatsBand = ({ stats, className, ariaLabel = "Resultados da Sappie" }: StatsBandProps) => {
  return (
    <div
      className={cn(
        "grid gap-6",
        stats.length >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
        stats.length === 3 && "md:grid-cols-3",
        stats.length === 2 && "md:grid-cols-2",
        className
      )}
      role="list"
      aria-label={ariaLabel}
    >
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in"
          style={{ animationDelay: `${index * 0.15}s` }}
          role="listitem"
        >
          <div className="text-5xl sm:text-6xl font-heading primary-text mb-3 font-bold">
            {stat.value}
          </div>
          <p className="text-base text-foreground font-semibold tracking-wide">{stat.label}</p>
          {stat.description && (
            <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
          )}
        </Card>
      ))}
    </div>
  );
};
