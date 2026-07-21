import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the `middleware` convention to `proxy`. next-intl still
// ships its handler under `next-intl/middleware`; we simply mount it here.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for static assets, API routes and Next internals.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
