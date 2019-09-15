<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

// if (!isset($GLOBALS['z_blocs']))
//     $GLOBALS['z_blocs'] = array('content','aside','extra','head','head_js','header','footer','breadcrumb');


// Zcore
if (!isset($GLOBALS['z_blocs'])) {
  $GLOBALS['z_blocs'] = array(
    'content',
    'head',
    'head_js',
    'header',
    'aside',
    'footer'
  );
}

// Intertitres
$GLOBALS['debut_intertitre'] = "\n<h2>";
$GLOBALS['fin_intertitre'] = "</h2>\n";
