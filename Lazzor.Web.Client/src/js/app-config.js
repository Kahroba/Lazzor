
+function () {

	angular
		.module('Lazzor')
		.config(['$routeProvider', configRoutes]);

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controller: 'homeController'
			})
			.when('/search/:q?', {
				templateUrl: 'search.html',
				controller: 'searchController'
			})
			.when('/trail/:id?', {
				templateUrl: 'trail.html',
				controller: 'trailController'
			})
			.when('/newtrail', {
				templateUrl: 'new-trail.html'
			})
			.otherwise({
				templateUrl: '404.html'
			});
	}

}();
