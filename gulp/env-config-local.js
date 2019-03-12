'use strict';


// Minimal requirements
var path    = require('path');
var map     = require('map-stream');
var yaml    = require('js-yaml');
var gulp    = require('gulp');
var conf    = require('./conf');
var gutil   = require('gulp-util');

var args = process.argv;
var env = (args.length > 3) ? String(args[3]).replace('--', '') : 'dev';
// si env no esta defiindo muestra mensaje de error
var envs = ['dev', 'pre', 'production'];
if (envs.indexOf(env) < 0) {
  // eslint-disable-next-line
  console.error('Evironment no esta definido, debe ser alguno de estos valores ("--ENV" por defecto es --dev): %s', envs);
  process.exit();
}

// Create JS files from YML files
gulp.task('env-config-local', function(){
  gulp.src(path.join(conf.paths.src, '/config/env.module.yaml'))
    .pipe(map(function(file,cb){
      if (file.isNull()) return cb(null, file); // pass along
      if (file.isStream()) return cb(new Error("Streaming not supported"));

      var json;
      var currentEnv;

      try {
        json = yaml.load(String(file.contents.toString('utf8')));
        currentEnv = json[env];
      } catch(e) {
        console.log(e);
        console.log(json);
      }

      file.path = gutil.replaceExtension(file.path, '.json');
      file.contents = new Buffer(JSON.stringify(currentEnv));

      cb(null,file);
    }))
    .pipe(gulp.dest('src/config/env'));
});
