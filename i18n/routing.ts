import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  tr: "ltr",
  ar: "rtl",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
};
