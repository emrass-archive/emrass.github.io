(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var clean = {};

    clean['dist'] = {
      files: [{
        dot: true,
        src: [
          config.paths.dist + '/*',
          '!' + config.paths.dist + '/.git*'
        ]
      }]
    };

    clean['server'] = [config.paths.tmp, config.paths.jekyllServer];

    return clean;
  };
}());
