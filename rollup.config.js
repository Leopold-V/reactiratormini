import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const extensions = [
    '.js','.ts'
  ];

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    commonjs(),
    resolve({ extensions }),
    babel({
        extensions,
        babelHelpers: 'bundled',
        include: ['src/**/*'],
      }),
]
};