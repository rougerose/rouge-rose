module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          loadPath: [
            // 'bower_components/bourbon/dist',
            'bower_components/inuit.css'
          ],
          style: 'compressed',
        },
        files: {
          'css/rouge-rose.min.css':'css/rouge-rose.scss'
        }
      },
      dev: {
        options: {
          loadPath: [
            // 'bower_components/bourbon/dist',
            'bower_components/inuit.css'
          ],
          style: 'nested',
          lineNumbers: true
        },
        files: {
          'css/rouge-rose.min.css':'css/rouge-rose.scss'
        }
      }
    },
    watch: {
      grunt: { files: ['GruntFile.js'] },
      sass: {
        files: 'css/**/*.scss',
        tasks: ['sass:dev']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('dist', ['sass:dist']);
  grunt.registerTask('dev', ['sass:dev']);
  grunt.registerTask('default', ['dev']);
}