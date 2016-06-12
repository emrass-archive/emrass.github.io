(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var usemin = {
      options: {
        assetsDirs: [
          config.paths.dist,
          config.paths.dist + '/img'
        ]
      },
      html: [config.paths.dist + '/**/*.html'],
      css: [config.paths.dist + '/css/**/*.css']
    };

    return usemin;
  };
}());
