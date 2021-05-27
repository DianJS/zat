module.exports = (_, options = {}) => {
  const presets = []
  const plugins = []

  if (options.presets && options.presets.env) {
    presets.push([require('@babel/preset-env'), options.presets.env])
  }

  if (options.presets && options.presets.react) {
    presets.push([require('@babel/preset-react'), options.presets.react])
  }

  if (options.presets && options.presets.typescript) {
    presets.push([require('@babel/preset-typescript'), options.presets.typescript])
  }

  if (options.runtime) {
    plugins.push([require('@babel/plugin-transform-runtime'), options.runtime])
  }

  if (options.enableReactRefresh && process.env.NODE_ENV !== 'production') {
    plugins.push(require.resolve('react-refresh/babel'))
  }

  plugins.push(require.resolve('babel-plugin-lodash'))

  return {
    sourceType: 'unambiguous',
    overrides: [{
      exclude: options.exclude,
      include: options.include,
      presets,
      plugins,
    }],
  }
}
