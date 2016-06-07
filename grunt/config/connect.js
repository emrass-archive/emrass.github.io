(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var connect = {
      options: {
        port: 8000,
        open: true
      }
    };

    connect['dist'] = {
      options: {
        base: 'dist'
      }
    };

    connect['server'] = {
      options: {
        base: '.jekyll'
      }
    };

    return connect;
  };
}());
