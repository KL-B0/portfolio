import type { Site, SocialObjects } from "types";

export const SITE: Site = {
  website: "https://lorenzocapalbo.com/",
  author: "Lorenzo Capalbo",
  description: "I design and build software products",
  title: "Lorenzo Capalbo",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const SOCIALS: SocialObjects = [
  {
    icon: "github",
    href: "https://github.com/KL-B0",
    linkTitle: `${SITE.author} on GitHub`,
  },
  {
    icon: "gitlab",
    href: "https://gitlab.com/KL-B0",
    linkTitle: `${SITE.author} on GitLab`,
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/lorenzo-capalbo-0424b3229/",
    linkTitle: `${SITE.author} on LinkedIn`,
  },
  {
    icon: "mail",
    href: "mailto:capalbo.lorenzo@tutanota.com",
    linkTitle: `Send an email to ${SITE.author}`,
  },
];
