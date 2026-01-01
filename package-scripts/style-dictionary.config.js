import { StyleDictionary } from "style-dictionary-utils";
import {
	logBrokenReferenceLevels,
	logVerbosityLevels,
	logWarningLevels,
	transformGroups,
} from "style-dictionary/enums";

const myStyleDictionary = new StyleDictionary();

const extendedSD = await myStyleDictionary.extend({
	source: ["src/design-tokens/**/*.json"],
	platforms: {
		scss: {
			buildPath: "src/scss/",
			transformGroup: "scss",
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

extendedSD.buildAllPlatforms();
