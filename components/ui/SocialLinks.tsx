import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { key: "socialGithub", href: siteConfig.socials.github, Icon: GithubIcon },
  {
    key: "socialLinkedin",
    href: siteConfig.socials.linkedin,
    Icon: LinkedinIcon,
  },
  { key: "socialEmail", href: siteConfig.socials.email, Icon: Mail },
] as const;

export function SocialLinks({ className }: { className?: string }) {
  const t = useTranslations("a11y");

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ key, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={key}>
            <a
              href={href}
              aria-label={t(key)}
              title={t(key)}
              {...(external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="group grid size-10 place-items-center rounded-full border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_-10px_var(--accent-glow)]"
            >
              <Icon className="size-4.5" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
