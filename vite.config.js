import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import Sitemap from "vite-plugin-sitemap";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [
    vituum(),
    nunjucks({
      root: "./src",
      data: ["src/**/*.json"],
      filters: {
        log: (value) => {
          console.log(value);
          return value;
        },
        slug: (value) => {
          return value.replace(/\s/g, "_");
        },
      },
    }),
    Sitemap({ hostname: "https://rapidplatform.com" }),
    tailwindcss({
      configPath: "./tailwind.config.js",
    }),
  ],
};
