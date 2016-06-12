(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var filerev = {
      options: {
        length: 6
      }
    };

    filerev['dist'] = {
      files: [{
        src: [
          config.paths.dist + '/js/**/*.js',
          config.paths.dist + '/css/**/*.css',
          config.paths.dist + '/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
          config.paths.dist + '/fonts/**/*.{eot*,otf,svg,ttf,woff}'
        ]
      }]
    }

    return filerev;
  };
}());
