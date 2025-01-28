const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      "height-presentation": {
        "calc-100vh-91px": "calc(100vh - 91px)",
      },
      colors: {
        "dark-gray-opaque": "#7070701f",
        "light-grey": "#ffffff77",
        "byzantine-blue": "#1b233b",
        "dark-byzantine-blue": "#192139",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
