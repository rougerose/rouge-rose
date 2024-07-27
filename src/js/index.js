import { isAdmin } from "./is-admin";
import { filterProjects } from "./filter-projects";

/* Détecter les boutons d'administration de Spip */
window.addEventListener("load", isAdmin);

/* Activer les filtres par projet */
if (document.querySelector(".formulaire_filtrer_articles")) {
	document.addEventListener("click", filterProjects);
}
