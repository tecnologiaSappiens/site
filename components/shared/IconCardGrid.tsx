import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IconCardGridProps {
  items: readonly IconCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  ariaLabel?: string;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export const IconCardGrid = ({ items, columns = 3, className, ariaLabel }: IconCardGridProps) => {
  return (
    <div className={cn("grid gap-8", columnClasses[columns], className)} role="list" aria-label={ariaLabel}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up rounded-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
            role="listitem"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6" aria-hidden="true">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
};
