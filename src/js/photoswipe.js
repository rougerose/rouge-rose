import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";

/**
 * Le script est chargé pour tous les articles,
 * mais photoswipe n'est pas forcément nécessaire.
 */
let $portfolio = document.querySelectorAll(".object_portfolio");

if ($portfolio) {
	const lightbox = new PhotoSwipeLightbox({
		gallery: $portfolio,
		children: "a.photoswipe",
		showHideAnimationType: "fade",
		pswpModule: PhotoSwipe,
	});

	lightbox.init();
}
