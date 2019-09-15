jQuery(document).ready(function($) {
    if (Modernizr.input.placeholder) {
      $("form label").addClass("visuallyhidden");
    }
});