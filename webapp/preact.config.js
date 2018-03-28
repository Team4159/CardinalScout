const preactCliFlow = require("preact-cli-plugin-flow");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");
export default function(config, env, helpers) {
  preactCliFlow(config);
  let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  let babelConfig = rule.options;
  babelConfig.plugins.push(["lodash", { id: ["recompose"] }]);
  let alias = config.resolve.alias;
  //  console.log(__dirname);
  alias.firebaseImport = path.join(
    __dirname,
    "/functions/firebaseImport.browser.js"
  );
  let webpackRule = config.module.loaders.filter(
    loader => loader.loader === "babel-loader"
  )[0].options;
  webpackRule.plugins.push("transform-regenerator");
  webpackRule.plugins.push("syntax-dynamic-import");
  webpackRule.plugins.push([
    "transform-runtime",
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]);
  let plugins = config.plugins;
  // plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
}
