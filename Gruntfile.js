module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'built/css/app.css': 'scss/app.scss'
        }        
      }
    },
    coffee: {
            compile: {
                files: {
                    'built/js/Site.js': ['scripts/*.coffee']
                }
            }
        },
    assemble: {
            options: {
                flatten: true,
                layout: ['templates/default.hbs']
            },
            site: {
                src: 'pages/*.hbs',
                dest: 'built/'
            }
        },
        copy:{  
            main:{
                files:[
                    {expand:true, src: "img/**", dest: "built/"}
                ]
            }
        },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['sass','coffee','copy','assemble']);
  grunt.registerTask('default', ['build','watch']);
}