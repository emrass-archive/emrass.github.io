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

    clean['server'] = ['.tmp', '.jekyll'];

    return clean;
  };
}());
