module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed'
        },
        dist: {
            files: {
                'styles/main.css': 'styles/mains.scss'
            }
        }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('westsupersass', ['sass', 'watch']);

};



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
