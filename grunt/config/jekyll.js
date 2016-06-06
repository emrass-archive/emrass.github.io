(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var jekyll = {
      options: {
        config: '_config.yml,_config.build.yml',
        src: config.paths.src,
        bundleExec: true
      }
    };

    jekyll['dist'] = {
      options: {
        dest: config.paths.dist
      }
    };

    jekyll['server'] = {
      options: {
        config: '_config.yml',
        dest: '.jekyll'
      }
    };

    return jekyll;
  };
}());
