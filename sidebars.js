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
    "Keybinding"

  ],
  holyc: [
    "holyc/intro",
    "holyc/getting-started-hc",
    "holyc/printing",
    "holyc/datastructs",
    "holyc/graphics",
    "holyc/sound",
    "holyc/grpaint",
    "holyc/doldoc"
  ]
}

module.exports = sidebarsmodule.exports = sidebars
