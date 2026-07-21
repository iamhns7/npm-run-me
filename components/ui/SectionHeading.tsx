import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-2xl font-display text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-base text-muted text-pretty",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
