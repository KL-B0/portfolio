function color(variableName) {
  return `var(${variableName})`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: color("--color-text-base"),
          accent: color("--color-accent"),
          inverted: color("--color-card"),
        },
      },
      backgroundColor: {
        skin: {
          fill: color("--color-fill"),
          accent: color("--color-accent"),
          inverted: color("--color-text-base"),
          card: color("--color-card"),
          "card-muted": color("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: color("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: color("--color-border"),
          fill: color("--color-text-base"),
          accent: color("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: color("--color-text-base"),
          accent: color("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        serif: ["IBM Plex Serif", "serif"],
      },

      gridTemplateColumns: {
        'journey': 'max-content 1fr',
        'journey-md': '1fr max-content 1fr'
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
