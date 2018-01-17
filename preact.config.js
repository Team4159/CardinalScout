const preactCliFlow = require("preact-cli-plugin-flow");
const asyncPlugin = require("preact-cli-plugin-async");
export default function(config, env, helpers) {
  preactCliFlow(config);
  asyncPlugin(config);
  let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  rule.options.plugins.push("transform-regenerator");
  rule.options.plugins.push([
    "transform-runtime",
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]);
}
