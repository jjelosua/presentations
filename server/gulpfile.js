var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    stylish = require('jshint-stylish');

//CHANGE IF NEEDED
var conf = {
    app_cwd:'../contents/',
    port:8080
};

gulp.task('lint_js', function() {
  return gulp.src('20*/**/*.html', { cwd: conf.app_cwd })
    // if flag is not defined default value is 'auto' 
    .pipe(jshint.extract('auto'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter(stylish));
});

// SERVER TASKS
gulp.task('connect', function() {
  connect.server({
    root: '../contents/',
    livereload: true,
    port:8080
  });
});

gulp.task('html', function () {
  gulp.src(['20*/**/*.html'], { cwd: conf.app_cwd })
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch([conf.app_cwd+'20*/**/*.html', 
              conf.app_cwd+'20*/**/*.md',
              conf.app_cwd+'20*/**/*.css',
              conf.app_cwd+'20*/**/*.js',
              conf.app_cwd+'20*/**/*.png',
              conf.app_cwd+'20*/**/*.jpg'], ['html','lint_js']);
});

// development server reload modified files
gulp.task('server',  gulp.series('connect', 'watch'));

// default task
gulp.task('default',  gulp.series('server'));
