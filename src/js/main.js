
$(document).ready(function() {
	console.log('farsh');
	carousel();
});

function carousel() {

	$('.main-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		responsiveClass: true,
		nav: true,
		dots: true,
		smartSpeed: 500,
		navText: [
			"<i class='icon-chevron-left owl-direction'></i>",
			"<i class='icon-chevron-right owl-direction'></i>"
		]
	});

};
