var gulp = require('gulp');
var webserver = require('gulp-webserver');
var markdown = require ('gulp-markdown-it');

gulp.task('webserver', ['compileMarkdown'], function() {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

gulp.task('compileMarkdown', function () {
    return gulp.src('**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.watch('./**/*.md', ['compileMarkdown']);