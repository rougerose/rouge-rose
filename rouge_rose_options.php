<?php

if (!defined('_ECRIRE_INC_VERSION')) {
  return;
}

// Débug
// error_reporting(E_ALL^E_NOTICE);
// ini_set ("display_errors", "On");
// define('SPIP_ERREUR_REPORT', E_ALL);
// define('_NO_CACHE', -1);
// define('_INTERDIRE_COMPACTE_HEAD_ECRIRE', true);
// define('_LOG_FILELINE',true);
// define('_LOG_FILTRE_GRAVITE',8);


if (!isset($GLOBALS['z_blocs'])) {
	$GLOBALS['z_blocs'] = ['content', 'head', 'head_js', 'header', 'footer', 'breadcrumb'];
}
