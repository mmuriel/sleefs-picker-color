'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
 

gulp.task('hello',function(){

	let date = new Date();
	console.log(`Hola mundo a las ${date.toUTCString()}`);


});


gulp.task('initwatch',function(){

	browserSync.init({
		server: {
		  baseDir: 'app'
		},
	});


	gulp.watch('app/*.html').on("change",browserSync.reload);
	gulp.watch('app/css/*.css').on("change",browserSync.reload);
	gulp.watch('app/js/*.js').on("change",browserSync.reload);

});

gulp.task('init',['initwatch','hello']);




