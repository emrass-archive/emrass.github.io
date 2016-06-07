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

    return tasks;
  };
}());
