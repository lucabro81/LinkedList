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
 * compile ts with CommonJS module flag
 */
function tsCommonJS(from, to) {
    return gulp.src(from)
        .pipe(ts({
            module: "CommonJS"
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

// todo: better regex, take a look to gulp-replace doc
gulp.task('build-test', ['typescript-tests'], function() {
    return gulp.src('spec/test/**/*.js')
        .pipe(replace(/(..\/)|(.\/)?src/g, './app'))
        .pipe(gulp.dest('spec/test'));
});


gulp.task('build', ['typescript-app', 'typescript-config'], function() {
   console.log("app built");
});