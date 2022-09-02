/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
  purge: {
    content: ["./src/pages/**/*.js", "./src/components/**/**/*.js"],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
      colors: {
        'primary': '#5db1b5',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
      textColor: ['active'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};

