import { ArrowUpRight, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

type ProjectCardLabels = {
  title: string;
  description: string;
  featured: string;
  liveSoon: string;
  viewCode: string;
  viewLive: string;
};

export function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: ProjectCardLabels;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-24px_var(--accent-glow)] sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(400px_200px_at_50%_-10%,var(--accent-soft),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {labels.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
            {labels.featured}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
        {labels.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <GithubIcon className="size-4" />
          {labels.viewCode}
        </a>

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer noopener"
            className="group/live inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {labels.viewLive}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 rtl:-scale-x-100" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <Clock className="size-3.5" aria-hidden />
            {labels.liveSoon}
          </span>
        )}
      </div>
    </article>
  );
}
