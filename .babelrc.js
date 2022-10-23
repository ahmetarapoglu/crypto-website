module.exports = {
  presets: [["next/babel"]],
  plugins: [
    ["import", { libraryName: "antd", style: true, ssr: true }],
    [
      "babel-plugin-styled-components",
      {
        minify: false,
        ssr: true,
        pure: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
