import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export function Projects() {
  const t = useTranslations("projects");
  type ProjectKey = Parameters<typeof t>[0];

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.id} className="h-full">
              <ProjectCard
                project={project}
                labels={{
                  title: t(`items.${project.id}.title` as ProjectKey),
                  description: t(
                    `items.${project.id}.description` as ProjectKey,
                  ),
                  featured: t("featured"),
                  liveSoon: t("liveSoon"),
                  viewCode: t("viewCode"),
                  viewLive: t("viewLive"),
                }}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            github.com/iamhns7
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
