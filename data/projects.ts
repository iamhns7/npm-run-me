export type Project = {
  /** Stable id, also used as the i18n key under `projects.items`. */
  id: string;
  /** Tech stack tags rendered on the card. */
  tech: string[];
  github: string;
  /** Optional live/deployed URL. When omitted a "coming soon" state shows. */
  live?: string;
  /** Marks a card as a highlighted/featured project. */
  featured?: boolean;
};

/**
 * Content for each project's `title` and `description` lives in the message
 * files under `projects.items.<id>`. Add a project here, then add its strings
 * to /messages/{en,tr,ar}.json.
 */
export const projects: Project[] = [
  {
    id: "designSystem",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/iamhns7",
    featured: true,
  },
  {
    id: "dashboard",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/iamhns7",
  },
];
