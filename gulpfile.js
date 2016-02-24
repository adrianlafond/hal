// Set up based on https://viget.com/extend/gulp-browserify-starter-faq
var gulp = require('./gulp')([
  'browserify'
]);

gulp.task('build', ['browserify']);
gulp.task('default', ['build']);
