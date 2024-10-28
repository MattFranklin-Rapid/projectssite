# Vituum + Nunjucks

## Running things

`npm run dev` for a hot reloading live version
`npm run build` to generate the dist folder

## Docs

[Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
[Vituum](https://vituum.dev/guide/)

## Outline

This project is a scaffold for future development as well as a static site generator for Rapid Platform


- 📁 dist - location of statically generated files to be uploaded to the CDN
- 📁 public - static files that aren't referenced will be exported to /dist 'as-is'
- 📁 src
  - 📁 assets - Our static assets such as `.png` `.svg`
  - 📁 data - `.json` data used in templates
  - 📁 emails - email template files
  - 📁 scripts - script files as `.js`
  - 📁 styles - `.css` files
  - 📁 components - template files as `.njk` for reuse throughout pages and layouts
  - 📁 layouts - template layout files as `.njk` that define pages
  - 📁 pages - static `.html` pages, as well as dynamic nunjuck templates, can be nested, includes local data files in `.json`


To do : 
- Figure out how to bind .json files from `src/data/` instead of having them be in the `src/pages/` folder
- Shift the project from my personal github
- Figure out how to bind the domain to the [Azure App Service](https://portal.azure.com/#@rapidplatform.com/resource/subscriptions/1240b94b-1abb-40e8-87e0-17cb115b8459/resourceGroups/rapid-projects/providers/Microsoft.Web/staticSites/projectssite/staticsite)