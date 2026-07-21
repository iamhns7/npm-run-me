import { useTranslations } from "next-intl";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";

export function Contact() {
  const t = useTranslations("contact");

  const channels = [
    {
      label: t("emailLabel"),
      value: siteConfig.email,
      href: siteConfig.socials.email,
      Icon: Mail,
      external: false,
    },
    {
      label: t("githubLabel"),
      value: "iamhns7",
      href: siteConfig.socials.github,
      Icon: GithubIcon,
      external: true,
    },
    {
      label: t("linkedinLabel"),
      value: "Hasan Sido",
      href: siteConfig.socials.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg text-muted text-pretty">
              {t("paragraph")}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={siteConfig.cv}
              download
              className={buttonClasses({ variant: "primary", className: "w-fit" })}
            >
              <Download className="size-4" />
              {t("downloadCv")}
              <span className="font-mono text-xs opacity-70">
                {t("cvNote")}
              </span>
            </a>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col gap-3">
          {channels.map(({ label, value, href, Icon, external }) => (
            <RevealItem key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_16px_40px_-24px_var(--accent-glow)]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/50">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {label}
                  </span>
                  <span className="truncate font-medium text-foreground">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="ms-auto size-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent rtl:-scale-x-100" />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
