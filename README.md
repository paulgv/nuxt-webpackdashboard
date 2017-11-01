# Webpack Dashboard Module

> [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard) integration for Nuxt

## Install

Install the package:

```sh
yarn add nuxt-webpackdashboard -D
# or npm i nuxt-webpackdashboard -D
```

## Setup

- Add `nuxt-webpackdashboard` to `nuxt.config.js`:

```js
{
  modules: [
    'nuxt-webpackdashboard',
  ],
}
```

- In `package.json`, modify the dev script to run with webpack-dashboard:

```json
{
  "scripts": {
    "dev": "webpack-dashboard -- nuxt",
  },
}
```

## Options

[CLI options](https://github.com/FormidableLabs/webpack-dashboard#webpack-dashboard-cli) can be added in your `package.json`:

```json
{
  "scripts": {
    "dev": "webpack-dashboard -m -- nuxt",
  },
}
```


[Webpack plugin options](https://github.com/FormidableLabs/webpack-dashboard#webpack-plugin) can be passed to Webpack Dashboard in Nuxt config's modules sections:

```js
{
  modules: [
    ['webpackdashboard-module', {
      port: 3001,
    }],
  ],
}
```

Or by adding a `webpackDashboard` key:

```js {
  webpackDashboard: {
    port: 3001,
  },
}
```
