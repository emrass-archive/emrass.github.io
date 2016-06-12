(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var copy = {};

    copy['dist'] = {
      files: [{
        expand: true,
        dot: true,
        cwd: config.paths.src,
        src: [
          // Jekyll processes and moves HTML and text files
          // Usemin moves CSS and javascript inside usemin-blocks
          // copy moves asset files and directories
          'img/**/*',
          'fonts/**/*',
          // Like Jekyll, exclude files and folders prefixed with an _
          '!**/_*{,/**}'
          // Explicitly add any files the site needs for distribution here
          // , '...'
        ],
        dest: config.paths.dist
      }]
    };

    copy['stageCss'] = {
      files: [{
        expand: true,
        dot: true,
        cwd: config.paths.src + '/css',
        src: '**/*.css',
        dest: config.paths.tmp + '/css'
      }]
    };

    return copy;
  };
}());
