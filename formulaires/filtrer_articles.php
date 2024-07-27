<?php

if (!defined('_ECRIRE_INC_VERSION')) {
  return;
}

function formulaires_filtrer_articles_charger($id_rubrique = '', $id_groupe_mots = '', $articles = []) {
	$valeurs = [
		'articles' => $articles,
		'id_rubrique' => $id_rubrique,
		'id_groupe' => $id_groupe_mots,
	];

	$mots = _request('mots');
	if ($mots) {
		$valeurs['mots'] = $mots;
	}
	/**

		TODO: à supprimer en production

	*/
	$variante = _request('variante');
	if ($variante) {
		$valeurs['_hidden'] = '<input name="variante" type="hidden" value="' . $variante . '"/>';
		$valeurs['variante'] = $variante;
	}
	return $valeurs;
}

function formulaires_filtrer_articles_verifier($id_rubrique = '', $id_groupe_mots = '', $articles = []) {
	$erreurs = [];
	return $erreurs;
}

function formulaires_filtrer_articles_traiter($id_rubrique = '', $id_groupe_mots = '', $articles = []) {
	$retour = [];
	refuser_traiter_formulaire_ajax();
	$mots = _request('mots');
	$self = self();
	/**
		TODO: à supprimer en production
	*/
	$variante = _request('variante');
	if ($variante) {
		$self = parametre_url($self, 'variante', $variante);
	}


	if ($mots) {
		$redirection = parametre_url($self, 'mots', '');
		$mots = array_unique($mots);
		$retour['redirect'] = parametre_url($redirection, 'mots', $mots);
	} else {
		$retour['redirect'] = $self;
	}
	return $retour;
}
