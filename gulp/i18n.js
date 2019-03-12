'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('i18n', function() {

  var esFilter = $.filter('*.es.json', {
    restore: true
  });

  var enFilter = $.filter('*.en.json', {
    restore: true
  });

  gulp.src(path.join(conf.paths.src, '/config/i18n/*.yaml'))
    .pipe($.yaml())
    .pipe(esFilter)
    .pipe($.mergeJson('es.json'))
    .pipe(esFilter.restore)
    .pipe(enFilter)
    .pipe($.mergeJson('en.json'))
    .pipe(enFilter.restore)
    .pipe($.debug({title:'i18n'}))
  .pipe(gulp.dest(path.join(conf.paths.src, '/assets/i18n/')))
    .pipe(browserSync.stream());

});
