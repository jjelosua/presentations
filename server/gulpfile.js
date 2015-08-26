var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    stylish = require('jshint-stylish');

gulp.task('lintHTML', function() {
  return gulp.src('**/*.html',{ cwd: '../2015'})
    // if flag is not defined default value is 'auto' 
    .pipe(jshint.extract('auto'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter(stylish));
});

// SERVER TASKS
gulp.task('reload', function() {
    gulp.src('../2015/**/*.html', {read: true })
        .pipe(watch('../2015/**/*.html'))
        .pipe(jshint.extract('auto'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter(stylish))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '../',
    livereload: true,
    port:8080
  });
});

gulp.task('html', function () {
  gulp.src('../2015/**/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['../2015/**/*.html', 
              '../2015/**/*.md',
              '../2015/**/*.css',
              '../2015/**/*.js',
              '../2015/**/*.png',
              '../2015/**/*.jpg'], ['html','lintHTML']);
});

// development server reload modified files
gulp.task('server', ['connect', 'watch']);

// default task
gulp.task('default', function() {
  console.log("Presentations local server");
});
