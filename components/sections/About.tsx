import { useTranslations } from "next-intl";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const t = useTranslations("about");

  const stats = [
    { label: t("stats.focusLabel"), value: t("stats.focusValue") },
    { label: t("stats.companyLabel"), value: t("stats.companyValue") },
    { label: t("stats.mindsetLabel"), value: t("stats.mindsetValue") },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="flex flex-col gap-10">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted text-pretty sm:text-xl sm:leading-relaxed">
              {t("paragraph")}
            </p>
          </Reveal>

          <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <RevealItem
                key={stat.label}
                className="flex flex-col gap-1.5 bg-surface p-5"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </span>
                <span className="font-display text-xl font-semibold text-foreground">
                  {stat.value}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
