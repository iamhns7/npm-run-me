import { useTranslations } from "next-intl";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <RevealItem key={skill.name}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_40px_-20px_var(--accent-glow)]">
                <div
                  className="pointer-events-none absolute -inset-px -z-10 bg-[radial-gradient(120px_80px_at_var(--x,50%)_0%,var(--accent-soft),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {t(`categories.${skill.category}`)}
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-foreground">
                  {skill.name}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
