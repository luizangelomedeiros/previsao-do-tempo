'use strict';
 
var gulp = require('gulp');
var	sass = require('gulp-sass');
var	rename = require("gulp-rename");

/* CONVERTE SASS PARA CSS MINIFICADO */
gulp.task('sass', function(){
  return gulp.src('css/sass/previsaoTempo.scss')  	
    .pipe(sass({outputStyle: 'compressed'}))    
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/min'))
});

gulp.task('watch',function() {
    gulp.watch('css/sass/previsaoTempo.scss',['sass']);
})