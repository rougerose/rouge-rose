import resolve from "@rollup/plugin-node-resolve";
import { minify } from "rollup-plugin-esbuild";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import terser from "@rollup/plugin-terser";

const outputPlugins = () => [process.env.NODE_ENV === "production" && minify()];

export default [
	{
		input: "src/js/index.js",
		plugins: [resolve()],
		output: {
			file: "dist/js/rouge_rose.js",
			format: "iife",
			plugins: outputPlugins(),
		},
	},
	{
		input: "src/js/photoswipe.js",
		plugins: [resolve()],
		output: {
			file: "dist/js/rouge_rose_photoswipe.js",
			format: "iife",
			plugins: outputPlugins(),
		},
	},
];
/*
const srcDir = "src/js/";
const destDir = "dist/js/";
const terserOptions = {
	compress: { passes: 3 },
	module: true,
	mangle: true,
	nameCache: {},
};
const outputPlugins = () => [
	process.env.NODE_ENV === "production" && terser(terserOptions),
];

function build(src, dist, name, format) {
	return {
		input: srcDir + src,
		plugins: [resolve(), commonjs()],
		output: {
			file: destDir + dist,
			format: format,
			name: name,
			plugins: outputPlugins(),
		},
	};
}

export default [
	build("index.js", "rouge_rose.js", "", "iife"),
	build("photoswipe.js", "rouge_rose_photoswipe.js", "", "iife"),
];
*/
