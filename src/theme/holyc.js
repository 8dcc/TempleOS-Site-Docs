var theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(195, 232, 141)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(232, 208, 141)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["variable", "keyword"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: [""],
      style: {
        fontStyle: "italic",
      },
    },

  ],
};

module.exports = theme;