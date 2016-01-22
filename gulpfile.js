const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const electron = require('electron-connect').server.create();

const dirs = {
    src:'./src',
    dist:'./dist',
    conf:'./data'
};




gulp.task('serve', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.js', 'index.html'], electron.reload);
});