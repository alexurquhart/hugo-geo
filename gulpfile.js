var gulp = require("gulp")
var babel = require("gulp-babel")
var concat = require("gulp-concat")
var sass = require("gulp-sass")
var uglify = require("gulp-uglify")
var sourcemaps = require("gulp-sourcemaps")

gulp.task("babel:debug", () => {
    return gulp.src("static/js/src/hugo-geo.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('static/js'))
})

gulp.task("babel:prod", () => {
    return gulp.src("static/js/src/hugo-geo.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
})

gulp.task("sass:debug", () => {
    return gulp.src("static/css/src/hugo-geo.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("static/css"))
})

// TODO - change
gulp.task("sass:prod", () => {
    return gulp.src("static/css/src/hugo-geo.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("static/css"))
})

gulp.task("watch", () => {
    gulp.watch("static/js/src/**.js", ["babel:debug"])
    gulp.watch("static/css/src/*.scss", ["sass:debug"])
})

gulp.task("default", ["babel:prod", "sass"])