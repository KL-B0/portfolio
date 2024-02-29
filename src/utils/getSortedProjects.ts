import type { CollectionEntry } from "astro:content";

const getSortedProjects = (projects: CollectionEntry<"projects">[]) => {
  return projects.sort(
    (a, b) => b.data.releaseDate.getTime() - a.data.releaseDate.getTime()
  );
};

export default getSortedProjects;
