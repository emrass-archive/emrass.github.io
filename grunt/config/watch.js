(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var watch = {};

    watch['jekyll'] = {
      files: [
        config.paths.src + '/**/*.{html,yml,md,mkd,markdown}'
      ],
      tasks: ['jekyll:server']
    };

    watch['sass'] = {
      files: [
        config.paths.app + '_scss/**/*.{scss,sass}'
      ],
      tasks: ['sass:server']
    };

    watch['server'] = ['.tmp', '.jekyll'];;

    return watch;
  };
}());
