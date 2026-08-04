import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface Logo {
  name: string;
  logo: StaticImageData;
}

interface LogoBarProps {
  logos: readonly Logo[];
  title?: string;
  className?: string;
}

export const LogoBar = ({ logos, title = "Quem confia na Sappie", className }: LogoBarProps) => {
  return (
    <div className={cn("text-center", className)}>
      {title && (
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
          {title}
        </p>
      )}
      <div
        className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
        role="list"
        aria-label="Parceiros e clientes da Sappie"
      >
        {logos.map((item, index) => (
          <div
            key={item.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            role="listitem"
          >
            <Image
              src={item.logo}
              alt={`Logo ${item.name}`}
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain p-1"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
