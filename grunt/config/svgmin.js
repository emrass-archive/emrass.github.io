(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var svgmin = {};

    svgmin['dist'] = {
      files: [{
        expand: true,
        cwd: config.paths.dist,
        src: [
          '**/*.svg',
          '!fonts/**/*.svg'
        ],
        dest: config.paths.dist
      }]
    };

    return svgmin;
  };
}());
