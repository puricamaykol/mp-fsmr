var gulp        = require('gulp');
var rename = require('gulp-rename');
const babelMinify = require("gulp-babel-minify");
var gutil = require('gulp-util');

gulp.task('uglify', function() {
    return gulp.src('./src/InstaPago.js')
        .pipe(rename('instapago.min.js'))
        .pipe(babelMinify({
          mangle: {
            keepClassName: true
          }
        }))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('build'));
});
 
gulp.task('default', ['uglify']);