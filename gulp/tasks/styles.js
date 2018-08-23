const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require("postcss-simple-vars");
const nested = require('postcss-nested');
const cssimport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('styles',function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport,mixins,cssvars,nested,autoprefixer]))
    .on('error',(errorInfo)=>{
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});