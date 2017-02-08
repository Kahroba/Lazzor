
+function () {

	angular
		.module("Lazzor")
		.filter('toDays', function () {
			return function (num) {
				return num + ' روز';
			};
		});

}();
