module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        //
        // watch for changes
        //
        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: './styles/modules/import.scss',
                tasks: ['sass:dist']
            },
            js: {
                files: './scripts/modules/**/*.js',
                tasks: ['uglify:watch']
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed',
                includePaths: [
                    'node_modules/breakpoint-sass/stylesheets/',
                    'node_modules/breakpoint-slicer/stylesheets/'
                ]
            },
            dist: {
                files: {
                    './styles/master.bundle.css': ['./styles/modules/import.scss']
                }
            }
        },
        uglify: {
            watch: {
                files: {
                    './scripts/master.bundle.js': ['./scripts/modules/**/*.js'],
                },
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                }
            },
            build: {
                files: {
                    './scripts/master.bundle.js': ['./scripts/modules/**/*.js'],
                },
                options: {
                    sourceMap: true,
                    preserveComments: false,
                    mangle: true,
                    compress: {
                        drop_console: false
                    }
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
                ]
            },
            dist: {
                src: 'styles/*.css'
            }
        }
    });
    //
    // Use grunt-tasks to load modules instead of
    // grunt.loadNpmTasks('xxx');
    //
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('libs', ['uglify:build']);
    grunt.registerTask('build', ['sass:dist', 'libs','postcss']);
};
