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
  icon: string;
}[];

export type SocialObjects = {
  icon: string;
  href: string;
  linkTitle: string;
}[];

