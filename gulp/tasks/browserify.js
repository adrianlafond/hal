// !!!! I will likely remove this task later.
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify('./examples/todo/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./examples/todo/'));
});
