// @ts-check
const rootMain = require('../../../../.storybook/main');

/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const main = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...(rootMain.addons || []),
    '@nrwl/react/plugins/storybook',
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../assets'],
  webpackFinal: async (config, options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = main;
