import {
  generateOgImageForProject,
  generateOgImageForSite,
} from "@utils/generateOgImages";
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const projects = await getCollection("projects").then(project =>
    project.filter(({ data }) => !data.ogImage)
  );

  const paths = projects.map(project => {
    const [lang, ...slug] = project.slug.split("/");
    return {
      params: { lang, slug: slug.join("/") || undefined },
      props: project,
    };
  });

  return [...paths];
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForProject(props as CollectionEntry<"projects">),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
