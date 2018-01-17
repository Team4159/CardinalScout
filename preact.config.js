const preactCliFlow = require("preact-cli-plugin-flow");
export default function(config, env, helpers) {
  preactCliFlow(config);
  let rule = config.module.loaders.filter(
    loader => loader.loader === "babel-loader"
  )[0].options;
  rule.presets.pop();
  rule.presets.push([
    "env",
    {
      loose: true,
      uglify: true,
      targets: {
        browsers: ["> 1%", "IE >= 9", "last 2 versions"]
      }
    }
  ]);
  rule.plugins.push("transform-regenerator");
  rule.plugins.push([
    "transform-runtime",
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]);
  rule.plugins.push(
    "transform-export-extensions",
    "syntax-dynamic-import",
    "transform-class-properties",
    "transform-object-rest-spread"
  );
  rule.plugins.push("async-to-promises");
  rule.plugins.push("transform-es2015-destructuring");
}
