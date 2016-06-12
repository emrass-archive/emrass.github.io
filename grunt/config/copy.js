(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var copy = {};

    copy['stageCss'] = {
      files: [{
        expand: true,
        dot: true,
        cwd: config.paths.app + '/css',
        src: '**/*.css',
        dest: '.tmp/css'
      }]
    };

    return copy;
  };
}());
