
+function () {

	angular
		.module("Lazzor")
		.directive('svgImage', svgImage);

	function svgImage() {
		return {
			restrict: 'EA',
			replace: true,
			template: '',
			link: function ($scope, $element, attrs) {
				var imgUrl = attrs.src || attrs.ngSrc;
				jQuery.get(imgUrl, function (data) {
					// Get the SVG tag, ignore the rest
					var $svg = jQuery(data).find('svg');

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					//$element.replaceWith($svg);
					$element.html($svg);

				}, 'xml');
			}
		};

	}

}();
