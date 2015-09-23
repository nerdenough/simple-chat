// Gruntfile.js
module.exports = function(grunt) {
  // Set grunt config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha: {
      all: {
        src: ['tests/testrunner.html']
      },
      options: {
        run: true
      }
    }
  });

  // Load mocha tasks
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['mocha']);
};
