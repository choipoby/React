var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify'); //watch for change and rerun the build process
var reactify = require('reactify'); //working with browserify

/*
// with 'default', gulp immediately runs it
// this is gulp task that does not consider dependencies
gulp.task('default', function(){
  return gulp.src('src/**') // go src dir
    .pipe(react()) // compile jsx to js
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./')) // concat
});
*/

// this is gulp task that honor dependencies using tools
gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries:['./src/app.jsx'],
    transform:[reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }))

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'browserify error')) //to output some error from wrong require
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build()
  bundler.on('update', build) //whenever there is a change, build again
});
