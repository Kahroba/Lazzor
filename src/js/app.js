(function () {
    var app = angular.module("Lazzor", ["ngRoute", "ui.bootstrap", "jkuri.gallery", "nvd3ChartDirectives"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/src/html/home.html",
                controller: "homeController"
            })
            .when("/search/:q?", {
                templateUrl: "/src/html/search.html"
            })
            .when("/trail/:id?", {
                templateUrl: "/src/html/trail.html"
            })
            .otherwise({
                templateUrl: "/src/html/404.html"
            });
    });

    app.controller("homeController", function ($scope, $location) {

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
                    id: 42,
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
                { title: 'غار', icon: 'cave.svg', criteria: 'cave' },
                { title: 'قله', icon: 'peak.svg', criteria: 'peak' },
                { title: 'کویر', icon: 'desert.svg', criteria: 'desert' },
                { title: 'جنگل', icon: 'forest.svg', criteria: 'forest' },
                { title: 'جزیره', icon: 'island.svg', criteria: 'island' },
                { title: 'پیمایش', icon: 'hiking.svg', criteria: 'hiking' },
                { title: 'دریاچه', icon: 'lake.svg', criteria: 'lake' },
                { title: 'آبشار', icon: 'waterfall.svg', criteria: 'waterfall' },
                { title: 'صخره نوردی', icon: 'rock.svg', criteria: 'rock' },
                { title: 'روستا', icon: 'village.svg', criteria: 'village' },
                { title: 'چشمه', icon: 'spring.svg', criteria: 'spring' },
                { title: 'آفرود', icon: 'offroad.svg', criteria: 'off-road' }
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
                    ].map(function(item){ item.Url = '#/trail/' + item.Id; return item; })
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
                    ].map(function(item){ item.Url = '#/trail/' + item.Id; return item; })
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
                            Url: '/src/html/virtualTours/damavand/index.html'
                        },
                        {
                            Name: 'سیالان',
                            ThumbnailPath: '3dsialan.gif',
                            Url: '/src/html/virtualTours/sialan/index.html'
                        },
                        {
                            Name: 'کتل خور',
                            ThumbnailPath: '3dkatalehKhor.gif',
                            Url: '/src/html/virtualTours/katalehKhor/index.html'
                        },
                        {
                            Name: 'دره ستارگان',
                            ThumbnailPath: '3ddareSetaregan.gif',
                            Url: '/src/html/virtualTours/dareSetaregan/index.html'
                        }
                    ]
                }
            };
        }
    });

    app.controller("searchController", function ($scope, $location, $routeParams, $http) {

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
                    .success(success)
                    .error(error)
                    .finally(function always() {
                        $scope.searching = false;
                    });
            }
        };

        function success(results) {
            $scope.searchResults = results;
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
    });

    app.controller("trailController", function ($scope, $location, $routeParams, $http) {
        $scope.fetch = fetch;
        $scope.search = search;

        init();
        fetch();

        function init() {
            $scope.features = [
                {
                    prop: 'DifficultyTitle',
                    label: 'دشواری مسیر'
                },
                {
                    prop: 'Season',
                    label: 'بهترین فصل'
                },
                {
                    prop: 'DepartureCity',
                    label: 'شهر مبداء'
                },
                {
                    prop: 'Duration',
                    label: 'مدت زمان پیمایش',
                    filter: 'days'
                },
                {
                    prop: 'Length',
                    label: 'طول مسیر (متر)',
                    filter: 'number'
                },
                {
                    prop: 'SosService',
                    label: 'امداد'
                }
            ];
        }

        function search() {
            $scope.q && $location.path('search/' + $scope.q);
        };

        function fetch() {
            var id = $routeParams.id;
            if (id) {
                $scope.fetching = true;
                $http
                    .post('/api/trail/getById', { id: id })
                    .success(success)
                    .error(error)
                    .finally(function always() {
                        $scope.fetching = false;
                        drawElevationProfile();
                    });
            }
        };

        function success(trail) {
            trail.KmlPath = window.location.origin + '/assets/kml/' + trail.KmlPath;
            if (trail.Name === "دماوند") {
                trail.images = [
                    '013_DamavandNandal/_MG_3960.png',
                    '013_DamavandNandal/IMG_5679.png',
                    '013_DamavandNandal/IMG_5694.png',
                    '013_DamavandNandal/IMG_5704.png',
                    '013_DamavandNandal/IMG_5712.png',
                    '013_DamavandNandal/IMG_5793.png',
                    '013_DamavandNandal/IMG_5802.png',
                    '013_DamavandNandal/IMG_5892.png',
                    '013_DamavandNandal/IMG_5898.png',
                    '013_DamavandNandal/IMG_5912.png',
                    '013_DamavandNandal/IMG_5948.png',
                    '013_DamavandNandal/IMG_5953.png',
                    '013_DamavandNandal/IMG_6422.png',
                    '013_DamavandNandal/IMG_6509.png',
                    '013_DamavandNandal/P6060562.png'
                ].map(function (item) {
                    var base = '/assets/images/';
                    return {
                        thumb: base + item,
                        img: base + item
                    }
                });
                trail.maps = [
                    'damavand.jpg'
                ];
                trail.tours = [
                    {
                        img: '3ddamavand.gif',
                        url: 'damavand/index.html'
                    }
                ];
            }
            $scope.trail = trail;
        };

        function error() {
            $scope.trail = {
                Name: "قلعه رودخان ",
                Description: "\"براي رفتن به قلعه‌رودخان، بايد از شهر فومن به طرف جنوب غربي و به طرف كوه حركت‌كنيد. انتهاي اين جاده به روستايي به اسم حيدرآلات ختم مي‌شود. در آنجا ماشين‌تان را پارك‌مي‌كنيد و از پاي كوه بالا قلعه بايد حدود1 تا 2 ساعت با پاي پياده از كوه بالا برويد، البته كل اين مسير تا قلعه را ميراث‌فرهنگي با حدود1500 پله كف‌سازي كرده و تاحدود زيادي بالا رفتن از اين مسير را سهل و‌آسان كرده است. كل اين پياده‌روي و پله‌نوردي در بين مسيري جنگلي انجام مي‌شودكه لابه‌لاي درختان، آسمان مشخص است و نورآفتاب نيز مي‌تابد و مناظر زيبا و دلنشيني را برايتان رقم مي‌زند وراه لذت بخش مي‌كند. درطول اين راه افراد زيادي هستند كه نوشيدني‌ها مختلف مي‌فروشند كه چندا ارزان نيست. هرچه ارتفاع بيشتر مي‌شود و به قلعه نزديك‌تر مي‌شود از گرماي هوا كاسته شده و هوا خنك‌تر مي‌شود. البته در‌پاي‌كوه هم نسبت به شهر فومن هوا بسيار خنك‌تر و رطوبت‌هوا كمتر است.\r\nبعداز سي پله‌ها، بالاخره به در ورودي قلعه خواهيد رسيد و مي‌توانيد وارد قلعه شويد. توجه داشته باشيد كه رسيدن به در ورودي قلعه پايان برنامه كوه‌نوردي و پله‌نوردي نخواهد بود. قلعه بر روي بلندترين قسمت از رشته كوه‌هايي ساخته شده كه مدام بالا و پايين مي‌شود و ديوارهاي قلعه نيز روي بلندترين قسمت از رشته‌كوه‌هايي ساخته شده كه طول قلعه حدوداً 1550 متر است. البته نياز نيست كه تمام اين 1550 متر را طي كرده و قلعه را بررسي كنيد، اجازه دهيد اهل فن، معماران، باستان‌شناسان. مورخان و عكاسان اين كار را انجام دهند و شما از نتايج تحقيقات و مطالعا آنها استفاد كنيد. از امكانات موجود در قلعهاين قلعه تحت نظارت و حفاظت سازمان ميراث فرهنگي و گردشگري است در داخل قلعه به جز سرويس بهداشتي، هيچ امكانات ديگري موجود نيست و هروسيله‌اي كه نياز داريد بايد همراه داشته باشيد، ازجمه آب، غذا، تنقلات و ... امكان زدن چادر و اقامت شبانه در قلعه فراهم نيست، چرا كه در هنگام غروب در قلعه بسته مي‌شود، مگر اينكه با نگهبان ميراث‌فرهنگي هماهنگ كنيد و اجازه بگيريد. اما در پاي كوه و كنار جاده و ابتداي مسير، قهوه‌خانه و آلاچيق و امكاناتي در حد خوردن نهار و آشاميدن موجود است. اگر وسيله نقليه شخصي داريد تا پاي كوه مي‌توانيد بياييد، اگر نداريد هم از شهر رشت و هم از فومن سواري‌هاي شخصي خطي با كرايه‌هاي مشخص وجود دارند شما را تا پاي كوه مي آورند. اگر هم با اتوبوس و ميني‌بوس و هر وسيله ديگري بخواهيد برويد، در پاي كوه جاي پارك هست و مشكلي براي تردد اين وسايل نيست.\r\n\"",
                DepartureCity: "فومن",
                DepartureCityPath: "ایران,گیلان,فومن,مركزی,فومن",
                DifficultyLevel: 2,
                DifficultyTitle: "متوسط",
                Duration: 1,
                ElevationProfile: "0,215.94 3.05158149337324,216.901 4.95975891291438,223.631 7.34103567586329,229.879 7.34103567586329,236.609 7.34103567586329,242.376 10.3924746301785,248.625 10.3924746301785,253.912 10.3924746301785,259.68 10.3924746301785,264.006 12.3006520485883,269.774 12.3006520485883,274.099 14.2088294675638,279.867 14.2088294675638,283.713 17.2603553563207,288.039 17.2603553563207,291.403 17.2603553563207,295.729 17.2603553563207,299.094 17.2603553563207,303.9 17.2603553563207,310.629 19.6417430795963,315.917 19.6417430795963,321.204 19.6417430795963,325.53 19.6417430795963,330.336 21.5499215732967,329.375 24.6014171226644,336.104 24.6014171226644,339.469 24.6014171226644,342.833 26.5095961539846,346.198 26.5095961539846,350.524 30.325865291687,358.214 39.3225902711037,364.463 42.3741174780887,367.827 42.3741174780887,360.617 42.3741174780887,367.347 42.3741174780887,363.501 42.3741174780887,370.711 42.3741174780887,363.021 42.3741174780887,360.137 42.3741174780887,369.269 68.0228283465487,366.866 76.1223439064367,363.501 117.012610743983,363.021 163.522591063134,364.943 167.338966331218,368.789 203.096194926103,366.866 214.7902123459,363.982 273.597870629922,369.75 290.698636130228,369.75 311.221562554089,373.595 356.507472837002,374.557 373.176959805759,377.921 409.543001286602,380.805 462.418210958639,386.573 496.244991694319,387.534 502.445216878952,390.899 524.628740796089,392.821 556.372852587392,395.705 577.896910284468,391.379 588.560741321836,397.628 625.794951262778,398.109 640.583966720526,398.589 669.601117105798,400.031 693.71852817137,400.031 744.615388167497,409.164 795.325742114152,418.296 820.579853240944,416.374 846.229275106908,417.816 863.084343548032,418.777 871.080240553424,418.777 945.503014788388,425.987 967.676410807434,432.716 978.789800248676,435.6 983.920545818283,438.964 998.063978209202,437.522 1010.12273355478,440.887 1019.648165645,440.406 1076.80283109435,454.345 1084.79879864626,456.268 1084.79879864626,459.152 1203.71052000981,460.594 1328.72589658759,461.555 1332.54241409267,467.804 1344.94310561225,470.688 1357.44652402465,474.533 1357.44652402465,478.378 1357.44652402465,479.339 1420.46460322005,481.262 1432.67104433675,482.223 1458.32056457168,482.704 1467.47539415228,487.51 1467.47539415228,490.875 1506.7536212404,492.317 1508.66192607244,492.317 1511.71353003208,495.682 1534.31724825135,496.643 1534.31724825135,500.008 1544.03195289337,502.891 1552.13153588346,506.737 1552.13153588346,509.14 1663.89007073004,509.621 1692.17676598333,513.947 1749.97249519865,514.908 1872.40035327747,519.234 2009.93725153721,518.753 2054.39070456912,522.118 2054.39070456912,526.444 2054.39070456912,529.328 2076.6174027533,532.212 2098.13433003552,538.46 2111.49226855393,539.902 2174.90303355313,542.786 2188.47171626472,546.151 2199.58513454715,549.515 2209.84674451988,551.918 2226.51610884242,553.841 2246.1554684357,556.725 2258.07515816007,559.128 2258.07515816007,562.493 2258.07515816007,565.858 2258.07515816007,569.222 2258.07515816007,572.106 2258.07515816007,575.47 2291.63186371929,576.913 2309.45479481169,579.796 2333.5722162304,583.161 2364.08859447408,586.045 2401.59130419952,587.006 2426.85251401017,596.62 2467.81081813514,604.31 2467.81081813514,607.675 2467.81081813514,610.558 2467.81081813514,613.442 2598.96795452443,615.846 2644.56966861072,618.729 2714.57159301007,622.575 2714.57159301007,625.939 2714.57159301007,628.823 2714.57159301007,632.188 2714.57159301007,635.072 2714.57159301007,638.437 2714.57159301007,641.32 2714.57159301007,644.204 2714.57159301007,647.569 2714.57159301007,648.05 2714.57159301007,650.933 2714.57159301007,654.779 2714.57159301007,657.182 2714.57159301007,659.585 2714.57159301007,662.469 2714.57159301007,665.353 2714.57159301007,668.718 2714.57159301007,671.602 2714.57159301007,674.486 2857.71654371897,674.966 2879.48587118675,679.773 2886.62991415613,675.447 2903.40825689222,675.927 2972.49376779451,679.292 2984.99726014409,683.618 3004.66616223801,684.579 3016.36133743867,676.889 3019.41305070409,679.292 3035.40563952223,682.176 3048.76411235487,685.541 3050.67250373168,687.944 3060.3871108204,694.673 3082.72854983258,695.154 3124.53568866609,703.806 3150.35266449605,704.767 3153.40429643143,697.557 3155.78568056293,703.806 3158.1670646859,705.248 3164.36770734221,706.689 3164.36770734221,710.054 3167.41942653764,710.535",
                Length: 49000,
                Season: "تمام فصول",
                ThumbnailPath: "026_GhaleeRodkhan/Thumbnail/026_GhaleeRodkhan.jpg",
                KmlPath: window.location.origin + "/assets/kml/026_GhaleRoodkhan.kml",
                Kml: "<?xml version=\"1.0\" standalone=\"yes\"?>\n<kml xmlns=\"http://www.opengis.net/kml/2.2\">\n  <Document>\n    <name><![CDATA[026_GhaleRoodkhan]]></name>\n    <visibility>1</visibility>\n    <open>1</open>\n    <Snippet><![CDATA[created using <A href=\"http://www.gpsvisualizer.com/?ref=ge&time=20160728021304\">GPS Visualizer</A>]]></Snippet>\n    <Style id=\"gv_waypoint_normal\">\n      <IconStyle>\n        <color>ffffffff</color>\n        <scale>1</scale>\n        <Icon>\n          <href>http://maps.google.ca/mapfiles/kml/pal4/icon56.png</href>\n        </Icon>\n        <hotSpot x=\"0.5\" xunits=\"fraction\" y=\"0.5\" yunits=\"fraction\" />\n      </IconStyle>\n      <LabelStyle>\n        <color>ffffffff</color>\n        <scale>1</scale>\n      </LabelStyle>\n      <BalloonStyle>\n        <text><![CDATA[<div style=\"font-family:Arial,sans-serif; min-width:200px;\"><h3>$[name]</h3> <div style=\"margin-top:8px;\">$[description]</div></div>]]></text>\n      </BalloonStyle>\n    </Style>\n    <Style id=\"gv_waypoint_highlight\">\n      <IconStyle>\n        <color>ffffffff</color>\n        <scale>1.2</scale>\n        <Icon>\n          <href>http://maps.google.ca/mapfiles/kml/pal4/icon56.png</href>\n        </Icon>\n        <hotSpot x=\"0.5\" xunits=\"fraction\" y=\"0.5\" yunits=\"fraction\" />\n      </IconStyle>\n      <LabelStyle>\n        <color>ffffffff</color>\n        <scale>1</scale>\n      </LabelStyle>\n      <BalloonStyle>\n        <text><![CDATA[<div style=\"font-family:Arial,sans-serif; min-width:200px;\"><h3>$[name]</h3> <div style=\"margin-top:8px;\">$[description]</div></div>]]></text>\n      </BalloonStyle>\n    </Style>\n    <Style id=\"gv_track\">\n      <LineStyle>\n        <color>ff0000e6</color>\n        <width>4</width>\n      </LineStyle>\n    </Style>\n    <StyleMap id=\"gv_waypoint\">\n      <Pair>\n        <key>normal</key>\n        <styleUrl>#gv_waypoint_normal</styleUrl>\n      </Pair>\n      <Pair>\n        <key>highlight</key>\n        <styleUrl>#gv_waypoint_highlight</styleUrl>\n      </Pair>\n    </StyleMap>\n    <Folder id=\"Waypoints\">\n      <name>Waypoints</name>\n      <visibility>1</visibility>\n      <Placemark>\n        <name>RUDKHAN</name>\n        <Snippet></Snippet>\n        <description><![CDATA[&nbsp;]]></description>\n        <styleUrl>#gv_waypoint</styleUrl>\n        <Style>\n          <IconStyle>\n            <scale>0.5</scale>\n            <Icon>\n              <href>http://maps.gpsvisualizer.com/google_maps/icons/garmin/gpsmap/Waypoint.png</href>\n            </Icon>\n          </IconStyle>\n        </Style>\n        <Point>\n          <altitudeMode>clampToGround</altitudeMode>\n          <coordinates>49.239317095,37.064361926,703.806</coordinates>\n        </Point>\n      </Placemark>\n    </Folder>\n    <Folder id=\"Tracks\">\n      <name>Tracks</name>\n      <visibility>1</visibility>\n      <open>0</open>\n      <Placemark>\n        <name><![CDATA[03-FEB-10]]></name>\n        <Snippet></Snippet>\n        <description><![CDATA[&nbsp;]]></description>\n        <styleUrl>#gv_track</styleUrl>\n        <Style>\n          <LineStyle>\n            <color>ffa9a9a9</color>\n            <width>4</width>\n          </LineStyle>\n        </Style>\n        <MultiGeometry>\n          <LineString>\n            <tessellate>1</tessellate>\n            <altitudeMode>clampToGround</altitudeMode>\n            <coordinates>49.249734879,37.073278427,215.94 49.249713421,37.073299885,216.901 49.249691963,37.073299885,223.631 49.249691963,37.073321342,229.879 49.249691963,37.073321342,236.609 49.249691963,37.073321342,242.376 49.249670506,37.073299885,248.625 49.249670506,37.073299885,253.912 49.249670506,37.073299885,259.68 49.249670506,37.073299885,264.006 49.249649048,37.073299885,269.774 49.249649048,37.073299885,274.099 49.24962759,37.073299885,279.867 49.24962759,37.073299885,283.713 49.249606133,37.073278427,288.039 49.249606133,37.073278427,291.403 49.249606133,37.073278427,295.729 49.249606133,37.073278427,299.094 49.249606133,37.073278427,303.9 49.249606133,37.073278427,310.629 49.249606133,37.073256969,315.917 49.249606133,37.073256969,321.204 49.249606133,37.073256969,325.53 49.249606133,37.073256969,330.336 49.249584675,37.073256969,329.375 49.249563217,37.073235512,336.104 49.249563217,37.073235512,339.469 49.249563217,37.073235512,342.833 49.249541759,37.073235512,346.198 49.249541759,37.073235512,350.524 49.249498844,37.073235512,358.214 49.249413013,37.073192596,364.463 49.249391556,37.073214054,367.827 49.249391556,37.073214054,360.617 49.249391556,37.073214054,367.347 49.249391556,37.073214054,363.501 49.249391556,37.073214054,370.711 49.249391556,37.073214054,363.021 49.249391556,37.073214054,360.137 49.249391556,37.073214054,369.269 49.249198437,37.073042393,366.866 49.249155521,37.07297802,363.501 49.249455929,37.073256969,363.021 49.249198437,37.072892189,364.943 49.249155521,37.072892189,368.789 49.248833656,37.07269907,366.866 49.24870491,37.072720528,363.982 49.248404503,37.072248459,369.75 49.248361588,37.072098255,369.75 49.248275757,37.071926594,373.595 49.248254299,37.071518898,374.557 49.248254299,37.071368694,377.921 49.248468876,37.071089745,380.805 49.248275757,37.070639133,386.573 49.248211384,37.070338726,387.534 49.248275757,37.070360184,390.899 49.248211384,37.070167065,392.821 49.247975349,37.069952488,395.705 49.247739315,37.069909573,391.379 49.247632027,37.069866657,397.628 49.247310162,37.069652081,398.109 49.247353077,37.069523335,398.589 49.247031212,37.06956625,400.031 49.246988297,37.069351673,400.031 49.246580601,37.069029808,409.164 49.246323109,37.068622112,418.296 49.246172905,37.068428993,416.374 49.245979786,37.068257332,417.816 49.245808125,37.068192959,418.777 49.245893955,37.068171501,418.777 49.245057106,37.068171501,425.987 49.244821072,37.068235874,432.716 49.244756699,37.068321705,435.6 49.244735241,37.06836462,438.964 49.24464941,37.068471909,437.522 49.244627953,37.06836462,440.887 49.244627953,37.068450451,440.406 49.24400568,37.068321705,454.345 49.243919849,37.068343163,456.268 49.243919849,37.068343163,459.152 49.244177341,37.069394588,460.594 49.243984222,37.06827879,461.555 49.243941307,37.06827879,467.804 49.243812561,37.068321705,470.688 49.243769646,37.068214417,474.533 49.243769646,37.068214417,478.378 49.243769646,37.068214417,479.339 49.243061543,37.068235874,481.262 49.243147373,37.068150043,482.223 49.243340492,37.068321705,482.704 49.243276119,37.068386078,487.51 49.243276119,37.068386078,490.875 49.242889881,37.068214417,492.317 49.242868423,37.068214417,492.317 49.242846966,37.068192959,495.682 49.243018627,37.068042755,496.643 49.243018627,37.068042755,500.008 49.242997169,37.068128586,502.891 49.242954254,37.068192959,506.737 49.242954254,37.068192959,509.14 49.241945744,37.068793774,509.621 49.242117405,37.068579197,513.947 49.242739677,37.068729401,514.908 49.243533611,37.067828178,519.234 49.242246151,37.068514824,518.753 49.242503643,37.068171501,522.118 49.242503643,37.068171501,526.444 49.242503643,37.068171501,529.328 49.242374897,37.06799984,532.212 49.242353439,37.067806721,538.46 49.242203236,37.067806721,539.902 49.242825508,37.067527771,542.786 49.242675304,37.067549229,546.151 49.242739677,37.067463398,549.515 49.242782593,37.067377567,551.918 49.242782593,37.067227364,553.841 49.242589474,37.067141533,556.725 49.242482185,37.06707716,559.128 49.242482185,37.06707716,562.493 49.242482185,37.06707716,565.858 49.242482185,37.06707716,569.222 49.242482185,37.06707716,572.106 49.242482185,37.06707716,575.47 49.242525101,37.066776752,576.913 49.24271822,37.066733837,579.796 49.242761135,37.066948414,583.161 49.242975712,37.066733837,586.045 49.243168831,37.06643343,587.006 49.243447781,37.066476345,596.62 49.243040085,37.066304684,604.31 49.243040085,37.066304684,607.675 49.243040085,37.066304684,610.558 49.243040085,37.066304684,613.442 49.241580963,37.066133022,615.846 49.241344929,37.066497803,618.729 49.241216183,37.06587553,622.575 49.241216183,37.06587553,625.939 49.241216183,37.06587553,628.823 49.241216183,37.06587553,632.188 49.241216183,37.06587553,635.072 49.241216183,37.06587553,638.437 49.241216183,37.06587553,641.32 49.241216183,37.06587553,644.204 49.241216183,37.06587553,647.569 49.241216183,37.06587553,648.05 49.241216183,37.06587553,650.933 49.241216183,37.06587553,654.779 49.241216183,37.06587553,657.182 49.241216183,37.06587553,659.585 49.241216183,37.06587553,662.469 49.241216183,37.06587553,665.353 49.241216183,37.06587553,668.718 49.241216183,37.06587553,671.602 49.241216183,37.06587553,674.486 49.239606857,37.065854073,674.966 49.239649773,37.065660954,679.773 49.239649773,37.065596581,675.447 49.23967123,37.065446377,675.927 49.239649773,37.064824104,679.292 49.239606857,37.064716816,683.618 49.239392281,37.064673901,684.579 49.239263535,37.064695358,676.889 49.239242077,37.064716816,679.292 49.239070415,37.064759731,682.176 49.238920212,37.064759731,685.541 49.238898754,37.064759731,687.944 49.238920212,37.064673901,694.673 49.239113331,37.064545155,695.154 49.239563942,37.064437866,703.806 49.239284992,37.064373493,704.767 49.23930645,37.064352036,697.557 49.23930645,37.064330578,703.806 49.23930645,37.06430912,705.248 49.239370823,37.064330578,706.689 49.239370823,37.064330578,710.054 49.239392281,37.06430912,710.535 49.239392281,37.06430912,698.518 49.239392281,37.06430912,1207.533 49.239392281,37.06430912,1208.494 49.239392281,37.06430912,698.518 49.239392281,37.06430912,1804.507 49.239392281,37.06430912,1810.274 49.239392281,37.06430912,1811.717 49.239392281,37.06430912,1809.794 49.239392281,37.06430912,1823.252 49.239392281,37.06430912,1821.33 49.239392281,37.06430912,1836.23 49.239392281,37.06430912,1830.462 49.239392281,37.06430912,1840.075 </coordinates>\n          </LineString>\n        </MultiGeometry>\n      </Placemark>\n    </Folder>\n  </Document>\n</kml>\n",
                SosService: "هلال احمر (امداد کوهستان) 112",
                images: [
                    '013_DamavandNandal/_MG_3960.png',
                    '013_DamavandNandal/IMG_5679.png',
                    '013_DamavandNandal/IMG_5694.png',
                    '013_DamavandNandal/IMG_5704.png',
                    '013_DamavandNandal/IMG_5712.png',
                    '013_DamavandNandal/IMG_5793.png',
                    '013_DamavandNandal/IMG_5802.png',
                    '013_DamavandNandal/IMG_5892.png',
                    '013_DamavandNandal/IMG_5898.png',
                    '013_DamavandNandal/IMG_5912.png',
                    '013_DamavandNandal/IMG_5948.png',
                    '013_DamavandNandal/IMG_5953.png',
                    '013_DamavandNandal/IMG_6422.png',
                    '013_DamavandNandal/IMG_6509.png',
                    '013_DamavandNandal/P6060562.png'
                ].map(function (item) { var base = '/assets/images/'; return { thumb: base + item, img: base + item } }),
                maps: [
                    'damavand.jpg'
                ],
                tours: [
                    {
                        img: '3ddamavand.gif',
                        url: 'damavand/index.html'
                    }
                ]
            };
        };

        function drawElevationProfile() {
            $scope.chartData = getChartData();
            $scope.xFunction = xFunction;
            $scope.yFunction = yFunction;

            function xFunction() {
                return function(d) {
                    return d.x;
                };
            };

            function yFunction () {
                return function(d) {
                    return d.y;
                };
            };

            function getChartData() {
                return $scope.trail.ElevationProfile.split(' ').map(function(item){
                    return {
                        x: Number(item.substr(0, item.indexOf(','))),
                        y: Number(item.substr(item.indexOf(',') + 1))
                    };
                });
            }
        }
    });

    app.directive('kmlDrawer', function () {
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
    });

    app.filter('useFilter', function($filter) {
        return function() {
            var filterName = [].splice.call(arguments, 1, 1)[0],
                noFilter = function(value) {
                    return value;
                };
            return filterName ? $filter(filterName).apply(null, arguments) : noFilter.apply(null, arguments);
        };
    });

    app.filter('days', function() {
        return function(num) {
            return num + ' روز';
        };
    });

})();
