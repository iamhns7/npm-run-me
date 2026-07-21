"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { buttonClasses } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 grid-backdrop"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-105 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent-soft),transparent_70%)]"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col items-start px-6"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t("availability")}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm text-accent"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {t("tagline")}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl"
        >
          {t("subline")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 xs:flex-row xs:items-center"
        >
          <a href="#projects" className={buttonClasses({ variant: "primary" })}>
            {t("ctaProjects")}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
          </a>
          <a
            href="#contact"
            className={buttonClasses({ variant: "secondary" })}
          >
            <Mail className="size-4" />
            {t("ctaContact")}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}
