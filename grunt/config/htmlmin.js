(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var htmlmin = {};

    htmlmin['dist'] = {
      options: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true
      },
      files: [{
        expand: true,
        cwd: config.paths.dist,
        src: '**/*.html',
        dest: config.paths.dist
      }]
    };

    return htmlmin;
  };
}());
