const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    // makes it possible to use files from these folders in the storybook environment
    '../components/**/*@(js|jsx|ts|tsx)',
    '../styles/**/*@(css|scss|sass)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../')
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../components'
    )
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../styles')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../hooks')
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../utils')
    config.resolve.alias['@data'] = path.resolve(__dirname, '../data')
    return config
  }
}
