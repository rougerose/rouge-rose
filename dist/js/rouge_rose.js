(function () {
	'use strict';

	/**
	 * Déterminer si les boutons d'administration de Spip sont présents,
	 * auquel cas ajouter un attribut sur le pied de page pour ajouter
	 * une marge supplémentaire.
	 */
	function isAdmin() {
		const admin = document.getElementById("spip-admin");
		if (admin) {
			document.documentElement.setAttribute("data-admin-status", "on");
		}
	}

	/**
	 * Get the parents of the element, optionally filtered by a selector.
	 *
	 * @param {Element} element - The element from which the search should start.
	 * @param {string} [selector] - Selector to search for the parent elements.
	 * @param {boolean} [includeElement=false] - Include `element` to the search or not.
	 */
	var getParents = (element, selector, includeElement = false) => {
	  const hasSelector = selector !== undefined;
	  const elements = [];
	  let el = element;

	  if (!includeElement) {
	    el = el.parentElement;
	  }

	  while (el !== null) {
	    if (el.nodeType === Node.ELEMENT_NODE) {
	      if (!hasSelector || el.matches(selector)) {
	        elements.push(el);
	      }
	    }

	    el = el.parentElement;
	  }

	  return elements;
	};

	/**
	 * Récupérer un tableau d'identifiant depuis une liste de checkbox
	 * @param {NodeList} inputs
	 * @returns {Array}
	 */
	function getInputsChecked(inputs) {
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

	/* Détecter les boutons d'administration de Spip */
	window.addEventListener("load", isAdmin);

	/* Activer les filtres par projet */
	if (document.querySelector(".formulaire_filtrer_articles")) {
		document.addEventListener("click", filterProjects);
	}

})();
