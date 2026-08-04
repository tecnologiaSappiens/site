import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoCTAProps {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  label?: string;
  showArrow?: boolean;
}

export const DemoCTA = ({
  variant = "default",
  size = "default",
  className,
  label = "Agendar demonstração",
  showArrow = false,
}: DemoCTAProps) => {
  return (
    <Button variant={variant} size={size} className={cn(showArrow && "group", className)} asChild>
      <Link href="/demo" aria-label="Agendar uma demonstração da Sappie">
        {label}
        {showArrow && (
          <ArrowRight
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        )}
      </Link>
    </Button>
  );
};
