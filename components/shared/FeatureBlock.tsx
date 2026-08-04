import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureMedia =
  | { type: "video"; src: string; poster?: string; alt: string }
  | { type: "image"; src: StaticImageData | string; alt: string }
  | { type: "placeholder"; alt: string; icon?: LucideIcon };

interface FeatureBlockProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  bullets?: readonly string[];
  media: FeatureMedia;
  /** Render media on the left instead of the right */
  reverse?: boolean;
  cta?: React.ReactNode;
  id?: string;
  className?: string;
}

const FeatureMediaFrame = ({ media }: { media: FeatureMedia }) => {
  if (media.type === "video") {
    return (
      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-card/50">
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto"
          aria-label={media.alt}
        />
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-card/50">
        <Image src={media.src} alt={media.alt} className="w-full h-auto" loading="lazy" />
      </div>
    );
  }

  // Deliberate-looking frame while real app screenshots aren't available yet;
  // swapping to a screenshot is a data-only change (type: "image").
  const Icon = media.icon;
  return (
    <div
      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-gradient-to-br from-secondary/60 via-card to-background"
      role="img"
      aria-label={media.alt}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-card/80 border-b border-primary/10 flex items-center gap-1.5 px-4" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/25" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/15" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pt-8" aria-hidden="true">
        {Icon && (
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        )}
        <div className="w-2/3 space-y-2">
          <div className="h-3 rounded-full bg-primary/20" />
          <div className="h-3 rounded-full bg-primary/10 w-4/5 mx-auto" />
          <div className="h-3 rounded-full bg-primary/10 w-3/5 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export const FeatureBlock = ({
  eyebrow,
  title,
  description,
  bullets,
  media,
  reverse = false,
  cta,
  id,
  className,
}: FeatureBlockProps) => {
  return (
    <div id={id} className={cn("grid lg:grid-cols-2 gap-12 items-center scroll-mt-24", className)}>
      <div className={cn("animate-fade-in", reverse && "lg:order-2")}>
        {eyebrow && (
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">{eyebrow}</p>
        )}
        <h3 className="font-heading text-3xl sm:text-4xl mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-3 mb-6">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {cta}
      </div>
      <div className={cn("animate-scale-in", reverse && "lg:order-1")}>
        <FeatureMediaFrame media={media} />
      </div>
    </div>
  );
};
