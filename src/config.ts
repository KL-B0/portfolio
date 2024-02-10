import type { Site, SocialObjects } from "types";

export const SITE: Site = {
    website:  "https://lorenzocapalbo.com/",
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
        name: "Github",
        href: "https://github.com/KL-B0",
        linkTitle: `${SITE.author} on GitHub`,
    },
    {
        name: "Gitlab",
        href: "https://gitlab.com/KL-B0",
        linkTitle: `${SITE.author} on GitLab`,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/lorenzo-capalbo-0424b3229/",
        linkTitle: `${SITE.author} on LinkedIn`,
    },
    {
        name: "Mail",
        href: "mailto:capalbo.lorenzo@tutanota.com",
        linkTitle: `Send an email to ${SITE.author}`,
    },
]