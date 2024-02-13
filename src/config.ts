import type { MenuItems, Site, SocialObjects } from "types";

export const SITE: Site = {
  website: "https://lorenzocapalbo.com/",
  author: "Lorenzo Capalbo",
  mail: "capalbo.lorenzo@tutanota.com",
  description: "I design and build software products",
  title: "Lorenzo Capalbo",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const MENU_ITEMS: MenuItems = [
  {
    name: "Projects",
    name_it: "Progetti",
    url: "/projects/",
  },
  {
    name: "Tags",
    name_it: "Tags",
    url: "/tags/",
  },
];

export const SOCIALS: SocialObjects = [
  {
    icon: "lucide:gitlab",
    href: "https://gitlab.com/KL-B0",
    linkTitle: `${SITE.author} on GitLab`,
  },
  {
    icon: "lucide:github",
    href: "https://github.com/KL-B0",
    linkTitle: `${SITE.author} on GitHub`,
  },
  {
    icon: "lucide:linkedin",
    href: "https://www.linkedin.com/in/lorenzo-capalbo-0424b3229/",
    linkTitle: `${SITE.author} on LinkedIn`,
  },
  {
    icon: "lucide:mail",
    href: "mailto:capalbo.lorenzo@tutanota.com",
    linkTitle: `Send an email to ${SITE.author}`,
  },
];
