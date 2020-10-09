/**
 * For more info go to: https://github.com/timarney/react-app-rewired
 */

const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra')

const get = require('lodash/get')

const isBuilding = process.env.NODE_ENV.match(/prod/gi)

const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const autoFixEslint = options => config => {
  config.module.rules = config.module.rules.map(rule => {

    if (Array.isArray(rule.use)) {
      rule.use = rule.use.map(use => {
        const isEslint = JSON.stringify(use).match(/node_modules\/eslint/gi) && typeof use.options === 'object'

        if (isEslint) {
          use.options = {
            ...use.options,
            fix: true
          }
        }

        return use
      })
    }

    return rule
  })

  return config
}

const keepBanner = ({value: match = /File generated/gmi} = {}) => config => {
  // config.optimization.minimize = false

  config.optimization.minimizer = config.optimization.minimizer.map(rule => {

    if (get(rule, 'options.terserOptions.output.comments') !== undefined) {
      rule.options.terserOptions.output.comments = match
    }

    return rule
  })

  return config
}

const banner =
`************************************************************************
  ${process.env.npm_package_name}
  ${process.env.npm_package_description}

    File generated:      ${new Date().toUTCString()} (${Math.round(new Date().getTime() / 1000)})
    License              ${process.env.npm_package_license}
    Version:             ${process.env.npm_package_version}-${process.env.COMMIT_SHORT_SHA}
************************************************************************`

module.exports = override(
  addWebpackPlugin(new webpack.BannerPlugin({
    banner
  })),
  addWebpackPlugin(new LodashModuleReplacementPlugin({
    paths: true,
    shorthands: true
  })),
  addBabelPlugin(['lodash']),
  addBabelPlugin(['babel-plugin-styled-components',
    {
      ...(isBuilding && {
        displayName: false
      }),
      ssr: false,
      pure: true
    }
  ]),
  autoFixEslint(),
  keepBanner()
)
