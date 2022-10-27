# Contributing

> **Note** <br>
> A basic understanding of [React](https://reactjs.org/) and [Markdown](https://https://www.markdownguide.org/) may be nesseciary for editing _some_ features of the site.

## Editing

Editing documents on the site require almost no HTML, instead everything is done simply in Markdown.

Upon pushing to the main branch, the site will be automatically built to the `gh-pages` branch; this requires nothing to be done manually. After being built into HTML files, the page is then served from that branch using GitHub Pages.

That said, understanding the file structure is important to contributing to the site; it may be worth checking out the Docusaurus documentation, if you wish to make any major contributions.

## File Structure

Editing files couldn't be more simple. To create a page, head into the `docs` directory, then into either `guide` or `holyc` in respect to what you are writing. For example, if I wish to write a page about 'The TempleOS Command Line', then I would create a file: `/docs/guide/category/commandline.mdx` (MDX is React's own version of MD, only use MDX if you wish to use react specific features).

```
docs
├── guide
│   ├── category
│   │   ├── commandline.mdx
│   │   └── the-basics.md
```

Next, you must insert the following lines into the start of your markdown page:

```
---
id: cli
title: Command Line
---
```

- `id` is used to reference the page outside (used soon).
- `title` is what is seen in the sidebar, if no Heading is used in the document, the heading will result to this.

Finally, you'll need to tell the site where to put this file. Pages are never indexed automatically, this is better to ensure that everything is in the right order, pages appear on the sidebar only if they are referenced in `sidebars.js`, pages will not be able to be found via a URL either unless referenced.

This is a snippet of the current `sidebars.js` file:

```js
const sidebars = {
  guide: [
    "guide/intro",
    {
      type: "category",
      label: "Installation",
      link: {
        type: 'generated-index',
        title: 'Installing TempleOS',
        description: "It's time to install TempleOS on your system. In this chapter, we will go over all there is to the installation of TempleOS.",
        slug: '/category/docusaurus-guides',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        "guide/installing/methods",
        "guide/installing/virtualized",
        "guide/installing/supplementals"

      ],
    },
```

This should be pretty self explanatory if you give it a moment, it's essentially a `dict` containing the index. Reference a page using it's ID, not it's location. For example, our page that we made prior, should be referenced not as:

```
/docs/guide/category/commandline.md
```

but instead using its ID:

```
/docs/guide/category/cli
```

## Static

If your page requires the usage of images, add them to the `/static` directory in the category it belongs to. Please make a folder for your page itself and add all the images there. Everything in this directory will be built to `/`.
