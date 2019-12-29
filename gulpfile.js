var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json")

var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var del = require('del');

function clean(cb) {
    del(["dist/*.map"])
    cb()
}

function dev() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
}
function build(cb) {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));

    cb()
}

gulp.task("default", function () {
    return gulp.watch("src/index.ts", gulp.series(dev))
})

gulp.task("prod", gulp.series(clean, build))