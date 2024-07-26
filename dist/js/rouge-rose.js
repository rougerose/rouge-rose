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

	/* Détecter les boutons d'administration de Spip */
	window.addEventListener("load", isAdmin);

})();
