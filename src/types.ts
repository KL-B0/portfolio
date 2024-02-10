export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  ogImage?: string;
}

export type SocialObjects = {
  // name: keyof typeof socialIcons;
  name: string;
  href: string;
  linkTitle: string;
}[];