(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var buildcontrol = {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      }
    }

    buildcontrol['github'] = {
      options: {
        remote: 'git@github.com:emrass/emrass.github.io.git',
        branch: 'master'
      }
    }

    return buildcontrol;
  };
}());
