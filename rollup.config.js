import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'amd',
			file: 'lib/eml-parse-js.amd.js',
		},
		{
			format: 'cjs',
			file: 'lib/eml-parse-js.cjs.js',
		},
		{
			format: 'es',
			file: 'lib/eml-parse-js.esm.js',
		},
		{
			file: 'lib/eml-parse-js.umd.js',
			format: 'umd',
			name: 'EmlParseJs',
		},
		{
			format: 'iife',
			file: 'lib/eml-parse-js.iife.js',
			name: 'EmlParseJs',
		},
	],
	plugins: [typescript(), resolve(), commonjs()],
};
