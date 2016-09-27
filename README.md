# PostCSS Brewbox Plugin [![Build Status][ci-img]][ci]

[PostCSS] plugin to demonstrate how to write a PostCSS plugin @ Brewbox.

```css
.foo {
  brewbox: beer;
  brewbox: wine;
}
```

```css
.foo {
  background-color: #FDB947;
  background-color: #37052A;
}
```

## Usage

```js
postcss([ require('postcss-brewbox-plugin') ])
```

See [PostCSS] docs for examples for your environment.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/brewboxit/postcss-brewbox-plugin.svg
[ci]:      https://travis-ci.org/brewboxit/postcss-brewbox-plugin
