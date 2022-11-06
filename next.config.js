const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

const nextTranslate = require("next-translate");
const securityHeaders = [
  { key: "Access-Control-Allow-Credentials", value: "true" },
  { key: "Access-Control-Allow-Origin", value: "*" },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  },
  {
    key: "Access-Control-Allow-Headers",
    value:
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
];
module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        // optional: you can modify antd less variables directly here
        // modifyVars: {  },
        // Or better still you can specify a path to a file
        lessVarsFilePath: "./styles/variables.less",
        // optional
        lessVarsFilePathAppendToEndOfContent: false,
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {},

        // Other Config Here...
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [nextTranslate, {}],
  ],
  {
    reactStrictMode: false,
    reactDevOverlay: false,
    publicRuntimeConfig: {
      // Will be available on both server and client
      // backendUrl: process.env.BACKEND_URL,
    },
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ["osmanbaba.s3.eu-central-1.amazonaws.com"],
    },
    async redirects() {
      return [
        {
          source: "/_error",
          destination: "/",
          permanent: true,
        },
      ];
    },
    webpack(config) {
      // config.module.rules.push({
      //   test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
      //   loader: "file-loader",
      // });
      return config;
    },

    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
    // async headers() {
    //   return [
    //     {
    //       // matching all API routes
    //       source: "https://pspay.net/api/frontend/(.*)",
    //       headers: [
    //         { key: "Access-Control-Allow-Credentials", value: "true" },
    //         { key: "Access-Control-Allow-Origin", value: "*" },
    //         {
    //           key: "Access-Control-Allow-Methods",
    //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    //         },
    //         {
    //           key: "Access-Control-Allow-Headers",
    //           value:
    //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    //         },
    //       ],
    //     },
    //   ];
    // },
  }
);
