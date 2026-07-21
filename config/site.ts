export const siteConfig = {
  name: "Hasan Sido",
  shortName: "HS",
  url: "https://hasansido.dev",
  role: "Frontend Engineer",
  // Hasan works at STP, the software company within the larger STH group.
  company: "STP",
  parentCompany: "STH",
  email: "sidohasan63@gmail.com",
  cv: "/cv.pdf",
  socials: {
    github: "https://github.com/iamhns7",
    linkedin: "https://www.linkedin.com/in/hasan-sido-a1822a25a/",
    email: "mailto:sidohasan63@gmail.com",
  },
} as const;

export type NavItem = {
  /** i18n key under `nav` */
  key: "about" | "skills" | "projects" | "contact";
  href: string;
};

export const navItems: NavItem[] = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];
