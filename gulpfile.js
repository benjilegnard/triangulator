const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const electron = require('electron-connect').server.create();
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const watchify = require('watchify');
const reactify = require('reactify');
const browserify = require('browserify');
const del = require('del');

const paths = {
    src:'./app',
    js:'./app/*.js',
    css:'./app/styles/index.scss',
    dest:'./dist',
    conf:'./data'
};

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
    var props = {
        entries: [paths.src + '/' + file],
        debug: true
    };
    var bundler = watch ? watchify(browserify(props)) : browserify(props);
    bundler.transform( babelify,{presets: ["es2015", "react"]});
    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(paths.dest + '/'));
    }
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}

gulp.task('clean', function(done) {
    //del(['build'], done);
});

gulp.task('css', function(){
 return gulp.src(paths.css)
     .pipe(sass())
     .pipe(gulp.dest(paths.dest+'/css'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch',['js-watch'] ,function() {
    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch([paths.js, 'index.html'], electron.reload);

    gulp.watch(paths.css, ['css']);
    //gulp.watch(paths.js, ['js']);
});

gulp.task('js', function() {
    return buildScript('index.js', false);
});
gulp.task('js-watch', function() {
    return buildScript('index.js', true);
});


gulp.task('serve', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.js', 'index.html'], electron.reload);
});


gulp.task('default', function(){

});