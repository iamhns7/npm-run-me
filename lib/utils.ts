export type ClassValue = string | number | null | false | undefined;

/** Tiny classnames joiner — filters falsy values and joins with a space. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
