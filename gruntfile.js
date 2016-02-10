module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        wiredep: {
            task: {
                src: ['public/index.html']
            }
        },
        watch: {
            files: ['public/bower_components/*'],
            tasks: ['wiredep']
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['wiredep']);
    grunt.registerTask('changes', ['watch']);

};