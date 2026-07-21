"use client";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const t = useTranslations("a11y");
  const { resolvedTheme, setTheme } = useTheme();

  // `resolvedTheme` is undefined during SSR and the first client render, so
  // both agree on the Sun icon — no hydration mismatch, no mount flag needed.
  const ready = resolvedTheme !== undefined;
  const isDark = resolvedTheme === "dark";
  const label = isDark ? t("switchToLight") : t("switchToDark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="relative grid size-9 place-items-center rounded-full border border-border bg-surface/60 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Render a stable icon until the theme resolves to avoid a mismatch. */}
      {!ready ? (
        <Sun className="size-4.5" aria-hidden />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid place-items-center"
          >
            {isDark ? (
              <Moon className="size-4.5" aria-hidden />
            ) : (
              <Sun className="size-4.5" aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
