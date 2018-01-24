const preactCliFlow = require("preact-cli-plugin-flow");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
export default function(config, env, helpers) {
  preactCliFlow(config);
  let rule = config.module.loaders.filter(
    loader => loader.loader === "babel-loader"
  )[0].options;
  rule.plugins.push("transform-regenerator");
  rule.plugins.push([
    "transform-runtime",
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]);
  let plugins = config.plugins;
  //plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
}
