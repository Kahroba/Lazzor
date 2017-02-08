
+function () {

	angular
		.module("Lazzor")
		.directive('kmlDrawer', kmlDrawer);

	function kmlDrawer() {
		return {
			restrict: 'EA',
			replace: true,
			scope: {
				kmlPath: '='
			},
			link: function (scope, element, attrs, controller) {
				scope.$watch('kmlPath', function () {
					if (scope.kmlPath) {
						window.Pakoob = window.Pakoob || {};
						window.Pakoob.initMap = initMap.bind(scope, element, scope.kmlPath);
						$(document.body).append($('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMYa2MeMowwvphSPuUurU0tXxuSh3OgcY&callback=window.Pakoob.initMap"></script>'));
					}
				});
			}
		};

		function initMap(element, kmlPath) {
			var mapElement = element[0],
				src = kmlPath,
				mapOptions = {
					center: new google.maps.LatLng(35.71, 51.40),
					zoom: 2,
					mapTypeId: google.maps.MapTypeId.TERRAIN
				};
			var map = new google.maps.Map(mapElement, mapOptions);

			loadKmlLayer(src, map);
		}

		function loadKmlLayer(src, map) {
			var layerOptions = {
				suppressInfoWindows: true,
				preserveViewport: false,
				map: map
			};
			var kmlLayer = new google.maps.KmlLayer(src, layerOptions);

			google.maps.event.addListener(kmlLayer, 'click', onLayerClick);

			function onLayerClick(event) {
				var content = event.featureData.infoWindowHtml,
					testimonial = document.getElementById('capture');

				testimonial.innerHTML = content;
			}
		}
	}

}();
