import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <a
            href="#top"
            className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={siteConfig.name}
          >
            <span className="grid size-8 place-items-center rounded-md border border-accent/40 bg-accent-soft font-mono text-sm font-bold text-accent">
              {siteConfig.shortName}
            </span>
            <span className="font-display text-base font-semibold tracking-normal">
              {siteConfig.name}
            </span>
          </a>

          <div className="flex items-center gap-4">
            <SocialLinks />
            <a
              href="#top"
              aria-label={t("a11y.backToTop")}
              title={t("a11y.backToTop")}
              className="grid size-10 place-items-center rounded-full border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <ArrowUp className="size-[18px]" aria-hidden />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("footer.rights")}
          </p>
          <p className="text-xs">{t("footer.builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
