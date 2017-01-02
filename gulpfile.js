var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    yargs = require('yargs');
    replace = require('gulp-replace');

/**
 * compile ts with amd module flag to unique file
 */
function tsToFile(file) {
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

/**
 * compile ts with CommonJS module flag, removing comments from code
 */
function tsCommonJS(from, to) {
    return gulp.src(from)
        .pipe(ts({
            module: "CommonJS",
            removeComments: true
        }))
        .pipe(gulp.dest(to));
}

////////////////////////////////////////

gulp.task('typescript-app', function() {
   return tsToFile('app');
});

gulp.task('typescript-config', function() {
    return tsToFile('config');
});

gulp.task('typescript-commonjs', function() {
    return tsCommonJS('src/**/*.ts', 'spec/app/');
});

gulp.task('typescript-tests', ['typescript-commonjs'], function() {
    return tsCommonJS('spec/**/*.ts', 'spec/');
});

gulp.task('build-test', ['typescript-tests'], function() {
    return gulp.src('spec/test/**/*.spec.js')
        .pipe(replace(/(?:(?:\.\.\/)+src)+/g, '../app')) // capture strings like ../../../src
        .pipe(gulp.dest('spec/test'));
});

gulp.task('build-app', ['typescript-app', 'typescript-config'], function() {
   console.log("app built");
});

gulp.task('build-all', ['build-app', 'build-test'], function() {
    console.log("app built");
    console.log("tests built");
});

gulp.task('run-tests', function() {
    // TODO: todo run-tests task
});

gulp.task('watch', function() {
    // TODO: todo watch task
});

gulp.task('watch-test', function() {
    // TODO: todo watch-tests task
});

gulp.task('clean', function() {
    // TODO: todo clean task
});