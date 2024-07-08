const path = require("path");
module.exports = {
  staticDirs: ['../stories/assets'],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "storybook-addon-rtl",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  features: {
    buildStoriesJson: true,
    babelModeV7: true
  },
  webpackFinal: async config => {
    // remove hash from the static file names
    // find the existing rule and override the name property
    // config.module.rules.forEach(function(rule, index) {
    //   if (String(rule.test).search('svg') > 0) {
    //     if (typeof config.module.rules[index].options == 'undefined') {
    //       config.module.rules[index].options = {};
    //     }
    //     config.module.rules[index].options.name = 'static/media/[name].[ext]';
    //   }
    // });
    config.resolve.alias = {
      ...config.resolve.alias,
      icons: path.resolve(__dirname, "../stories/assets/icons")
    };
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  env: config => ({
    ...config,
    CHROMATIC_VIEWPORTS: [375, 768, 1380, 1920]
  }),
  docs: {}
};
