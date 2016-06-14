(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var watch = {};

    watch['jekyll'] = {
      files: [
        config.paths.src + '/**/*.{html,yml,md,mkd,markdown}',
        './_config.yml',
        '!' + config.paths.src + '/_bower_components/**/*'
      ],
      tasks: ['jekyll:server']
    };

    watch['css'] = {
      files: [
        config.paths.src + '/css/**/*.css'
      ],
      tasks: ['copy:stageCss', 'postcss:dist']
    };

    watch['sass'] = {
      files: [
        config.paths.src + '/_scss/**/*.{scss,sass}'
      ],
      tasks: ['sass:server', 'postcss:dist']
    };

    watch['server'] = [config.paths.tmp, config.paths.jekyllServer];

    return watch;
  };
}());
