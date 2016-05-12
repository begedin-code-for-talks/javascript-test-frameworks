var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('build', function () {
  return browserify({entries: 'src', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.js', ['build']);
});

gulp.task('default', ['watch', 'webserver']);


var protractor = require("gulp-protractor").protractor;


gulp.task('test', ['webserver'], function () {
	gulp.src(["./src/tests/*.js"])
    .pipe(protractor({
      configFile: "conf.js",
      args: ['--baseUrl', 'http://localhost:8080']
    }))
	.on('error', function(e) { throw e })
});
