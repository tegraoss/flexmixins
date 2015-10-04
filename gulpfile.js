var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
  return gulp.src(['_flexmixins.scss', '_flexmixins.less'])
        .pipe(autoprefixer('last 30 versions'))
        .pipe(gulp.dest('dist'));
});
