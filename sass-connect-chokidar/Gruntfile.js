module.exports = function(grunt) {

  // Project Configuration
  //---------------------------------------------------------
  grunt.initConfig({
    // Define
    pkg: grunt.file.readJSON('package.json'),

    rootPath: '../',
    appPath: '<%= rootPath %>' + 'app/',
    sassPath: '<%= appPath %>' + 'sass/',
    cssPath: '<%= appPath %>' + 'css/',

    // sass
    sass: {
      dev: {
        expand: true,
        cwd: '<%= sassPath %>',
        src: '*.scss',
        dest: '<%= cssPath %>',
        ext: '.css'
      }
    },

    // Web Server
    connect: {
      server: {
        options: {
          keepalive: false,
          protocol: 'http',
          hostname: 'localhost',
          base: '<%= appPath %>',
          port: 8080,
          livereload: 35729
        }
      }
    },

    // Watch
    chokidar: {
      options: {
        livereload: 35729
      },
      sass: {
        files: '<%= sassPath %>' + '**/*.scss',
        tasks: ['sass:dev']
      }
    }

    // end
  });

  // Grunt Plugins
  //---------------------------------------------------------
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-chokidar');

  // Grunt Tasks
  //---------------------------------------------------------
  grunt.registerTask('print', function(){
    grunt.log.writeln('this is the default task');
  });

  // grunt.registerTask('default', ['connect:server']);
  grunt.registerTask('default', [
    'connect:server',
    'chokidar'
  ]);

}
