import StyleDictionary from "style-dictionary-utils";

const config = {
	source: ["src/design-tokens/**/*.json"],
	platforms: {
		scss: {
			buildPath: "src/",
			transforms: [
				"attribute/cti",
				"name/cti/kebab",
				"time/seconds",
				"content/icon",
				"size/rem",
				"color/hsl",
				"fontWeight/number",
				// utiliser fontFamily/css. Permet d'entourer de guillemets simples
				// les noms de fontes avec espace.
				"fontFamily/css",
			],
			files: [
				{
					destination: "scss/abstract/_variables.scss",
					format: "scss/variables",
					options: { outputReferences: true },
				},
			],
		},
	},
};

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
