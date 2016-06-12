(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var tasks = {
    };

    tasks['serve'] = [
      'clean:server',
      'sass:server',
      'copy:stageCss',
      'jekyll:server',
      'postcss:dist',
      'browserSync:server',
      'watch'
    ];

    tasks['build'] = [
      'clean',
      'jekyll:dist',
      'sass:dist',
      'copy:dist',
      'useminPrepare',
      // add usemin tasks here, e.g. concat:generated, cssmin:generated, ...
      'concat:generated',
      'cssmin:generated',
      'postcss:dist',
      'uglify:generated',
      'usemin'
    ];

    tasks['deploy'] = [
      'build',
      'buildcontrol'
    ];

    return tasks;
  };
}());
