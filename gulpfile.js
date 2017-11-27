var gulp = require('gulp');
var webserver = require('gulp-webserver');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var jsstylish = require('jshint-stylish');

gulp.task('webserver', ['jslint','csslint'], function() {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

gulp.task('jslint', function() {
    return gulp.src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jsstylish));
});

gulp.task('csslint', function() {
    gulp.src('./src/**/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter(require('csslint-stylish')));
});

gulp.watch('./src/**/*.js', ['jslint']);
gulp.watch('./src/**/*.css', ['csslint']);