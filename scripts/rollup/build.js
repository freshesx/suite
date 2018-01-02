import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

export default {
  input: `src/index.js`,
  output: [
    {
      file: `dist/main.esm.js`,
      format: 'es'
    }
  ],
  plugins: [
    eslint(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ]
    })
  ],
  external: []
}
