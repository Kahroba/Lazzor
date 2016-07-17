(function(){
    var app = angular.module("Lazzor", ["ngRoute", "ui.bootstrap"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/src/html/home.html",
                controller: "homeController"
            })
            .when("/search/:q?", {
                templateUrl : "/src/html/search.html"
            })
            .when("/trail/:id?", {
                templateUrl : "/src/html/trail.html"
            })
            .otherwise({
                templateUrl : "/src/html/404.html"
            });
    });

    app.controller("homeController", function($scope, $location) {

        $scope.products = ["Shevi", "Kahar", "Evan"];

        $scope.search = search;

        carousel();

        function search() {
            $location.path('search/' + $scope.q);
        };

        function carousel() {
            $scope.active = 0;
            $scope.slides = [
                {
                    id: 1,
                    image: '/src/img/slide-1.jpg',
                    text: 'first'
                },
                {
                    id: 2,
                    image: '/src/img/slide-2.jpg',
                    text: 'second'
                }
            ];
        };
    });

    app.controller("searchController", function($scope, $routeParams, $location, $http) {
        /// todo: load search results from server

        $scope.search = search;
        $scope.perform = perform;

        init();
        perform();

        function init() {
            $scope.q = $routeParams.q;
        };

        function search() {
            $location.path('search/' + $scope.q);
        };

        function perform() {
            var q = $routeParams.q;
            if(q) {
                $scope.searching = true;
                $http
                    .post('/api/search', { q: q })
                    .success(success)
                    .error(error)
                    .finally(function always() {
                        $scope.searching = false;
                    });
            }
        };

        function success() {
            $scope.searchResults = [
                {
                    title: 'farsh',
                    id: 1
                },
                {
                    title: '-ad',
                    id: 2
                }
            ];
        };

        function error() {
            $scope.searchResults = [
                {
                    title: 'failed',
                    id: 5
                }
            ];
        };
    });

    app.controller("trailController", function($scope, $routeParams, $http) {
        /// todo: load trail info from server

        $scope.fetch = fetch;

        fetch();

        function fetch() {
            var id = $routeParams.id;
            if(id) {
                $scope.fetching = true;
                $http
                    .post('/api/trail', { id: id })
                    .success(success)
                    .error(error)
                    .finally(function always() {
                        $scope.fetching = false;
                    });
            }
        };

        function success() {
            $scope.trail = {
                title: 'farshad',
                season: 'spring',
                id: $routeParams.id
            };
        };

        function error() {
            $scope.trail = {
                title: 'failed',
                season: 'winter',
                id: $routeParams.id
            };
        };
    });

})();
