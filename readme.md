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
- 📁 archive - old source elements that still have some value but aren't used on the live site


## To do
- Figure out how to bind .json files from `src/data/` instead of having them be in the `src/pages/` folder
- Shift the project from my personal github
- Figure out how to bind the domain to the [Azure App Service](https://portal.azure.com/#@rapidplatform.com/resource/subscriptions/1240b94b-1abb-40e8-87e0-17cb115b8459/resourceGroups/rapid-projects/providers/Microsoft.Web/staticSites/projectssite/staticsite)

## Style Guide

Pages are generally single columns of scrolling content arranged as a set of vertical **blocks**
**Blocks** are styled from `layout.css`, which controls the grand structure of the site

You will see on each page layout these **blocks** like this:
`<div class="approach-blueprint skeleton block-half text-dark background-dark">`

The first class has no representation in the CSS (typically) and is used to visually distinguish blocks

`skeleton` also does nothing and is just used to ear-mark the bones of the layout

`block-full`, `block-half` & `block-quarter` speak to the height of the **block** itself, full screen vs half screen vs quarter screen
  **Blocks** are designed to never impact each other to help keep layouts simple and clean

`text-dark` / `text-light` and `background-dark` / `background-light` are used to create the alternating dark/light pattern

See `colours.css` for re-usuable common colours. Try to stick to these variable colours to help make restyling the entire site more consistant

`main.css` controls common styling for site content. Headers, paragraphs, list elements and other common HTML elements. Try to avoid putting custom styles / inline styles on common elements where possible to help keep styling across all pages cohesive.

`<h1>` is used for title headings
`<h3>` is used for content block headings
`<h6>` is used for those tiny content sub headings

## Page CSS
Specific pages need their on custom styling for some specific components. Re-usuable elements should go in `main.css`, otherwise make a `{layout}.css` file

