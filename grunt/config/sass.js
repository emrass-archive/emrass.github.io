(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var sass = {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false
      }
    };

    sass['dist'] = {
      files: [{
        expand: true,
        cwd: config.paths.app + '/_scss',
        src: '**/*.{scss,sass}',
        dest: '.tmp/css',
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
        cwd: config.paths.app + '/_scss',
        src: '**/*.{scss,sass}',
        dest: '.tmp/css',
        ext: '.css'
      }]
    };

    return sass;
  };
}());
