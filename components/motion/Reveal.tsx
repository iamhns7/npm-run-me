"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Elements we allow as reveal wrappers, pre-bound to motion once at module
 *  scope so no motion component is created during render. */
const motionTags = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

type MotionTag = keyof typeof motionTags;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Render as a different element (e.g. "li", "section"). */
  as?: MotionTag;
};

/** Fade + subtle rise as the element scrolls into view. Motion-safe. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motionTags[as];

  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Container that staggers the reveal of its `RevealItem` children. */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.08,
}: RevealProps & { stagger?: number }) {
  const Tag = motionTags[as];
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motionTags[as];
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
