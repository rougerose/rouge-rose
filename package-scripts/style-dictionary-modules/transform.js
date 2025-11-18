/**
 * Entouré la chaîne de guillemets doubles
 * @param {string} fontString
 * @returns {string}
 */
function wrapWithDoublequote(fontString) {
	return `"${fontString}"`;
}

/**
 * Ajouter si nécessaire des guillemets simples pour un nom contenant des espaces
 * @param {string} fontString
 * @returns {string}
 */
function quoteWrapWhitespacedFont(fontString) {
	let fontName = fontString.trim();
	const isQuoted = fontName.startsWith("'") && fontName.endsWith("'");
	if (!isQuoted) {
		fontName = fontName.replace(/'/g, "\\'");
	}
	const hasWhiteSpace = new RegExp("\\s+").test(fontName);
	return hasWhiteSpace && !isQuoted ? `'${fontName}'` : fontName;
}

/**
 * Fonction principale de traitement de la chaîne
 * @param {string|string[]} fontFamily
 * @returns {string}
 */
export function processFontFamilySCSS(fontFamily) {
	let family = fontFamily;
	let familyString = "";

	if (typeof family === "string" && family.includes(",")) {
		family = family.split(",").map((part) => part.trim());
	}

	if (Array.isArray(family)) {
		familyString = family
			.map((part) => quoteWrapWhitespacedFont(part))
			.join(", ");
	} else {
		familyString = quoteWrapWhitespacedFont(family);
	}

	return wrapWithDoublequote(familyString);
}
