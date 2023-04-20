const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: true,
  },
  // "staticDirs": ['../src/public','../public', '../src/stories/assets'],
  webpackFinal: async (config) => {
    // config.resolve.modules = [
    //   path.resolve(__dirname, "../"),
    //   "node_modules",
    // ]
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@': resolve('../src/'),
    // };

    //   [].push.apply(config.resolve.plugins, [
    //     new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    // ]);
    // config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]
    // config.resolve.alias["@"] = path.resolve(__dirname, '../src/components/src/');
    return config
    //   return {
    //     ...config,
    //     resolve: {
    //       ...config.resolve,
    //       alias: {
    //         ...config.resolve?.alias,
    //         ...aliases,
    //       },
    //     },
    //   };
  },
}
