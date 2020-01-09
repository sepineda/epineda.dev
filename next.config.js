const refract = require("refractor");

// NOTE: This highlights template-strings as strings of CSS
const styledHighlight = {
  "styled-template-string": {
    pattern: /(styled(\.\w+|\([^\)]*\))(\.\w+(\([^\)]*\))*)*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
    lookbehind: true,
    greedy: true,
    inside: {
      interpolation: {
        pattern: /\$\{[^}]+\}/,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: refract.languages.jsx
        }
      },
      string: {
        pattern: /[^$;]+/,
        inside: refract.languages.css,
        alias: "language-css"
      }
    }
  }
};
refract.languages.insertBefore("jsx", "template-string", styledHighlight);
refract.languages.insertBefore("js", "template-string", styledHighlight);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [require("@mapbox/rehype-prism")]
  }
});
const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const staticFilesToCopy = ["favicon.ico"];

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir }
  ) {
    if (dev) return defaultPathMap;
    await Promise.all(
      staticFilesToCopy.map(file =>
        copyFile(join(dir, file), join(outDir, file))
      )
    );
    return defaultPathMap;
  },
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true
          }
        }
      ]
    });
    config.module.rules.push({
      test: /.css$/,
      use: "raw-loader"
    });
    return config;
  }
});
