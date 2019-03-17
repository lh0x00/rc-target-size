module.exports = function config(api) {
  const isProduction = process.env.mode === 'production'
  api.cache(isProduction)

  const presets = ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react']
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./', './src'],
      },
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ]
  const ignore = ['**/__test__', '**/**/__test__']

  return {
    presets,
    plugins,
    ignore,
  }
}
