import { type Config } from "tailwindcss";
export default {
  content: ["index.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        "primary-green": "hsla(var(--primary-green), var(--tw-bg-opacity, 1))",
        "foreground-white":
          "hsla(var(--foreground-white), var(--tw-bg-opacity, 1))",
        "foreground-white-foreground":
          "hsla(var(--foreground-white-foreground), var(--tw-bg-opacity, 1))",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
