import StyleDictionary from "style-dictionary";
import {
	logBrokenReferenceLevels,
	logVerbosityLevels,
	logWarningLevels,
	transformTypes,
} from "style-dictionary/enums";
import { isFontFamily } from "style-dictionary-utils/filter/isFontFamily.js";
import { processFontFamilySCSS } from "./style-dictionary-modules/transform.js";

/**
 * CUSTOM TRANSFORM fontFamily/scss
 * Modifier une chaîne ou un tableau font-family en variable scss
 */
StyleDictionary.registerTransform({
	type: `value`,
	transitive: true,
	name: `fontFamily/scss`,
	filter: (token) => {
		return isFontFamily(token);
	},
	transform: (token) => {
		return processFontFamilySCSS(token.$value);
	},
});

const sd = new StyleDictionary({
	source: ["src/design-tokens/**/*.json"],
	platforms: {
		scss: {
			buildPath: "src/scss/",
			transforms: [
				"attribute/cti",
				"name/kebab",
				"time/seconds",
				"html/icon",
				"size/rem",
				"color/css",
				"color/hsl",
				"cubicBezier/css",
				"strokeStyle/css/shorthand",
				"border/css/shorthand",
				"typography/css/shorthand",
				"transition/css/shorthand",
				"shadow/css/shorthand",
				"fontFamily/scss",
			],
			files: [
				{
					destination: "abstract/_variables.scss",
					format: "scss/variables",
					options: { outputReferences: true },
				},
			],
		},
	},
	log: {
		warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
		verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
		errors: {
			brokenReferences: logBrokenReferenceLevels.console, // 'throw' | 'console'
		},
	},
});

sd.buildAllPlatforms();
