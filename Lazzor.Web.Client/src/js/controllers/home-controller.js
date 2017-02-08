
+function () {

	angular
		.module("Lazzor")
		.controller("homeController", ['$scope', '$location', homeController]);

	function homeController($scope, $location) {

		$scope.search = search;

		carousel();
		categories();
		mostVisited();

		function search() {
			$scope.q && $location.path('search/' + $scope.q);
		};

		function carousel() {
			$scope.active = 0;
			$scope.slides = [
				{
					id: 13,
					image: '/src/img/featured-1.jpg'
				},
				{
					id: 8,
					image: '/src/img/featured-2.jpg'
				}
			];
		};

		function categories() {
			$scope.categories = [
				{ title: 'غار', icon: 'cave', criteria: 'cave' },
				{ title: 'قله', icon: 'peak', criteria: 'peak' },
				{ title: 'کویر', icon: 'desert', criteria: 'desert' },
				{ title: 'جنگل', icon: 'forest', criteria: 'forest' },
				{ title: 'جزیره', icon: 'island', criteria: 'island' },
				{ title: 'پیمایش', icon: 'hiking', criteria: 'hiking' },
				{ title: 'دریاچه', icon: 'lake', criteria: 'lake' },
				{ title: 'آبشار', icon: 'waterfall', criteria: 'waterfall' },
				{ title: 'صخره', icon: 'rock', criteria: 'rock' },
				{ title: 'روستا', icon: 'village', criteria: 'village' },
				{ title: 'چشمه', icon: 'spring', criteria: 'spring' },
				{ title: 'آفرود', icon: 'offroad', criteria: 'off-road' }
			];
		};

		function mostVisited() {
			$scope.featuredLists = {
				mostVisited: {
					title: 'پربازدیدترین\u200cها',
					extendedProperties: true,
					cls: '',
					items: [
						{
							DepartureCity: 'دماوند',
							DifficultyLevel: 3,
							DifficultyTitle: 'سخت',
							Duration: 3,
							Id: 13,
							Name: 'دماوند',
							Season: 'بهار',
							ThumbnailPath: 'damavand.png'
						},
						{
							DepartureCity: 'قزوین',
							DifficultyLevel: 3,
							DifficultyTitle: 'سخت',
							Duration: 3,
							Id: 8,
							Name: 'هنیز به عسل',
							Season: 'اوایل بهار تا اواسط پاییز',
							ThumbnailPath: 'haniz.png'
						},
						{
							DepartureCity: 'اردبیل',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 3,
							Id: 5,
							Name: 'نئور به سوباتان',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: 'soubatan.png'
						},
						{
							DepartureCity: 'ساری',
							DifficultyLevel: 1,
							DifficultyTitle: 'ساده',
							Duration: 2,
							Id: 53,
							Name: 'چورت به میانشه',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: 'chort.png'
						}
					].map(function (item) { item.Url = '#!/trail/' + item.Id; return item; })
				},
				newlyAdded: {
					title: 'تازه\u200cترین\u200cها',
					extendedProperties: true,
					cls: '',
					items: [
						{
							DepartureCity: 'گیلانغرب',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 2,
							Id: 43,
							Name: 'اولسبلنگاه',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: 'olesblengah.png'
						},
						{
							DepartureCity: 'مازندران',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 2,
							Id: 54,
							Name: 'درفک',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: 'dorfak.png'
						},
						{
							DepartureCity: 'مازندران',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 2,
							Id: 29,
							Name: 'سماموس',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: 'samamous.png'
						},
						{
							DepartureCity: 'اردبیل',
							DifficultyLevel: 1,
							DifficultyTitle: 'ساده',
							Duration: 2,
							Id: 52,
							Name: 'فندوقلو',
							Season: 'اواسط بهار تا اواخر پاییز',
							ThumbnailPath: 'fandogh.png'
						}
					].map(function (item) { item.Url = '#!/trail/' + item.Id; return item; })
				},
				newMaps: {
					title: 'تازه\u200cترین نقشه\u200cها',
					extendedProperties: false,
					cls: 'newly-added-maps extra-margin',
					items: [
						{
							Name: 'دماوند',
							ThumbnailPath: 'damavand.jpg'
						},
						{
							Name: 'سیالان',
							ThumbnailPath: 'sialan.jpg'
						},
						{
							Name: 'نئور به سوباتان',
							ThumbnailPath: 'neorBeSoubatan.jpg'
						},
						{
							Name: 'آزادکوه',
							ThumbnailPath: 'azadKooh.jpg'
						}
					]
				},
				newTours: {
					title: 'تازه\u200cترین تورهای مجازی',
					extendedProperties: false,
					cls: 'newly-added-tours',
					items: [
						{
							Name: 'دماوند',
							ThumbnailPath: '3ddamavand.gif',
							Url: '/assets/virtualtours/013_damavand/index.html'
						},
						{
							Name: 'سیالان',
							ThumbnailPath: '3dsialan.gif',
							Url: '/assets/virtualtours/008_HanizAsalmahaleh/index.html'
						},
						{
							Name: 'کتل خور',
							ThumbnailPath: '3dkatalehKhor.gif',
							Url: '/assets/virtualtours/021_KatalehKhorCave/index.html'
						},
						{
							Name: 'دره ستارگان',
							ThumbnailPath: '3ddareSetaregan.gif',
							Url: '/assets/virtualtours/060_DareSetaregan/index.html'
						}
					]
				},
				villages: {
					title: 'تازه\u200cترین\u200cروستاها',
					extendedProperties: true,
					cls: 'new-villages',
					items: [
						{
							DepartureCity: 'کرج',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 1,
							Id: 11,
							Length: 14300,
							Name: 'ولیان',
							Season: 'اوایل بهار تا اواخر پاییز',
							ThumbnailPath: '011_Velian/Thumbnail/011_Velian.jpg'
						},
						{
							DepartureCity: 'تهران',
							DifficultyLevel: 1,
							DifficultyTitle: 'ساده',
							Duration: 1,
							Id: 41,
							Length: 39600,
							Name: 'افجه',
							Season: 'تمام فصول',
							ThumbnailPath: '041_Afjeh/Thumbnail/041_Afjeh.jpg'
						},
						{
							DepartureCity: 'مرزن آباد',
							DifficultyLevel: 1,
							DifficultyTitle: 'ساده',
							Duration: 1,
							Id: 34,
							Length: 42300,
							Name: 'کندلوس',
							Season: ' تمام فصول ',
							ThumbnailPath: '034_Kandelos/Thumbnail/034_Kandelus.jpg'
						},
						{
							DepartureCity: 'کرج',
							DifficultyLevel: 2,
							DifficultyTitle: 'متوسط',
							Duration: 1,
							Id: 55,
							Length: 25000,
							Name: 'دروان',
							Season: ' اوایل بهار تا اواخر پاییز ',
							ThumbnailPath: '055_Doravan/Thumbnail/055_Dorvan.jpg'
						}
					].map(function (item) { item.Url = '#!/trail/' + item.Id; return item; })
				}
			};
		}
	}

}();
