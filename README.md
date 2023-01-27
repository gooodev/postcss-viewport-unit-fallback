# postcss-viewport-unit-fallback

[PostCSS] plugin to fallback viewport unit(dvh/lvh/svh) for old browsers.

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  height: 100dvh;
}
```

```css
.foo {
  height: 100vh; /* Automatically add this line, and old browser doesn't support dvh use this */
  height: 100dvh; /* New browser supports dvh use this */
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-viewport-unit-fallback
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-viewport-unit-fallback'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
