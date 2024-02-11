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
          inverted: color("--color-fill"),
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
        mono: ["IBM Plex Mono", "monospace"],
      },

      gridTemplateColumns: {
        'journey': 'max-content 1fr',
        'journey-md': '1fr max-content 1fr'
      },
      boxShadow: {
        'menu': '0 -1px 20px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'menu': '-20rem',
      },
      transitionDelay: {
        '1200': '1200ms',
        '2000': '2000ms'
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
