const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/Assets/scss/**.*scss';
const SCSS_DEST = './src/Assets/css';

// Compile SCSS

function css(cb) {
    return gulp.src(SCSS_SRC)
            .pipe(sass().on('error', sass.logError))
            .pipe(minifyCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(changed(SCSS_DEST))
            .pipe(gulp.dest(SCSS_DEST));
    cb();
}
function watch() {
    gulp.watch(SCSS_SRC, css);
    return;
}



exports.css = css;

exports.default = gulp.series(css, watch);
