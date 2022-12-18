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
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: "Now that we've installed TempleOS, it's time to actually play around with it. In this chapter you'll learn about all the interesting pieces of TempleOS!",
        slug: '/category/start',
        keywords: ['guides'],
      },
      items: [
        "guide/getting-started/basics",
        "guide/getting-started/basic-programs"

      ],
    },
    {
      type: "category",
      label: "Tweaks / Tricks",
      link: {
        type: 'generated-index',
        title: 'Tweaks / Tricks',
        description: "Now that we have an understanding of the operating system, lets learn how we can tweak it!",
        slug: '/category/tweaks',
        keywords: ['guides'],
      },
      items: [
        "guide/tweaks/ui"
      ],
    },
    "Keybinding",

  ],
  holyc: [
    "holyc/intro",
    "holyc/getting-started-hc",
    "holyc/primer",
    "holyc/printing",
    "holyc/memory",
    "holyc/datastructs",
    "holyc/graphics",
    "holyc/sound",
    "holyc/doldoc",
    "holyc/input",
    "holyc/multic",
    "holyc/grpaint",
  ]
}

module.exports = sidebars
