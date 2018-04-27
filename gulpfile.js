'use strict'

let gulp = require('gulp')
let rename = require('gulp-rename')
let browserify = require('browserify')
let babel = require('babelify')
let source = require('vinyl-source-stream')
let ugly = require('gulp-uglify')
let buffer = require('vinyl-buffer')
let minicss = require('gulp-minify-css')

gulp.task('scripts', function () {
  browserify('./src/main.js')
    .transform(babel, { presets: ["es2015"] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(buffer())
    .pipe(ugly())
    .pipe(gulp.dest('public'))
})

gulp.task('styles', function () {
  gulp
    .src('./styles/main.css')
    .pipe(rename('app.css'))
    .pipe(minicss())
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['scripts', 'styles'])
