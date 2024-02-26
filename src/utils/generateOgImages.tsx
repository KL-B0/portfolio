import satori, { type SatoriOptions } from "satori";
import { Resvg } from "@resvg/resvg-js";
import projectOgImage from "./og-templates/project";
import siteOgImage from "./og-templates/site";
import type { CollectionEntry } from "astro:content";

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-serif.regular.ttf"
  );
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-serif.bold.ttf"
  );
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "IBM Plex Serif",
      data: fontRegular,
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Serif",
      data: fontBold,
      weight: 600,
      style: "normal",
    },
  ],
};

function svgBufferToPngBuffer(svg: string) {
  return new Resvg(svg).render().asPng();
}

export async function generateOgImageForProject(
  project: CollectionEntry<"projects">
) {
  return svgBufferToPngBuffer(await satori(projectOgImage(project), options));
}

export async function generateOgImageForSite() {
  return svgBufferToPngBuffer(await satori(siteOgImage(), options));
}
