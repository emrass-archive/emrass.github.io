(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var sass = {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        loadPath: config.paths.src + '/_bower_components'
      }
    };

    sass['dist'] = {
      files: [{
        expand: true,
        cwd: config.paths.src + '/_scss',
        src: '**/*.{scss,sass}',
        dest: config.paths.tmp + '/css',
        ext: '.css'
      }]
    };

    sass['server'] = {
      options: {
        debugInfo: true,
        lineNumbers: true
      },
      files: [{
        expand: true,
        cwd: config.paths.src + '/_scss',
        src: '**/*.{scss,sass}',
        dest: config.paths.tmp + '/css',
        ext: '.css'
      }]
    };

    return sass;
  };
}());
