import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="grid min-h-dvh place-items-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          404
        </span>
        <h1 className="max-w-md font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="max-w-sm text-muted text-pretty">{t("description")}</p>
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
