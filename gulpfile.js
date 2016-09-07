var gulp = require('gulp');
var gutil = require('gulp-util');
// var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
// var debug = require('gulp-debug');
// var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var paths = {
  sass: ['./scss/**/*.scss'],
  
  // note that minified js (*.min.js) should not be watched for changes, FIXME:clow might be better to have a cleanable target dir
  js: ['./js/**/*.js', '!./js/**/*.min.js']
};

gulp.task('default', ['sass', 'js', 'watch']);

gulp.task('sass', function(done) {
  gulp.src('./scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload({}))
    .on('end', done);
});

// get scripts ready for packaging
gulp.task('js', function() {
  
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});
