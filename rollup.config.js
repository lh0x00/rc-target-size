import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const input = 'src/index.js'

const commonjsPlugin = commonjs({
  include: 'node_modules/**',
  namedExports: {
    'node_modules/react/index.js': [
      'Component',
      'PureComponent',
      'isValidElement',
      'cloneElement',
    ],
    'node_modules/react-dom/index.js': ['findDOMNode'],
  },
})
const resolvePlugin = resolve()
const babelPlugin = babel({
  runtimeHelpers: true,
  exclude: 'node_modules/**',
})
const uglifyPlugin = uglify()
const replacePlugin = replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
})

export default [
  {
    input,
    output: {
      name: pkg.globalName,
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      replacePlugin,
      babelPlugin,
      resolvePlugin,
      commonjsPlugin,
      uglifyPlugin,
    ],
  },
  {
    input,
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'src',
        },
      }),
      babelPlugin,
    ],
  },
]
