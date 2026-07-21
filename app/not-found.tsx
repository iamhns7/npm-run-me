import Link from "next/link";
import { routing } from "@/i18n/routing";
import { fontVariables } from "./fonts";
import "./globals.css";

// Rendered for requests that never matched a `[locale]` segment. It must ship
// its own <html>/<body> because it renders outside the locale layout.
export default function GlobalNotFound() {
  return (
    <html lang={routing.defaultLocale} className={fontVariables}>
      <body className="grid min-h-dvh place-items-center px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            404
          </span>
          <h1 className="max-w-md font-display text-3xl font-bold tracking-tight sm:text-4xl">
            This page wandered off.
          </h1>
          <p className="max-w-sm text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
