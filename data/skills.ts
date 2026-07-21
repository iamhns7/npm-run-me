export type Skill = {
  name: string;
  /** Short technical label shown as a mono eyebrow on the tile. */
  category: "language" | "framework" | "styling" | "tooling";
};

export const skills: Skill[] = [
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "HTML / CSS", category: "styling" },
  { name: "Git", category: "tooling" },
  { name: "Framer Motion", category: "tooling" },
];
