
+function () {

	angular
		.module('Lazzor')
		.run(['$templateCache', cacheTemplates]);

	function cacheTemplates($templateCache) {
		$templateCache.put('404.html', '<div class="wrap-404"><h1 class="title-404">:-(</h1><p class="description-404">\u0635\u0641\u062D\u0647&zwnj;\u06CC \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0634\u0645\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.</p></div>');
		$templateCache.put('home.html', '<div><uib-carousel class="home-slider" active="active" interval="3000" no-wrap="false"><uib-slide data-ng-repeat="slide in slides track by slide.id" index="$index"><a href="#!/trail/{{slide.id}}" class="image-popup"><img data-ng-src="{{slide.image}}" style="margin:auto"></a></uib-slide></uib-carousel><div class="category-list"><div class="container"><ul class="list-inline"><li data-ng-repeat="category in categories"><a href="{{\'/#!/search/category:\' + category.criteria}}"><i class="category-thumbnail icon icon-{{category.icon}}"></i> <span>{{category.title}}</span></a></li></ul></div></div><div class="search-wrap container"><form class="form-horizontal" role="search" data-ng-submit="search()"><div class="form-group"><div class="search-input-wrap col-sm-6 col-sm-offset-3"><div class="input-group"><input type="text" class="form-control" placeholder="" data-ng-model="q"> <span class="input-group-btn"><input type="submit" class="btn btn-default" value="\u062C\u0633\u062A\u062C\u0648"></span></div></div></div></form></div><div class="home-list featured-list {{list.cls}}" data-ng-repeat="list in featuredLists"><div class="container"><h4>{{list.title}}</h4><div class="row"><div class="item col-xs-6 col-sm-3" data-ng-repeat="item in list.items"><a data-ng-href="{{item.Url}}"><figure><img data-ng-src="{{\'../../assets/images/\' + item.ThumbnailPath}}"><figcaption><h6 data-ng-if="!list.extendedProperties">{{item.Name}}</h6><dl data-ng-if="list.extendedProperties"><dt>{{item.Name}}</dt><dd><i class="fa fa-bus" title="\u0634\u0647\u0631 \u0645\u0628\u062F\u0627\u0621"></i> <span>{{item.DepartureCity}}</span></dd><dd><i class="fa fa-coffee" title="\u062F\u0631\u062C\u0647 \u0633\u062E\u062A\u06CC"></i> <span>{{item.DifficultyTitle}}</span></dd><dd><i class="fa fa-hourglass-half" title="\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u067E\u06CC\u0645\u0627\u06CC\u0634"></i> <span>{{item.Duration}} \u0631\u0648\u0632</span></dd><dd><i class="fa fa-calendar-o" title="\u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0635\u0644"></i> <span>{{item.Season}}</span></dd></dl></figcaption></figure></a></div></div></div></div></div>');
		$templateCache.put('new-trail.html', '<div><div class="container"><h4 class="extra-margin">\u062B\u0628\u062A \u0645\u0633\u06CC\u0631 \u062C\u062F\u06CC\u062F</h4><form class="form-horizontal"><div class="form-group"><label class="control-label col-sm-2" for="trailName">\u0646\u0627\u0645</label><input type="text" class="form-control col-sm-10" name="trailName"></div><div class="form-group"><label class="control-label col-sm-2" for="description">\u062A\u0648\u0636\u06CC\u062D\u0627\u062A</label><textarea rows="5" class="form-control col-sm-10" name="description"></textarea></div><div class="form-group"><label class="control-label col-sm-2" for="season">\u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0635\u0644</label><input type="text" class="form-control col-sm-10" name="season"></div><div class="form-group"><label class="control-label col-sm-2" for="length">\u0637\u0648\u0644 \u0645\u0633\u06CC\u0631 (\u0645\u062A\u0631)</label><input type="text" class="form-control col-sm-10" name="length"></div><div class="form-group"><label class="control-label col-sm-2" for="departure">\u0634\u0647\u0631 \u0645\u0628\u062F\u0623</label><select class="form-control col-sm-10" name="departure"></select></div><div class="form-group"><label class="control-label col-sm-2" for="difficulty">\u062F\u0634\u0648\u0627\u0631\u06CC \u0645\u0633\u06CC\u0631</label><select class="form-control col-sm-10" name="difficulty"><option value="1">\u0633\u0627\u062F\u0647</option><option value="2">\u0645\u062A\u0648\u0633\u0637</option><option value="3">\u0633\u062E\u062A</option></select></div><div class="form-group"><label class="control-label col-sm-2" for="difficulty">\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u067E\u06CC\u0645\u0627\u06CC\u0634</label><select class="form-control col-sm-10" name="difficulty"><option value="1">&#x06f1; \u0631\u0648\u0632</option><option value="2">&#x06f2; \u0631\u0648\u0632</option><option value="3">&#x06f3; \u0631\u0648\u0632</option><option value="4">&#x06f4; \u0631\u0648\u0632</option><option value="5">&#x06f5; \u0631\u0648\u0632</option><option value="6">&#x06f6; \u0631\u0648\u0632</option></select></div><div class="form-group"><label class="control-label col-sm-2" for="kmlfile">\u0641\u0627\u06CC\u0644 GPS \u0645\u0633\u06CC\u0631</label><input type="file" id="kmlfile"></div><div class="form-group"><label class="control-label col-sm-2" for="mapfile">\u0641\u0627\u06CC\u0644 \u0646\u0642\u0634\u0647</label><input type="file" id="mapfile"></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-primary">\u062B\u0628\u062A</button></div></div></form></div></div>');
		$templateCache.put('search.html', '<div><div class="search-wrap container"><form class="form-horizontal" role="search" data-ng-submit="search()"><div class="form-group"><div class="search-input-wrap col-sm-6 col-sm-offset-3"><div class="input-group"><input type="text" class="form-control" placeholder="" data-ng-model="q"> <span class="input-group-btn"><input type="submit" class="btn btn-default" value="\u062C\u0633\u062A\u062C\u0648"></span></div></div></div></form></div><div class="search-wait" data-ng-if="!!searching"><i class="fa fa-spin fa-2x fa-circle-o-notch"></i> <span>\u062F\u0631 \u062D\u0627\u0644 \u062C\u0633\u062A\u062C\u0648. \u0644\u0637\u0641\u0627\u064B \u0645\u0646\u062A\u0638\u0631 \u0628\u0645\u0627\u0646\u06CC\u062F.</span></div><div class="search-result-wrap container"><div class="search-result-empty" data-ng-if="searchResults.length === 0"><span class="frown">:-(</span> <span>\u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u0646\u062A\u06CC\u062C\u0647&zwnj;\u0627\u06CC \u062F\u0631 \u0628\u0631 \u0646\u062F\u0627\u0634\u062A.</span></div><div class="search-result" data-ng-repeat="result in searchResults"><img data-ng-src="{{\'/assets/images/\' + result.ThumbnailPath}}" class="search-thumbnail"><ul><li class="search-link"><i title="{{result.DifficultyTitle}}" class="difficulty-level icon-{{[\'easy\', \'intermediate\', \'advanced\', \'expert\'][result.DifficultyLevel - 1]}}"></i> <a data-ng-href="#!/trail/{{result.Id}}" class="search-title"><span data-ng-bind="result.Name"></span></a></li><li class="departue-city"><i class="fa fa-bus" title="\u0634\u0647\u0631 \u0645\u0628\u062F\u0627\u0621"></i> <span data-ng-bind="result.DepartureCity"></span></li><li class="duration"><i class="fa fa-hourglass-half" title="\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u067E\u06CC\u0645\u0627\u06CC\u0634"></i> <span>{{result.Duration}} \u0631\u0648\u0632</span></li><li class="season"><i class="fa fa-calendar-o" title="\u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0635\u0644"></i> <span data-ng-bind="result.Season"></span></li><li class="length"><i class="fa fa-blind" title="\u0637\u0648\u0644 \u0645\u0633\u06CC\u0631 (\u0645\u062A\u0631)"></i> <span data-ng-bind="result.Length | number"></span></li></ul></div></div></div>');
		$templateCache.put('trail.html', '<div><div class="track-content"><div class="search-wrap"><div class="container"><form class="form-horizontal" role="search" data-ng-submit="search()"><div class="form-group"><div class="search-input-wrap col-sm-6 col-sm-offset-3"><div class="input-group"><input type="text" class="form-control" placeholder="" data-ng-model="q"> <span class="input-group-btn"><input type="submit" class="btn btn-default" value="\u062C\u0633\u062A\u062C\u0648"></span></div></div></div></form></div></div><div class="trail-wait" data-ng-if="!!fetching"><i class="fa fa-spin fa-2x fa-circle-o-notch"></i> <span>\u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A. \u0644\u0637\u0641\u0627\u064B \u0645\u0646\u062A\u0638\u0631 \u0628\u0645\u0627\u0646\u06CC\u062F.</span></div><div class="trail-features" data-ng-if="!fetching"><div class="container"><h4 class="trail-title trail-heading" data-ng-bind="trail.Name"></h4><p class="trail-description" data-ng-bind="trail.Description"></p><h4 class="trail-heading">\u062E\u0635\u0648\u0635\u06CC\u0627\u062A</h4><ul class="trail-info"><li data-ng-repeat="info in features" data-ng-class="info.cls"><span class="feature-title">{{info.label}}</span> <span class="feature">{{trail[info.prop] | useFilter:info.filter}}</span></li></ul></div></div><div class="download-wrap"><div class="container"><h4 class="trail-heading">\u062F\u0631\u06CC\u0627\u0641\u062A \u0641\u0627\u06CC\u0644</h4><a class="btn btn-default" download data-ng-href="{{trail.KmlPath}}">\u062F\u0631\u06CC\u0627\u0641\u062A \u0641\u0627\u06CC\u0644 GPS \u0645\u0633\u06CC\u0631 <i class="fa fa-download"></i> </a><a class="btn btn-default" download data-ng-repeat="map in trail.Maps" data-ng-href="{{\'/assets/maps/\' + map.Url}}"><span>\u062F\u0631\u06CC\u0627\u0641\u062A {{map.Title}}</span>&nbsp; <i class="fa fa-download"></i></a></div></div><div class="container"><h4 class="trail-heading">\u0646\u0642\u0634\u0647&zwnj;\u06CC \u0645\u0633\u06CC\u0631</h4></div><div class="kml-map" kml-drawer kml-path="trail.KmlPath"></div><div nvd3-sparkline-chart class="trail-elevation-chart" data="chartData" x="xFunction()" y="yFunction()"><svg></svg></div><div class="featured-list extra-margin" data-ng-if="trail.images.length"><div class="container"><h4>\u06AF\u0627\u0644\u0631\u06CC \u062A\u0635\u0627\u0648\u06CC\u0631</h4><ng-gallery images="trail.images"></ng-gallery></div></div><div class="featured-list extra-margin" data-ng-if="trail.Maps.length"><div class="container"><h4>\u0646\u0642\u0634\u0647&zwnj;\u0647\u0627</h4><div class="row"><div class="item col-xs-6 col-sm-3" data-ng-repeat="map in trail.Maps"><img data-ng-src="{{\'/assets/maps/\' + map.Url}}"></div></div></div></div><div class="featured-list extra-margin" data-ng-if="trail.VirtualTourUrl"><div class="container"><h4>\u062A\u0648\u0631 \u0645\u062C\u0627\u0632\u06CC</h4><div class="row"><div class="item col-xs-6 col-sm-3"><figure><a data-ng-href="{{\'/assets/virtualtours/\' + trail.VirtualTourUrl + \'/index.html\'}}"><img data-ng-src="{{\'/assets/virtualtours/\' + trail.VirtualTourUrl + \'/thumbnail.gif\'}}"></a></figure></div></div></div></div><div class="view-360" data-ng-if="trail.StreetViewUrl"><div class="container"><h4 class="trail-heading">\u0646\u0645\u0627\u06CC &#x06f3;&#x06f6;&#x06f0;</h4></div><iframe data-ng-src="{{trail.StreetViewUrl}}" frameborder="0" allowfullscreen></iframe></div><div class="featured-list nearby-trails"><div class="container"><h4>\u0645\u0633\u06CC\u0631\u0647\u0627\u06CC \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC</h4><div class="row"><div class="item col-xs-6 col-sm-3" data-ng-repeat="item in trail.NearbyTrails"><a data-ng-href="{{\'#!/trail/\' + item.Id}}"><figure><img data-ng-src="{{\'../../assets/images/\' + item.ThumbnailPath}}"><figcaption><dl><dt>{{item.Name}}</dt><dd><i class="fa fa-bus" title="\u0634\u0647\u0631 \u0645\u0628\u062F\u0627\u0621"></i> <span>{{item.DepartureCity}}</span></dd><dd><i class="fa fa-coffee" title="\u062F\u0631\u062C\u0647 \u0633\u062E\u062A\u06CC"></i> <span>{{item.DifficultyTitle}}</span></dd><dd><i class="fa fa-hourglass-half" title="\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u067E\u06CC\u0645\u0627\u06CC\u0634"></i> <span>{{item.Duration}} \u0631\u0648\u0632</span></dd><dd><i class="fa fa-calendar-o" title="\u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0635\u0644"></i> <span>{{item.Season}}</span></dd></dl></figcaption></figure></a></div></div></div></div></div></div>');
		;
	}

}();
