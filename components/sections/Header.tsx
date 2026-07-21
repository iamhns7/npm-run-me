"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { navItems } from "@/config/site";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={siteConfig.name}
        >
          <span className="grid size-8 place-items-center rounded-md border border-accent/40 bg-accent-soft font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent">
            {siteConfig.shortName}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <nav
          aria-label={t("a11y.primaryNav")}
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t(`nav.${item.key}`)}
              <span className="absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-full border border-border bg-surface/60 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {menuOpen ? (
              <X className="size-[18px]" aria-hidden />
            ) : (
              <Menu className="size-[18px]" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav
              aria-label={t("a11y.primaryNav")}
              className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface hover:text-accent"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 border-t border-border pt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
