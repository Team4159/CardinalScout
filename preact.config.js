const preactCliFlow = require("preact-cli-plugin-flow");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");
export default function(config, env, helpers) {
  preactCliFlow(config);
  let alias = config.resolve.alias;
  //  console.log(__dirname);
  alias["firebaseImport"] = path.join(
    __dirname,
    "/functions/firebaseImport.browser.js"
  );
  console.log(alias);
  let rule = config.module.loaders.filter(
    loader => loader.loader === "babel-loader"
  )[0].options;
  rule.plugins.push("transform-regenerator");
  rule.plugins.push("syntax-dynamic-import");
  rule.plugins.push([
    "transform-runtime",
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]);
  let plugins = config.plugins;
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
}
