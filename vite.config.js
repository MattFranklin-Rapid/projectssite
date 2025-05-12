import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import Sitemap from "vite-plugin-sitemap";

export default {
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
      },
    }),
    Sitemap({ hostname: "https://rapidplatform.com" }),
  ],
};
