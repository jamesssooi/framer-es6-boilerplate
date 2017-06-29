import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

/**
 * Output location
 */
var outputPath = 'build/app.js'

/**
 * Rollup configuration
 */
export default {
  moduleName: 'FramerApp',
  entry: 'src/index.js',
  dest: outputPath,
  format: 'umd',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}