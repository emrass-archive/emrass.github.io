(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var postcss = {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']})
        ]
      }
    };

    postcss['dist'] = {
      expand: true,
      cwd: config.paths.tmp,
      src: '**/{css,concat/*.css',
      dest: config.paths.tmp
    };

    return postcss;
  };
}());
