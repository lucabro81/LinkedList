var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

function ts_to_file(file) {
    return gulp.src('src/app/' + file + '.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: "amd",
            outDir: "dist/js/",
            outFile: file + ".js"
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: __dirname + "/src"}))
        .pipe(gulp.dest("dist/js/"));
}

gulp.task('typescript-app', function() {
   return ts_to_file('app');
});

gulp.task('typescript-config', function() {
    return ts_to_file('config');
});

gulp.task('build', ['typescript-app', 'typescript-config'], function() {
   console.log("app built");
});