(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var copy = {};

    copy['stageCss'] = {
      files: [{
        expand: true,
        dot: true,
        cwd: config.paths.src + '/css',
        src: '**/*.css',
        dest: config.paths.tmp + '/css'
      }]
    };

    return copy;
  };
}());
