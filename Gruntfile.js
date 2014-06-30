module.exports = function (grunt) {
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
                    'built/css/app.css': 'scss/app.scss',
                    'built/slick/slick.css': 'slick/slick.scss'

                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'built/js/Site.js': ['scripts/app.coffee'],
                    'built/js/home.js': ['scripts/home.coffee']
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
        copy: {
            main: {
                files: [
                    {expand: true, src: "img/**", dest: "built/"},
                    {expand: true, src: "js/**", dest: "built/"},
                    {expand:true, src: ["slick/**", "!slick/slick.scss", "!slick/slick.js",
                    "!slick/slick.css"], dest: "built/"}
                ]
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: ['scss/**/*.scss','slick/slick.scss'],
                tasks: ['sass']
            }

        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['sass', 'copy', 'assemble', 'coffee']);
    grunt.registerTask('default', ['build', 'watch']);
}