/* eslint-env node */

import bundleImports from 'rollup-plugin-bundle-imports'
import typescript from 'rollup-plugin-typescript'
// import commonjs from 'rollup-plugin-commonjs'
// import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  typescript(),
  // Was going to try to bundle firebase...
  // resolve(),
  // commonjs(),
  bundleImports({
    include: ['**/*.sw.js'],
    importAs: 'path',
  }),
  bundleImports({
    include: ['**/*.code.js'],
    importAs: 'code',
  }),
]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'dist/index-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external: [
      'firebase/app',
      'firebase/auth',
      'firebase/functions',
    ],
    plugins,
  },
]

