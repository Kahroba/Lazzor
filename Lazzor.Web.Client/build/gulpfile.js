var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	htmlmin = require('gulp-htmlmin'),
	templateCache = require('gulp-angular-templatecache');

var paths = {
	less: '../src/less/*.less',
	js: [
		'../src/js/application.js',
		'../src/js/app-config.js',
		'../src/js/templates.js',
		'../src/js/*/*.js'
	],
	html: '../src/html/*.html'
};

gulp.task('default', ['watch', 'html', 'less']);

gulp.task('js', function() {
	gulp
		.src(paths.js)
		.pipe(concat('lazzor.js', { newLine: '\r\n' }))
		.pipe(gulp.dest('../dist'))
		.pipe(rename('lazzor.min.js'))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('../dist'));
});

gulp.task('less', function () {
	gulp
		.src(paths.less)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('lazzor.css', { newLine: '\r\n' }))
		.pipe(minifyCss())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('../dist'));
});

gulp.task('html', function () {
	var templateHeader = [
			'',
			'+function () {',
			'',
			'	angular',
			'		.module(\'<%= module %>\'<%= standalone %>)',
			'		.run([\'$templateCache\', cacheTemplates]);',
			'',
			'	function cacheTemplates($templateCache) {',
			''
		].join('\r\n'),
		templateBody = '		$templateCache.put(\'<%= url %>\', \'<%= contents %>\');',
		templateFooter = [
			'',
			'		;',
			'	}',
			'',
			'}();',
			''
		].join('\r\n');
	gulp
		.src(paths.html)
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true, minifyCSS: true }))
		.pipe(templateCache({
			module: 'Lazzor',
			//moduleSystem: 'IIFE',
			//templateHeader: 'angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {',
			//templateBody: '$templateCache.put("<%= url %>","<%= contents %>");',
			//templateFooter: '}]);',
			templateHeader: templateHeader,
			templateBody: templateBody,
			templateFooter: templateFooter
			}))
		.pipe(gulp.dest('../src/js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.less, ['less']);
})
.on('stop', function (e) {
	console.log('watching...');
});
