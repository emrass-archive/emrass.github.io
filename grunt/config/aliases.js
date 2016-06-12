(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var tasks = {
    };

    tasks['serve'] = [
      'clean:server',
      'jekyll:server',
      'connect:server',
      'watch'
    ];

    tasks['build'] = [
      'clean',
      'jekyll:dist',
      'sass:dist',
      'copy:stageCss'
    ];

    tasks['deploy'] = [
      'build',
      'buildcontrol'
    ];

    return tasks;
  };
}());
