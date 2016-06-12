(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var useminPrepare = {
      options: {
        dest: config.paths.dist,
        staging: config.paths.tmp
      },
      html: config.paths.dist + '/index.html'
    };

    return useminPrepare;
  };
}());
