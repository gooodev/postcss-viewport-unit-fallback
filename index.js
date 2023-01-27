
/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  const viewportUnitRegex = /(\d)[l|s|d]([vh|vw])/g;
  return {
    postcssPlugin: 'postcss-viewport-unit-fallback',
    Once: (root) => {
      root.walkDecls((decl) => {
        if (typeof decl.value === "string" && decl.value.match(viewportUnitRegex)) {
          const value = decl.value.replace(viewportUnitRegex, '$1$2');
          decl.before(` ${decl.prop}: ${value}`);
        }
      });
    },
  }
}

module.exports.postcss = true
