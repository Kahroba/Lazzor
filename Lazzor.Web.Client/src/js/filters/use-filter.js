
+function () {

	angular
		.module("Lazzor")
		.filter('useFilter', ['$filter', useFilter]);

	function useFilter($filter) {
		return function () {
			var filterName = [].splice.call(arguments, 1, 1)[0],
				noFilter = function (value) {
					return value;
				};
			return filterName ? $filter(filterName).apply(null, arguments) : noFilter.apply(null, arguments);
		};
	}

}();
