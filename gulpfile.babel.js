import gulp from 'gulp';
import http from 'http';
import connect from 'connect';
import serveStatic from 'serve-static';
import selenium from 'selenium-standalone';
import webdriver from 'gulp-webdriver';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

let httpServer, seleniumServer;

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

gulp.task('http', (done) => {
  let app = connect().use(serveStatic('.'));
  httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('selenium', (done) => {
  selenium.install({logger: console.log}, () => {
    selenium.start((err, child) => {
      if (err) { return done(err); }
      seleniumServer = child;
      done();
    });
  });
});

gulp.task('e2e', ['http', 'selenium'], () => {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver()).on('error', () => {
      seleniumServer.kill();
      process.exit(1);
    });
});

gulp.task('test', ['e2e'], () => {
  httpServer.close();
  seleniumServer.kill();
});

gulp.task('default', ['watch', 'http']);
