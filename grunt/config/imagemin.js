(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var imagemin = {};

    imagemin['dist'] = {
      options: {
        progressive: true
      },
      files: [{
        expand: true,
        cwd: config.paths.dist,
        src: '**/*.{jpg,jpeg,png}',
        dest: config.paths.dist
      }]
    };

    return imagemin;
  };
}());
