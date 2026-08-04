import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  ariaLabelledby?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, containerClassName, ariaLabelledby, children }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20", className)} aria-labelledby={ariaLabelledby}>
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
