import getParents from "dom-parents";
import getInputsChecked from "./get-inputs-by-id";

function filterProjects(event) {
	let target = event.target;

	// Clic est sur un checkbox ?
	if (target.closest("input[type='checkbox'")) {
		// Chercher l'élément <form>
		let [form] = getParents(target, "form");
		// Récupérer la liste des checkbox
		let inputs = form.querySelectorAll("input[type='checkbox']");
		// Isoler les checkbox cochés
		let inputs_checked = getInputsChecked(inputs);
		// Créer un objet params pour recevoir les identifiants des filtres (mots) sélectionnés
		let params = { mots: [] };

		inputs_checked.forEach((id) => {
			params.mots.push(id);
		});
		// Recharger le bloc ajax rubrique_body qui contient la liste des articles
		// et mettre à jour l'historique et l'url
		ajaxReload("projets", { history: true, args: params });
	}

	// Clic sur le bouton reset ?
	if (target.closest("button[type='reset']")) {
		event.preventDefault();
		// click peut être sur le bouton ou l'élément enfant svg
		let [button] = getParents(target, "button", true),
			url = button.dataset.self;
		// Recharger la page sans aucun paramètre supplémentaire,
		// ce qui revient à remettre à zéro les checkbox
		ajaxReload("projets", { history: true, href: url });
	}
}

export { filterProjects };
