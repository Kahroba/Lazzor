
+function () {

	angular
		.module("Lazzor")
		.controller("searchController", ['$scope', '$location', '$routeParams', '$http', searchController]);

	function searchController($scope, $location, $routeParams, $http) {

		$scope.search = search;
		$scope.perform = perform;

		init();
		perform();

		function init() {
			$scope.q = $routeParams.q;
		};

		function search() {
			$scope.q && $location.path('search/' + $scope.q);
		};

		function perform() {
			var q = $routeParams.q;
			if (q) {
				$scope.searching = true;
				$http
					.post('/api/home/search', { q: q })
					//.success(success)
					//.error(error)
					.then(success, error)
					.finally(function always() {
						$scope.searching = false;
					});
			}
		};

		function success(response) {
			$scope.searchResults = response.data;
		};

		function error() {
			$scope.searchResults = [
				{
					"DepartureCity": "ماسال",
					"DepartureCityPath": "ایران,گیلان,ماسال,مركزی,ماسال",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 3,
					"Id": 3,
					"Length": 422000,
					"Name": "ماسال",
					"Season": "اواسط بهار تا اواخر پاییز",
					"ThumbnailPath": null
				},
				{
					"DepartureCity": "فومن",
					"DepartureCityPath": "ایران,گیلان,فومن,مركزی,فومن",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 4,
					"Length": 434000,
					"Name": "ماسوله",
					"Season": "اواسط بهار تا اوایل پاییز",
					"ThumbnailPath": "004_Masouleh/Thumbnail/004_Masouleh.jpg"
				},
				{
					"DepartureCity": "اردبیل",
					"DepartureCityPath": "ایران,اردبیل,اردبیل,مركزی,اردبیل",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 3,
					"Id": 5,
					"Length": 57000,
					"Name": "نئور به سوباتان",
					"Season": "اویل بهار تا اواخر پاییز",
					"ThumbnailPath": "005_Sobatan/Thumbnail/005_Sobatan.jpg"
				},
				{
					"DepartureCity": "قزوین",
					"DepartureCityPath": "ایران,قزوین,قزوین,مركزی,قزوین",
					"DifficultyLevel": 3,
					"DifficultyTitle": "سخت",
					"Duration": 3,
					"Id": 8,
					"Length": 29200,
					"Name": "هنیز به عسل",
					"Season": "اوایل بهار تا اواسط پاییز",
					"ThumbnailPath": "008_HanizBeAsalMahale/Thumbnail/008_HanizBeAsaiMahalle.jpg"
				},
				{
					"DepartureCity": "فومن",
					"DepartureCityPath": "ایران,گیلان,فومن,مركزی,فومن",
					"DifficultyLevel": 4,
					"DifficultyTitle": "خیلی سخت",
					"Duration": 1,
					"Id": 26,
					"Length": 49000,
					"Name": "قلعه رودخان ",
					"Season": "تمام فصول",
					"ThumbnailPath": "026_GhaleeRodkhan/Thumbnail/026_GhaleeRodkhan.jpg"
				},
				{
					"DepartureCity": "مازندران",
					"DepartureCityPath": "ایران,مازندران",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 2,
					"Id": 29,
					"Length": 35200,
					"Name": "سماموس",
					"Season": " اوایل بهار تا اواخر پاییز ",
					"ThumbnailPath": "029_Samamous/Thumbnail/029_Samamous.jpg"
				},
				{
					"DepartureCity": "کجور",
					"DepartureCityPath": "ایران,مازندران,نوشهر,كجور,کجور",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 2,
					"Id": 33,
					"Length": 22400,
					"Name": "کجور به سیسنگان",
					"Season": " اوایل بهار تا اواخر پاییز ",
					"ThumbnailPath": "033_Kojur/Thumbnail/033_Kojur.jpg"
				},
				{
					"DepartureCity": "گلستان",
					"DepartureCityPath": "ایران,گلستان",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 36,
					"Length": 6000,
					"Name": "شیر آباد",
					"Season": " تمام فصول ",
					"ThumbnailPath": "036_ShirAbad/Thumbnail/036_ShirAbad.jpg"
				},
				{
					"DepartureCity": "سپیدان",
					"DepartureCityPath": "ایران,فارس,سپیدان",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 3,
					"Id": 37,
					"Length": 4800,
					"Name": "مارگون",
					"Season": " تمام فصول ",
					"ThumbnailPath": "037_Margoun/Thumbnail/037_Margoun.jpg"
				},
				{
					"DepartureCity": "آمل",
					"DepartureCityPath": "ایران,مازندران,آمل,مركزی,آمل",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 2,
					"Id": 42,
					"Length": 8100,
					"Name": "الیمستان",
					"Season": " اوایل بهار تا اواخر پاییز ",
					"ThumbnailPath": "042_Alimastan/Thumbnail/042_Alimastan.jpg"
				},
				{
					"DepartureCity": "گیلانغرب",
					"DepartureCityPath": "ایران,کرمانشاه,گیلانغرب,مرکزی,گیلانغرب",
					"DifficultyLevel": 2,
					"DifficultyTitle": "متوسط",
					"Duration": 2,
					"Id": 43,
					"Length": 64100,
					"Name": "اولسبلنگاه",
					"Season": " اوایل بهار تا اواخر پاییز ",
					"ThumbnailPath": "043_Olesbelangah/Thumbnail/043_Olesbelangah.jpg"
				},
				{
					"DepartureCity": "سمنان",
					"DepartureCityPath": "ایران,سمنان,سمنان,مركزی,سمنان",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 44,
					"Length": 100000,
					"Name": "باداب سورت",
					"Season": " تمام فصول ",
					"ThumbnailPath": "044_BadabSoort/Thumbnail/044_Badabsort.jpg"
				},
				{
					"DepartureCity": "اردبیل",
					"DepartureCityPath": "ایران,اردبیل,اردبیل,مركزی,اردبیل",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 52,
					"Length": 24100,
					"Name": "فندوقلو",
					"Season": " اواسط بهار تا اواخر پاییز ",
					"ThumbnailPath": "052_Fandoghlu/Thumbnail/052_Fandoghlo.jpg"
				},
				{
					"DepartureCity": "ساری",
					"DepartureCityPath": "ایران,مازندران,ساری,مركزی,ساری",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 53,
					"Length": 17500,
					"Name": "چورت به  میانشه ",
					"Season": " اوایل بهار تا اواخر پاییز ",
					"ThumbnailPath": "053_ChoratBeMianshe/Thumbnail/053_ChoratBeMianshe.jpg"
				},
				{
					"DepartureCity": "مرزن آباد",
					"DepartureCityPath": "ایران,مازندران,چالوس,مرزن آباد,مرزن آباد",
					"DifficultyLevel": 1,
					"DifficultyTitle": "ساده",
					"Duration": 2,
					"Id": 57,
					"Length": 38200,
					"Name": "فراخین",
					"Season": " تمام فصول ",
					"ThumbnailPath": "057_Farakhin/Thumbnail/057_Farakhin.jpg"
				}
			];
		};
	}

}();
