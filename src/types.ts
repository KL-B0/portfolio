export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  ogImage?: string;
};

export type MenuItems = {
  name: string;
  url: string;
}[];

export type SocialObjects = {
  icon: string;
  href: string;
  linkTitle: string;
}[];

export type SkillObjects = {
  name: string;
  items: string[];
}[];
