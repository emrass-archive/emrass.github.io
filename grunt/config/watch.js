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

    watch['css'] = {
      files: [
        config.paths.src + '/css/**/*.css'
      ],
      tasks: ['copy:stageCss']
    };

    watch['sass'] = {
      files: [
        config.paths.src + '/_scss/**/*.{scss,sass}'
      ],
      tasks: ['sass:server']
    };

    watch['server'] = [config.paths.tmp, config.paths.jekyllServer];

    return watch;
  };
}());
