/**
 * Récupérer un tableau d'identifiant depuis une liste de checkbox
 * @param {NodeList} inputs
 * @returns {Array}
 */
export default function getInputsChecked(inputs) {
	let idArray = [];
	if (inputs.length > 0) {
		for (var item of inputs) {
			if (item.checked) {
				idArray.push(item.value);
			}
		}
	}
	return idArray;
}
