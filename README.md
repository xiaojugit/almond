# Add Vue@^3

```bash
yarn add vue@^3
```

# Use Storybook

```bash
npx sb init
```

# Use Sass

注意 `sass` 和 `sass-loader` 的版本，有错误就返回上一个版本试试

```bash
yarn add sass sass-loader css-loader style-loader node-sass -D -W
```

## Setting Storybook

使用 `sass` 需修改 `.storybook/main.js` 文件

```js
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
```

# Test

需要注意 `jest` `babel-jest` `ts-jest` 的版本要符合 `vue-jest` 的要求，可以到 `node_modules/vue-jest/package.json` 文件中查看 `peerDependencies` 的内容。`@vue/test-utils` 要契合 `Vue` 的版本：
`@vue/test-utils@^1` --> `vue@^2`
`@vue/test-utils@^2` --> `vue@^3`

```bash
yarn add jest@^26.6.3 @vue/test-utils@^2.0.0-rc.6 vue-jest@^5.0.0-alpha.5 babel-jest@^26.6.3 ts-jest@^26.5.6 @babel/core @babel/preset-env @babel/preset-typescript typescript -D -W

```

新增 `jest.config.js` 文件 `npx jest --init`

```js
module.exports = {
  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
};
```

新增 `babel.config.js` 文件

```js
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
    '@babel/preset-typescript',
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
```

# Use Lerna Manage Publish

```bash
npx lerna init
```

发布之前要检查用户和镜像源

```bash
npm whoami
npm config get registry
npm config set registry=https://registry.npmjs.org/
npm login
npm publish
```
