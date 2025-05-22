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
    Sitemap({
      hostname: "https://rapidplatform.com" /*, generateRobotsTxt: false*/,
    }),
    nunjucks({
      root: "./src",
      data: ["src/**/*.json"],
      globals: {
        uuid: (prefix = "component") => {
          return `${prefix}-${Math.random().toString(36).substring(2, 15)}`;
        },
      },
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
    tailwindcss({
      configPath: "./tailwind.config.js",
    }),
  ],
};
