const gulp = require('gulp'),
	  browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {
    browserSync.init({
        server: './'
    });

    gulp.watch(['index.html', 'css/*.css', 'js/*.js']).on('change', browserSync.reload);
});