// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//      sass: {
//         options: {
//             sourceMap: true,
//             outputStyle: 'compressed'
//         },
//         dist: {
//             files: {
//                 'styles/main.css': 'styles/main.scss'
//             }
//         }
//     },
//     watch: {
//         files: ['**/*.scss', '<%= jshint.files %>'],
//         tasks: ['sass', 'jshint']
//     },
//    jshint: {
//       files: ['Gruntfile.js', 'app.js'],
//       options: {
//         globals: {
//           jQuery: true
//         }
//       }
//     },
//   });

//   // Load the grunt plugins
//   grunt.loadNpmTasks('grunt-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-contrib-jshint');


//   // Default task(s).
//   grunt.registerTask('default', ['sass', 'jshint', 'watch']);

// };


// MY FUCK UP


module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed'
        },
        dist: {
            files: {
                'styles/main.css': 'styles/main.scss'
            }
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'app.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['**/*.scss', '<%= jshint.files %>'],
      tasks: ['jshint', 'sass']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'jshint', 'watch']);

};


// THIS WORKS


// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//      sass: {
//         options: {
//             sourceMap: true,
//             outputStyle: 'compressed'
//         },
//         dist: {
//             files: {
//                 'styles/main.css': 'styles/mains.scss'
//             }
//         }
//     },
//     watch: {
//       sass: {
//         files: ['**/*.scss'],
//         tasks: ['sass']
//       }
//     }
//   });

//   // Load the grunt plugins
//   grunt.loadNpmTasks('grunt-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');

//   // Default task(s).
//   grunt.registerTask('default', ['sass']);
//   grunt.registerTask('westsupersass', ['sass', 'watch']);

// };



// MY FAIL BELOW


// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//     sass: {
//         options: {
//             sourceMap: true,
//             outputStyle: 'compressed'
//         },
//         dist: {
//             files: {
//                 'styles/main.css': 'styles/main.scss'
//             }
//         },
//         watch: {
//           sass: {
//             files: ['**/*.scss'],
//             tasks: ['sass']
//         }
//     }
//   });

//   // Load grunt plugins

//   grunt.loadNpmTasks('grunt-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   // Default task(s).
//   grunt.registerTask('default', ['sass']);

// };
