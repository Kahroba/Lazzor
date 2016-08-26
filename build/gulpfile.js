var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

var paths = {
    less: '../src/less/*.less'
};

gulp.task('default', ['watch', 'less']);

gulp.task('less', function() {
    gulp
        .src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('lazzor.css', { newLine: '\r\n' }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../src/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
}).on('stop', function (e) {
    console.log('watching...');
});
