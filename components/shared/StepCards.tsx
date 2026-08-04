import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  description: string;
}

interface StepCardsProps {
  steps: readonly Step[];
  className?: string;
  ariaLabel?: string;
}

export const StepCards = ({ steps, className, ariaLabel = "Como funciona" }: StepCardsProps) => {
  return (
    <ol
      className={cn(
        "grid gap-8 md:grid-cols-2",
        steps.length === 3 && "lg:grid-cols-3",
        steps.length >= 4 && "lg:grid-cols-4",
        className
      )}
      aria-label={ariaLabel}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span
            className="w-12 h-12 rounded-full bg-primary/10 text-primary font-heading text-xl font-bold flex items-center justify-center mb-6"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <h3 className="font-heading text-xl mb-3">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};
