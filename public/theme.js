const currentTheme = localStorage.getItem("theme");

function getPreferredTheme() {
  // Return the local storage value if existing
  if (currentTheme) return currentTheme;

  // Return the device's preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferredTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  // Set theme value for screen readers
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Set the background color property
  const body = document.body;
  if (body) {
    const computedStyles = window.getComputedStyle(body);
    const backgroundColor = computedStyles.backgroundColor;

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", backgroundColor);
  }
}

// Avoid page flashes
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // Set early for screen readers
    reflectPreference();

    // Setup the theme switcher
    document.querySelector("#theme-button")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  setThemeFeature();

  // Reflect theme preference between view transitions
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// Synchronize with system preference changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
