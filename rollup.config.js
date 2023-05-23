import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: 'dist/rtc-sdk.js',
    format: 'umd',
    name: 'vrv',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
            },
          },
        ],
      ],
    }),
    terser(),
  ],
};
